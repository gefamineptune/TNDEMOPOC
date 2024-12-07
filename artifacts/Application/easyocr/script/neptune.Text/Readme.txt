The purpose of this app is to get text from an image that can be uploaded or live taken.
This app use an open source library named Tesseract.
Tesseract (https://github.com/naptha/tesseract.js) is a open source javascript library that gets words in almost any language out of images.

To use the library, the following CDN needs to be inserted in the header section of the Launchpad:
    -> <script src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'></script>

This solution uses Cordova plugins for the camera and requires a mobile build. If you want to take a picture using a webcam or use a PWA launchpad, please check the addon Webcam Capture (PWA) in the marketplace.