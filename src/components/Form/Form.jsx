import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Form.scss";

const Form = () => {
  const initialValue = {
    Headline: "",
    Lead: "",
    Body: "",
    Author: "",
    Date: new Date().toLocaleDateString('en-US'),
  };

  const navigate = useNavigate();
  const [data, setData] = useState(initialValue);
  const [message, setMessage] = useState("");
  const [btnDisable, setBtnDisabled] = useState(true);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!data.Headline || !data.Lead || !data.Body) {
      setMessage("All required fields must be completed.");
      setBtnDisabled(true);
    } else if (data.Headline.length < 3) {
      setMessage("The headline must have at least 3 characters.");
      setBtnDisabled(true);
    } else if (data.Lead.length < 3) {
      setMessage("The lead must have at least 3 characters.");
      setBtnDisabled(true);
    } else if (data.Body.length < 10) {
      setMessage("The body must have at least 10 characters.");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("news", JSON.stringify(data));
    setData(initialValue);
    Swal.fire(
      "News published!",
      `${data.Headline}\n${data.Lead}\n${data.Body}`,
      "success"
    );
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Publish a News Article</h2>
      <label htmlFor="Headline">Headline*</label>
      <input
        type="text"
        id="Headline"
        name="Headline"
        placeholder="E.g.: New species discovered in the Amazon"
        onChange={handleInputChange}
        value={data.Headline}
        autoComplete="off"
      />

      <label htmlFor="Lead">Lead*</label>
      <input
        type="text"
        id="Lead"
        name="Lead"
        placeholder="Brief summary of the news"
        onChange={handleInputChange}
        value={data.Lead}
        autoComplete="off"
      />

      <label htmlFor="Body">Body*</label>
      <textarea
        id="Body"
        name="Body"
        placeholder="Write the full news article here..."
        onChange={handleInputChange}
        value={data.Body}
        rows={6}
      />

      <label htmlFor="Author">Author</label>
      <input
        type="text"
        id="Author"
        name="Author"
        placeholder="Journalist's name (optional)"
        onChange={handleInputChange}
        value={data.Author}
        autoComplete="off"
      />

      <label htmlFor="Date">Date</label>
      <input
        type="text"
        id="Date"
        name="Date"
        value={data.Date}
        readOnly
      />

      <button type="submit" disabled={btnDisable}>Publish news</button>
      {message && <p className="error-message">{message}</p>}
    </form>
  );
};

export default Form;
