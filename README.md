# React Native Exif
>An image exif reader

## Installation
- step1:
    ```sh
    # if using yarn
    yarn add @notech/react-native-exif
    
    # if usng npm
    npm install @notech/react-native-exif --save
    ```

- step2:  
    If your react-native version is below v60, running `react-native link`,  
    If your react-native version is v60+, running `npx pod-install`
  

## Usage

### getExif

```javascript
import Exif from 'react-native-exif'

// ...

Exif.getExif('/sdcard/tt.jpg')
    .then(msg => console.warn('OK: ' + JSON.stringify(msg)))
    .catch(msg => console.warn('ERROR: ' + msg))

// ...

Exif.getExif('content://media/external/images/media/111')
    .then(msg => console.warn('OK: ' + JSON.stringify(msg)))
    .catch(msg => console.warn('ERROR: ' + msg))

// ...

Exif.getExif('assets-library://asset/asset.JPG?id=xxxx&ext=JPG')
    .then(msg => console.warn('OK: ' + JSON.stringify(msg)))
    .catch(msg => console.warn('ERROR: ' + msg))

```
#### Exif values

Value |
--- |
ImageWidth |
ImageHeight |
Orientation |
originalUri |
exif|

### getLatLong

Fetch geo coordinates as floats.

```javascript
// ...
Exif.getLatLong('/sdcard/tt.jpg')
    .then(({latitude, longitude}) => {console.warn('OK: ' + latitude + ', ' + longitude)})
    .catch(msg => console.warn('ERROR: ' + msg))
// ...
```

### getSize

Get file size in bytes.

```javascript
// ...
Exif.getSize('uri')
    .then((sizeInBytes) => {console.warn('OK: ' + sizeInBytes)})
    // .catch(msg => console.warn('ERROR: ' + msg))
// ...
```
