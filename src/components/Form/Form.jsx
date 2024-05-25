import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

const Form = () => {
  const initialValue = {
    Headline: "",
    Lead: "",
    Body: "",
  };

  const navigate = useNavigate();
  const [data, setData] = useState(initialValue);
  const [message, setMesagge] = useState("");
  const [btnDisable, setBtnDisable] = useState(true)

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!data.Headline || !data.Lead || !data.Body) {
      setMessage("All fields are required.");
      setBtnDisabled(true);
    } else if (data.Headline.length < 3) {
      setMessage("Headline must be at least 3 characters");
      setBtnDisabled(true);
    } else if (data.Lead.length < 3) {
      setMessage("Lead must be at least 3 characters");
      setBtnDisabled(true);
    } else if (data.Body.length < 10) {
      setMessage("Body must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("news", JSON.stringify(data));
    setData(initialValue);
    swal(
      "New posted successful!",
      `${data.Headline}, ${data.Lead}, ${data.Body}`,
      "success"
    );
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Headline"
        placeholder="Headline"
        onChange={handleInputChange}
        value={data.Headline}
      />
      <input
        type="text"
        name="Lead"
        placeholder="Lead"
        onChange={handleInputChange}
        value={data.Lead}
      />
      <input
        type="text"
        name="Body"
        placeholder="Body"
        onChange={handleInputChange}
        value={data.Body}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default Form;
