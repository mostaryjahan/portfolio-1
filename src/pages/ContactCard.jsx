import emailjs from 'emailjs-com';
import { useState } from 'react';

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    from_name: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Include the name as from_name for EmailJS
    const emailData = {
      ...formData,
      from_name: formData.name,
    };

    emailjs.send(
      'service_cdg3nyc', // Replace with your actual Service ID
      'template_v4xqtr9', // Replace with your actual Template ID
      emailData,
      '9E8lqT-Rdu04Oq3kS' // Replace with your actual Public Key
    )
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
      setFormData({ name: '', from_name: '', subject: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-200 p-6 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Get In Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-bold rounded-md hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
