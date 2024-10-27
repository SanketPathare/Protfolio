import "../Contact/Contact.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult();
    const formData = new FormData(event.target);

    formData.append("access_key", "3cc9e643-dc04-495a-8f34-3ca616ffa3b3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast("Message sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="contact_heading">
      <h2>
        Get in <b>touch</b>
      </h2>
      <form onSubmit={onSubmit} className="contact">
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea type="message" className="textarea" name="message" required />
        <input type="submit" value="Send" className="button" />
      </form>
      <ToastContainer>
        <span>{result}</span>
      </ToastContainer>
    </div>
  );
};
export default Contacts;
