var file = oEvent.getParameter("files")[0];
try {
    if(file && window.FileReader) {
        
        if(file.type === "application/pdf") {

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

                imageData.push(imgURL);

                onPhotoDataSuccess(imageData[0].split(",")[1]);


                //CODE INI UNTUK DOWNLOAD IMAGE PAGE SETELAH HASIL CONVERT
                // let link = document.createElement('a');
                // link.href = imgURL;
                // link.download = `page-${i}.png`;
                // link.click();
            }
        } else {
            
             var reader = new FileReader();
            reader.onload = function (e) {
                onPhotoDataSuccess(reader.result.split(",")[1]);

                imageData.push(reader.result)
            };
            reader.onerror = function (e) {
                console.error(e);
            };
            reader.readAsDataURL(file);
            }
    }
    else if (file && window.FileReader) {

       
    }
} catch (e) {
    console.error(e);
}
