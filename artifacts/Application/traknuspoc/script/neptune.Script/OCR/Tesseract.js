async function beginOCR() {
    const worker = window.Tesseract;

    const innerWorker = await worker.createWorker("ind");

    if(isPDF && imagePdfData.length > 1) {
        let allText = ''; 

        (async () => {
        try {
            for (let i = 0; i < imagePdfData.length; i++) {
                sap.m.MessageToast.show(`Processing Page: ${i + 1}`)

                // Validate smallImage.getSrc
                changeSmallImage(imagePdfData[i].split(",")[1]);
                const imgSrc = smallImage.getSrc();
                if (!imgSrc || typeof imgSrc !== 'string' || !imgSrc.startsWith('data:image')) {
                    throw new Error(`Invalid image source: ${imgSrc}`);
                }

                allText += `Page-${i + 1}\n`;

                const {
                    data: { text },
                } = await innerWorker.recognize(imgSrc);

                allText += `${text}\n\n`;
                
            }

            oTextArea.setValue(allText);

        } catch (error) {
            console.error('Error during OCR processing:', error);
        } finally {
            await innerWorker.terminate();
            oApp.setBusy(false);
            ButtonBeginOCR.setEnabled(true);
            oTextArea.setVisible(true);
            smallImage.setHeight("300px");
            smallImage.setWidth("200px");
        }
})();

    } else {
        (async () => {
        const {
            data: { text },
        } = await innerWorker.recognize(smallImage.getSrc());
        oTextArea.setValue(text);
        // console.log(text);
        await innerWorker.terminate();
        oApp.setBusy(false);
        ButtonBeginOCR.setEnabled(true);
        oTextArea.setVisible(true);
        smallImage.setHeight("300px");
        smallImage.setWidth("200px");
        })();
    }

}