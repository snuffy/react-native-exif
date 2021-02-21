import { Platform, NativeModules } from "react-native";

const Exif = {};

function unifyAndroid(exif) {
  const output = {};

  output.imageWidth = parseInt(exif.ImageWidth);
  output.imageHeight = parseInt(exif.ImageLength);
  output.orientation = parseInt(exif.Orientation);
  if ([5,6,7,8].includes(exif.Orientation)) {
    output.imageWidth = exif.PixelHeight;
    output.imageHeight = exif.PixelWidth;
  }

  output.originalUri = exif.originalUri;
  output.exif = exif;
  return output;
}

function unifyIOS(exif) {
  const output = {};

  output.imageWidth = exif.PixelWidth;
  output.imageHeight = exif.PixelHeight;
  output.orientation = exif.Orientation;
  if ([5,6,7,8].includes(exif.Orientation)) {
    output.imageWidth = exif.PixelHeight;
    output.imageHeight = exif.PixelWidth;
  }

  output.originalUri = exif.originalUri;
  output.exif = exif;
  return output;
}

Exif.getExif = function (uri) {
  const path = uri.replace("file://", "");
  return NativeModules.ReactNativeExif.getExif(path).then((result) => {
    if (Platform.OS === "android") {
      return unifyAndroid(result);
    }
    return unifyIOS(result);
  });
};

Exif.getExifWithLocalIdentifier = function (localIdentifier) {
  return NativeModules.ReactNativeExif.getExifWithLocalIdentifier(
    localIdentifier
  ).then((result) => {
    if (Platform.OS === "android") {
      return unifyAndroid(result);
    }
    return unifyIOS(result);
  });
};

Exif.getLatLong = function (uri) {
  const path = uri.replace("file://", "");
  return NativeModules.ReactNativeExif.getLatLong(path);
};

Exif.getSize = function (uri) {
  const path = uri.replace("file://", "");
  return NativeModules.ReactNativeExif.getSize(path);
};

module.exports = Exif;
