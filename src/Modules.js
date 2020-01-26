/*
* Core modules and their info files
*/
module.exports = {
  'add-qr': require('./modules/AddQR'),
  'average': require('./modules/Average'),
  'blend': require('./modules/Blend'),
  'blob-analysis': require('./modules/BlobAnalysis'),
  'blur': require('./modules/Blur'),
  'brightness': require('./modules/Brightness'),
  'canvas-resize': require('./modules/CanvasResize'),
  'channel': require('./modules/Channel'),
  'colorbar': require('./modules/Colorbar'),
  'color-temperature': require('./modules/ColorTemperature'),
  'colormap': require('./modules/Colormap'),
  'constrained-crop': require('./modules/ConstrainedCrop'),
  'contrast': require('./modules/Contrast'),
  'convolution': require('./modules/Convolution'),
  'crop': require('./modules/Crop'),
  'decode-qr': require('./modules/DecodeQr'),
  'dither': require('./modules/Dither'),
  'draw-rectangle': require('./modules/DrawRectangle'),
  'dynamic': require('./modules/Dynamic'),
  'edge-detect': require('./modules/EdgeDetect'),
  'exposure': require('./modules/Exposure'),
  'flip-image': require('./modules/FlipImage'),
  'fisheye-gl': require('./modules/FisheyeGl'),
  'histogram': require('./modules/Histogram'),
  'gamma-correction': require('./modules/GammaCorrection'),
  'gradient': require('./modules/Gradient'),
  'grid-overlay': require('./modules/GridOverlay'),
  'import-image': require('./modules/ImportImage'),
  'minify-image': require('./modules/MinifyImage'),
  // 'invert': require('image-sequencer-invert'),
  'invert': require('./modules/Invert'),
  'ndvi': require('./modules/Ndvi'),
  'ndvi-colormap': require('./modules/NdviColormap'),
  'noise-reduction': require('./modules/NoiseReduction'),
  'overlay': require('./modules/Overlay'),
  'paint-bucket': require('./modules/PaintBucket'),
  'replace-color': require('./modules/ReplaceColor'),
  'resize': require('./modules/Resize'),
  'rotate': require('./modules/Rotate'),
  'saturation': require('./modules/Saturation'),
  'shadow': require('./modules/Shadow'),
  'text-overlay': require('./modules/TextOverlay'),
  'threshold': require('./modules/Threshold'),
  'tint': require('./modules/Tint'),
  'webgl-distort': require('./modules/WebglDistort'),
  'white-balance': require('./modules/WhiteBalance')
};
