import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const sendEmail = (e:any) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      e.target,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        console.log('Email sent successfully!');
    }, (error) => {
        console.log('Failed to send email.');
    });
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send Email</button>
    </form>
  );
};