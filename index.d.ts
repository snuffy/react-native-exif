interface ExifInfo {
  imageWidth: number;
  imageHeight: number;
  orientation: number;
  originalUri: string;
  exif: Record<string, any>;
}

interface Exif {
  getExif(uri: string): Promise<ExifInfo>;
  getExifWithLocalIdentifier(localIdentifier: string): Promise<ExifInfo>;
  getLatLong(uri: string): Promise<{ latitude: number; longitude: number }>;
  getSize(uri: string): Promise<number>;
}
declare const Exif: Exif;
export default Exif;
