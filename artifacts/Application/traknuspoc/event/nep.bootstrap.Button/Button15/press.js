let data = {
    FileName : FileName.getText(),
    Path : FilePath.getText()
}
createUploadDocument(data);
sap.m.MessageToast.show("Document Berhasl disimpan")