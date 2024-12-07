var file = oEvent.getParameter("files")[0];
try {
    if(file && window.FileReader && file.type === "application/pdf") {
        
        isPDF = true;

        let pdfData = await file.arrayBuffer();
        let pdf = await pdfjsLib.getDocument({data : pdfData}).promise;


        for (let i = 1; i <= pdf.numPages; i++) {
            let page = await pdf.getPage(i);

            let viewport = page.getViewport({ scale: 2 });
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport: viewport }).promise;

            let imgURL = canvas.toDataURL('image/png');

            imagePdfData.push(imgURL);

            

            


            //CODE INI UNTUK DOWNLOAD IMAGE PAGE SETELAH HASIL CONVERT
            // let link = document.createElement('a');
            // link.href = imgURL;
            // link.download = `page-${i}.png`;
            // link.click();
        }

        onPhotoDataSuccess(imagePdfData[0].split(",")[1]);
        


    }
    else if (file && window.FileReader) {

        isPDF = false;

        var reader = new FileReader();
        reader.onload = function (e) {
            onPhotoDataSuccess(reader.result.split(",")[1]);
        };
        reader.onerror = function (e) {
            console.error(e);
        };
        reader.readAsDataURL(file);
    }
} catch (e) {
    console.error(e);
}
