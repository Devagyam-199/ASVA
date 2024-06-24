import { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !subject || !message) {
      setError('Please fill in all fields');
      return;
    }

    if (!isAgreed) {
      setError('Please agree to the terms of use and privacy policy');
      return;
    }

    // Here you would normally send the form data to your backend server.
    // For this particular site, we'll just log the data to the console and show an alert.
    console.log({
      firstName,
      lastName,
      email,
      subject,
      message,
    });
    alert('Your request has been submitted successfully!');
    // Reset the form
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsAgreed(false);
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className='flex justify-center items-center mb-10 font-semibold'>
        <button className='text-violet-700 select-none cursor-default px-4 py-2 rounded-full bg-gray-200'>
          Contact Us
        </button>
      </div>
      <h1 className="text-5xl font-bold text-center mb-6">
        Get in Touch: Reach Out to Us Today!
      </h1>
      <p className="text-center text-xl mx-7text-gray-500 mb-10">
        Contact us for any inquiries, feedback, or collaborations through our website. Our team is here to assist you promptly and effectively.
      </p>
      <div className='flex md:flex-row md:justify-between flex-col items-center'>
        <form onSubmit={handleSubmit} className="flex flex-col md:w-2/3 border border-gray-100 p-8 rounded-xl gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder='First Name'
                className=" appearance-none border rounded-md border-gray-100 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder='Last Name'
                className=" appearance-none border rounded-md border-gray-100 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email'
              className=" appearance-none border rounded-md border-gray-100 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinee"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder='Enter your subject'
              className=" appearance-none border rounded-md border-gray-100 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <div className="flex items-center justify-between mb-5">
              <div className='flex items-center'>
                <input
                  type="checkbox"
                  id="agree"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label htmlFor="agree" className="ml-2 text-gray-700 text-sm font-bold">
                  I agree with Terms of Use and Privacy Policy*
                </label>
                {error && (
                  <div className="text-red-500 text-sm font-bold ml-2">{error}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-violet-700  hover:bg-gradient-to-br from-violet-900 via-violet-600 to-violet-200 text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:shadow-outline transition-all duration-150"
              >
                Send
              </button>
            </div>
            <textarea
              id="message"
              placeholder='Enter your message'
              className=" appearance-none border rounded-md border-gray-100 w-full h-32 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </form>
        <div className="flex flex-col items-center justify-center mx-auto gap-8 mt-8">
          <div className='flex items-center gap-x-4'>
            <div className='bg-gray-100 rounded-full px-3 py-3'>
              <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_2832)">
                  <path d="M3.25033 3.75H22.7503C23.0376 3.75 23.3132 3.86414 23.5164 4.0673C23.7195 4.27047 23.8337 4.54602 23.8337 4.83333V22.1667C23.8337 22.454 23.7195 22.7295 23.5164 22.9327C23.3132 23.1359 23.0376 23.25 22.7503 23.25H3.25033C2.96301 23.25 2.68746 23.1359 2.48429 22.9327C2.28113 22.7295 2.16699 22.454 2.16699 22.1667V4.83333C2.16699 4.54602 2.28113 4.27047 2.48429 4.0673C2.68746 3.86414 2.96301 3.75 3.25033 3.75ZM13.0653 13.1566L6.11899 7.25783L4.71608 8.90883L13.0794 16.0101L21.2922 8.90342L19.8752 7.26433L13.0653 13.1566Z" fill="url(#paint0_linear_1_2832)" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1_2832" x1="7.33834" y1="3.75" x2="27.5906" y2="9.75739" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6322D8" />
                    <stop offset="1" stop-color="#E0CEFF" />
                  </linearGradient>
                  <clipPath id="clip0_1_2832">
                    <rect width="26" height="26" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>

            </div>
            <div className='flex flex-col gap-y-1'>
              <h2 className="text-xl text-violet-700">Email</h2>
              <p className="text-gray-700 mb-2">Asvaai@gmail.com</p>
              <a href="mailto:Asvaai@gmail.com">
                <button
                  className="bg-gray-100 text-violet-700 hover:bg-gradient-to-br from-violet-900 via-violet-600 to-violet-200 hover:text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-150"
                >
                  Email Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;