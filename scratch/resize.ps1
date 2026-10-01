Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\LENOVO\OneDrive\Desktop\website2\Sistem_Blok\Latihan\public\pp.png"
$destPath = "C:\Users\LENOVO\OneDrive\Desktop\website2\Sistem_Blok\Latihan\public\profile.png"

$img = [System.Drawing.Image]::FromFile($srcPath)
$origW = $img.Width
$origH = $img.Height
Write-Host "Original dimensions: $origW x $origH"

# Target max dimension 1200px
$maxDim = 1200
if ($origW -gt $origH) {
    $newWidth = $maxDim
    $newHeight = [int]($origH * ($maxDim / $origW))
} else {
    $newHeight = $maxDim
    $newWidth = [int]($origW * ($maxDim / $origH))
}

$bmp = New-Object System.Drawing.Bitmap $newWidth, $newHeight
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($img, 0, 0, $newWidth, $newHeight)

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

$file = Get-Item $destPath
Write-Host "Optimized profile.png size: $($file.Length / 1KB) KB ($newWidth x $newHeight)"
