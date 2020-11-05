# Note: This script will add or replace version title in change log

# Parameter description
# Version : Version to add or replace in change log
# ChangeLogPath: Path to change log file. If change log path is set to directory then script will probe for change log file in that path 
# Unreleased: Default is true. If it is set to false, then today's date will be set in verion title. If it is True then title will show "Unreleased"
# ReplaceVersion: This is useful when replacing current version title with new title.( Helpful to update the title before package release)

param (
  [Parameter(Mandatory = $true)]
  [String]$Version,
  [Parameter(Mandatory = $true)]
  [String]$ServiceDirectory,
  [Parameter(Mandatory = $true)]
  [String]$PackageName,
  [boolean]$Unreleased=$True,
  [boolean]$ReplaceVersion = $False,
  [String]$ReleaseDate
)

if ($ReleaseDate -and ($Unreleased -eq $True)) {
    LogError "Do not pass 'ReleaseDate' arguement when 'Unreleased' is true"
    exit 1
}

. "${PSScriptRoot}\common.ps1"
$UNRELEASED_TAG = "(Unreleased)"
$DATE_FORMAT = "yyyy-MM-dd"

if ($ReleaseDate)
{
    try {
        $ReleaseStatus = ([DateTime]$ReleaseDate).ToString($DATE_FORMAT)
        $ReleaseStatus = "($ReleaseStatus)"
    }
    catch {
        LogError "Invalid 'ReleaseDate'. Please use a valid date in the format '$DATE_FORMAT'"
        exit 1
    }
}
elseif ($Unreleased) {
    $ReleaseStatus = $UNRELEASED_TAG
}
else {
    $ReleaseStatus = "$(Get-Date -Format $DATE_FORMAT)"
    $ReleaseStatus = "($ReleaseStatus)"
}

$PkgProperties = Get-PkgProperties -PackageName $PackageName -ServiceDirectory $ServiceDirectory
$ChangeLogEntries = Get-ChangeLogEntries -ChangeLogLocation $PkgProperties.ChangeLogPath

if ($ChangeLogEntries.Count -gt 0)
{
    if ($ChangeLogEntries.Contains($Version))
    {
        if ($ChangeLogEntries[$Version].ReleaseStatus -eq $ReleaseStatus)
        {
            LogWarning "Version is already present in change log with specificed ReleaseStatus [$ReleaseStatus]"
            exit(0)
        }

        if ($Unreleased -and ($ChangeLogEntries[$Version].ReleaseStatus -ne $ReleaseStatus))
        {
            LogWarning "Version is already present in change log with a release date. Please review [$($PkgProperties.ChangeLogPath)]"
            exit(0)
        }

        if (!$Unreleased -and ($ChangeLogEntries[$Version].ReleaseStatus -ne $UNRELEASED_TAG))
        {
            if (Get-Date ($ChangeLogEntries[$Version].ReleaseStatus).Trim("()") -gt Get-Date $ReleaseStatus.Trim("()"))
            {
                LogWarning "New ReleaseDate is older than existing release date in changelog. Please review [$($PkgProperties.ChangeLogPath)]"
                exit(0)
            }
        }
    }

    $PresentVersionsSorted = [AzureEngSemanticVersion]::SortVersionStrings($ChangeLogEntries.Keys)
    $LatestVersion = $PresentVersionsSorted[0]

    if ($ReplaceVersion) 
    {
        $ChangeLogEntries.Remove($LatestVersion)
        $ChangeLogEntries[$Version] = New-ChangeLogEntry -Version $Version -Status $ReleaseStatus -IgnoreInvalids $False
    }
    else 
    {
        $ChangeLogEntries[$Version] = New-ChangeLogEntry -Version $Version -Status $ReleaseStatus -IgnoreInvalids $False
    }
}
else 
{
    $ChangeLogEntries[$Version] = New-ChangeLogEntry -Version $Version -Status $ReleaseStatus -IgnoreInvalids $False
}

Set-ChangeLogContent -ChangeLogLocation $PkgProperties.ChangeLogPath -ChangeLogEntries $ChangeLogEntries

