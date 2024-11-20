let selectedDeviceId;

const codeReader = new ZXing.BrowserMultiFormatReader()
// console.log('ZXing code reader initialized')
codeReader.listVideoInputDevices()
  .then((videoInputDevices) => {
    selectedDeviceId = videoInputDevices[0].deviceId;

  })
  .catch((err) => {
    console.error(err)
  })


function startScan() {

  codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
    if (result) {
      //console result to see the output of the scan
      // console.log(result);

      //To view only value of the scan
      // console.log(result.text);

      //Sets it to the UI
      // oTitleScanOutput.setText(result.text)

      onBarcodeDetected(result.text);

      //Automatically closes the scanner once a result is captured
      // codeReader.reset()
    }
    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err)

    }
  })

}


function stopScan() {

  codeReader.reset();
  
}

//  Read further about different implementation procedure on github -https://github.com/zxing-js/library
