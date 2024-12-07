function beginOCR() {

        try {
            for (let i = 0; i < imageData.length; i++) {
                // sap.m.MessageToast.show(`Processing Data: ${i + 1}`)

                // Validate smallImage.getSrc
                changeSmallImage(imageData[i].split(",")[1]);

                const imgSrc = smallImage.getSrc();

                if (!imgSrc || typeof imgSrc !== 'string' || !imgSrc.startsWith('data:image')) {
                    throw new Error(`Invalid image source: ${imgSrc}`);
                }

                console.log(imgSrc)

                var options = {
                    data: {"image64" : imgSrc}
                };

                apiEasyOCRAPI(options);
                
            }

            oTextArea.setValue(resultOCR);
            console.log(resultOCR);

        } catch (error) {
            console.error('Error during OCR processing:', error);
        } finally {
            oApp.setBusy(false);
            oBtnOCR.setEnabled(true);
            oTextArea.setVisible(true);
            smallImage.setHeight("300px");
            smallImage.setWidth("200px");
        }
}