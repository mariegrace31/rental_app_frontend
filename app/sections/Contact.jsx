import React, { useState } from 'react';
import { FaLocationDot, FaPhone, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { MdEventAvailable, MdMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='bg-[#F0EFEF] py-12 lg:py-20' id='contact'> 
      <div className="relative text-center">
        <h1 className="text-[18px] lg:text-[35px] font-medium text-rental_primary relative z-10">Contact Us</h1>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] lg:text-[6rem font-bold text-rental_black/25 opacity-30">CONTACT</span>
      </div>
      <p className='text-rental_black w-[90%] text-[12px] lg:text-[17px] lg:w-[50%] text-center mt-9 mx-auto font-light'>We'd love to hear from you! Whether you have questions about a listing, need help with a booking, or just want
         to learn more about our platform, our team is here to assist you. Reach out to us, and we'll be happy to help make your rental experience seamless and stress-free.</p>
      <div className='flex flex-col lg:flex-row gap-9 px-5 lg:px-10 mt-10 w-[100%] lg:w-[80%] mx-auto items-center'>
        <div className='bg-white rounded-sm p-4 lg:w-[80%]'>
          <h1 className='text-[17px] lg:text-[20px] font-medium text-rental_primary' >Get in Touch with Us</h1>
          <form onSubmit={handleSubmit}> 
            <div className='flex justify-between mt-4'>
              <input type="text" placeholder='Enter your name'  value={name} onChange={(e) => setName(e.target.value)} required className='p-2 w-[48%] bg-[#FFF9F4] placeholder:text-[12px] lg:placeholder:text-[14px] border border-[#F8D6BF] rounded-md outline-none text-rental_dark_choc placeholder:text-gray-300'/>
              <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required className='p-2 text-[12px] lg:text-md w-[48%] bg-[#FFF9F4] placeholder:text-[12px] lg:placeholder:text-[14px] border border-[#F8D6BF] rounded-md outline-none text-rental_dark_choc placeholder:text-gray-300' />
            </div>
            <input type="text" placeholder='Subject'  value={subject} onChange={(e) => setSubject(e.target.value)} required className='p-2 w-full mt-5 bg-[#FFF9F4] placeholder:text-[12px] lg:placeholder:text-[14px] border border-[#F8D6BF] rounded-md outline-none text-rental_dark_choc placeholder:text-gray-300' />
            <textarea
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
              rows="5"
              placeholder="Write your message here..."
              className="p-2 bg-[#FFF9F4] w-full mt-6 placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:text-gray-300 border border-[#F8D6BF] rounded-md outline-none text-rental_dark_choc"
              />
            <button type="submit" className='bg-rental_primary text-rental_beige_3 py-1 px-4 rounded-md text-[14px] lg:text-[16px] border border-rental_primary mt-5 hover:bg-[#FFF9F4] hover:text-rental_primary'>Send message</button>
          </form>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg text-center">
              <h2 className="text-xl font-medium text-rental_primary">We have received your message!</h2>
              <p className="text-rental_black font-light">We will get back to you as soon as possible. <br /> Thank you!</p>
              <button 
                onClick={() => setShowModal(false)} 
                className="mt-4 bg-rental_primary text-rental_beige_3 py-1 px-4 rounded-md hover:bg-[#FFF9F4] hover:text-rental_primary"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className='p-2 lg:p-4 w-[100%] lg:w-[60%]'>
          <h1 className='text-rental_primary font-medium text-[17px] lg:text-[20px]'>Contact Details</h1>
          <p className='font-light text-[12px] lg:text-[14px] mt-3'>Reach out to us for any questions, support, or booking assistance. We're here to ensure a smooth and hassle-free rental experience!</p>
          <div className='grid grid-cols-2 mt-5 lg:mt-8 gap-1 lg:gap-4'>
            <div className='flex items-center gap-2'>
              <FaLocationDot className='bg-rental_primary p-2 text-3xl rounded-md text-rental_beige_3' />
              <div className='flex flex-col'>
                <h4 className='text-[12px] lg:text-[15px] font-medium'>Address</h4>
                <p className='text-[10px] lg:text-[13px] font-light'>Our Address Line</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhone  className='bg-rental_primary p-2 text-3xl rounded-md text-rental_beige_3' />
              <div className='flex flex-col'>
                <h4 className='text-[12px] lg:text-[15px] font-medium'>Mobile</h4>
                <p className='text-[10px] lg:text-[13px] font-light'>04726252737</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <MdEventAvailable  className='bg-rental_primary p-2 text-3xl rounded-md text-rental_beige_3' />
              <div className='flex flex-col'>
                <h4 className='text-[12px] lg:text-[15px] font-medium'>Availability</h4>
                <p className='text-[10px] lg:text-[13px] font-light'>24/7</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <MdMailOutline  className='bg-rental_primary p-2 text-3xl rounded-md text-rental_beige_3' />
              <div className='flex flex-col'>
                <h4 className='text-[12px] lg:text-[15px] font-medium'>Email</h4>
                <p className='text-[10px] lg:text-[13px] font-light'>ouremail@gmail.com</p>
              </div>
            </div>
          </div>
          <hr className='mt-6 lg:mt-9 border mx-auto border-rental_primary' />

          <div className='flex justify-between items-center mt-5 lg:mt-9'>
            <h4 className='text-rental_primary font-medium text-[15px] lg:text-[20px]'>Social media</h4>
            <div className='flex gap-3 lg:gap-4'>
              <FaSquareFacebook className='text-rental_black text-lg lg:text-xl cursor-pointer hover:text-rental_primary' />
              <FaInstagram  className='text-rental_black text-lg lg:text-xl cursor-pointer hover:text-rental_primary'/>
              <FaLinkedin className='text-rental_black text-lg lg:text-xl cursor-pointer hover:text-rental_primary' />
              <FaSquareXTwitter  className='text-rental_black text-lg lg:text-xl cursor-pointer hover:text-rental_primary'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
