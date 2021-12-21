import "../assets/css/contactform.css";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (ev) => {
    const {name, value} = ev.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
  }


  return (
    <>
      <form onSubmit={(ev) => handleSubmit(ev)} >
        <div>
          <label htmlFor="name" >Name</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="email" >Email</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            value={formData.email} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" >Subject</label>
          <input 
            id="subject" 
            name="subject"
            type="text" 
            value={formData.subject} 
            onChange={handleChange}
          />
        </div>
        <div id="last" >
          <label htmlFor="message" >Message</label>
          <textarea 
            id="message" 
            name="message"
            rows="6"
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>
        </div>
        <button>Send</button>
      </form>
    </>
  )
}

export default ContactForm;