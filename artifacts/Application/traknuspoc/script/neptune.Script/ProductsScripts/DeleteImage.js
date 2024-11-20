function deleteImageFromMedia(data)
{
    // Delete image di media library
fetch('http://rnd.ifabula.co.id/api/functions/Media/FileDelete', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    path: data
  })
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
}