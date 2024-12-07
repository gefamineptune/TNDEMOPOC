const templateEmailId = '252a70cf-7f60-4a58-bab8-efe1d4db93c0';


//GUNAKAN CODE INI JIKA INGIN MENAMBAHKAN ATTACHMENT PADA EMAIL
// const attachments = [{
// filename: "filename.txt",
// path: "/path/to/file.txt"
// }]

let subject = 'Testing Send Email';
let toEmail = 'flasherdae@gmail.com';
let fromEmail = 'no-reply@traknuspoc.com';
let placeholder = {
    'name' : 'Fachry',
    'linkTest' : 'https://www.google.com/'
}

//GUNAKAN INI JIKA MENGGUNAKAN ATTACHMENTS
// await sendEmail(toEmail, subject, null, fromEmail, templateEmailId, placeholder, attachments);

await sendEmail(toEmail, subject, null, fromEmail, templateEmailId, placeholder);

complete();


