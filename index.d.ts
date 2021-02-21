export interface ExifInfo {
  imageWidth: number;
  imageHeight: number;
  orientation: number;
  originalUri: string;
  exif: Record<string, any>;
}

export interface LatLong {
  latitude: number;
  longitude: number;
}

interface Exif {
  getExif(uri: string): Promise<ExifInfo>;

  getExifWithLocalIdentifier(localIdentifier: string): Promise<ExifInfo>;

  getLatLong(uri: string): Promise<LatLong>;

  getSize(uri: string): Promise<number>;
}

declare const Exif: Exif;
export default Exif;
