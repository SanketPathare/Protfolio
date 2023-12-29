import "../Contact/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contacts = () => {
  const submit = () =>
    
    toast("Message sent successfully", { position: toast.POSITION.TOP_RIGHT });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_segfo1f",
        "template_bnxcs8y",
        form.current,
        "z4iQNKsh8tblpOQsb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
         
  };

  return (
    <div className="contact_heading">
      <h2>Get in <b>touch</b></h2>
      <form ref={form} onSubmit={sendEmail} className="contact">
        <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
         <input  className="textarea" name="message" required/>
        <input  onClick={submit} type="submit" value="Send"  className="button" aria-required/>
       
      </form>
      <ToastContainer/>
    </div>
  );
};
export default Contacts;
