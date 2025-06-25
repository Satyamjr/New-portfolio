import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const sendEmail = (e) => {
    e.preventDefault();
    const phone = form.current.tel.value;

    if (!validatePhone(phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_hp2g208',     
      'template_4qsm4ig',    
      form.current,
      'Gii9DShYKNoTg5lWf'  
      )
      .then(() => {
        toast.success('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        toast.error('Something went wrong! Please try again.');
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white px-6 py-20">
      <div className="max-w-6xl w-full">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Let’s Connect!</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or a role you'd like to discuss? I’m available and actively
            seeking opportunities in development and software engineering.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 bg-gray-100 sm:rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Get in touch</h2>
            <div className="mt-4 space-y-4 text-gray-700">
              <p>📍 Mirzapur, Uttar Pradesh, 231306</p>
              <p>📞 +91 6306958806</p>
              <p>📧 singhsatyam.work@gmail.com</p>
            </div>
          </div>

          
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-6 bg-white border rounded-lg shadow-md flex flex-col justify-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="mt-2 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="mt-4 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Phone Number"
              required
              className="mt-4 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="mt-4 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 py-3 px-6 font-bold rounded-lg transition ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-orange-700 hover:bg-orange-600 text-white'
              }`}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
