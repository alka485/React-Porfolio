import React ,{ useState}from 'react';
import './style.css'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setUserName('');
    setEmail('');

  };

  return (
    <div style={{backgroundColor : "lightcyan", width : "60rem"}}>
      <h1>Contact Page</h1>
      <form className="form">
        <p>Name : </p>
      <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <p>Email :</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <p>Message :</p>
        <textarea
        value={message}
        name="message"
        onChange={handleInputChange}
        type="message"
        placeholder='Message'
       />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      
    </div>
      
  );
}
