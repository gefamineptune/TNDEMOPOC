const request = req.body;

const templateEmailId = '252a70cf-7f60-4a58-bab8-efe1d4db93c0';

const customerData = await entities.customers.findOne(request.customerId);

const axios = modules.axios;

//INI MENGIRIM WA
const response = await axios.post(
    "https://messages-sandbox.nexmo.com/v1/messages",
    {
    from: "14157386102",
    to: customerData.phone_number,
    message_type: "text",
    //GUNAKAN INI JIKA TEXT AKAN SESUAI REQUEST API
    // text: request.text,
    text : `Halo ${customerData.name}, request order kamu telah di ${request.approvalStatus}, terima kasih`,
    channel: "whatsapp",
  },
  {
    auth: {
      username: '52de0b86',
      password: 'GDSMHah2DLI1hcK4',
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }
)


//DARI SINI MENGIRIM EMAIL

//GUNAKAN CODE INI JIKA INGIN MENAMBAHKAN ATTACHMENT PADA EMAIL
// const attachments = [{
// filename: "filename.txt",
// path: "/path/to/file.txt"
// }]

let subject = 'Request Order Approval Notification';
let toEmail = customerData.email;
let fromEmail = 'no-reply@traknuspoc.com';
let placeholder = {
    'name' : customerData.name,
    'approvalStatus' : request.approvalStatus
}

//GUNAKAN INI JIKA MENGGUNAKAN ATTACHMENTS
// await sendEmail(toEmail, subject, null, fromEmail, templateEmailId, placeholder, attachments);

await sendEmail(toEmail, subject, null, fromEmail, templateEmailId, placeholder);

complete();