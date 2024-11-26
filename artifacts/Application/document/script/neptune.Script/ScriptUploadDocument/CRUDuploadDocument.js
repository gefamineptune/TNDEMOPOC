function createUploadDocument(data)
{
    let options = {
        data: {
            "FileName": data.FileName,
            "Path": data.Path,
        }
    };
    apiInsertDocument(options);
}
