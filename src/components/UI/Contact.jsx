import React, { useRef ,useState} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const [done,setDone]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const params={
    //   name:document.getElementById('name').value,
    //   email:document.getElementById('email').value,
    //   subject:document.getElementById('subject').value,
    //   message:document.getElementById('message').value

    // };
    emailjs
      .sendForm(
        "service_l02zlap",
        "template_3w7q659",
        formRef.current,
        "25b7dnS9OddMGrYAQ"
      )
      .then(
        (result) => {
          setDone(true);
          setTimeout(()=>{
            setDone(false)
          },[6000]);
          document.getElementById('name').value="";
          document.getElementById('email').value="";
          document.getElementById('subject').value="";
          document.getElementById('message').value="";
        },
        (error) => {
          
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8 ">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3699819860753!2d77.09049736546756!3d28.678577138745588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0472ebb56fcf%3A0x894c807ef2a23be7!2sEkta%20Enclave%2C%20Peeragarhi%20Village%2C%20Paschim%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1681053356143!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8  ">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="user_name"
                  id="name"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="user_email"
                  id="email"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="user_subject"
                  id="subject"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  placeholder="Write Your Message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="user_message"
                  id="message"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150 ">
                Send Message
              </button>
              {done && <h3 style={{textAlign:"center"}} >Thank you</h3>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
