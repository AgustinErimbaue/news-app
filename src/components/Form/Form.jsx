import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

const Form = () => {
  const initialValue = {
    Headline: "",
    Lead: "",
    Body: "",
    Author: "",
    Date: new Date().toLocaleDateString('es-ES'),
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
      setMessage("Todos los campos obligatorios deben estar completos.");
      setBtnDisabled(true);
    } else if (data.Headline.length < 3) {
      setMessage("El titular debe tener al menos 3 caracteres.");
      setBtnDisabled(true);
    } else if (data.Lead.length < 3) {
      setMessage("La entradilla debe tener al menos 3 caracteres.");
      setBtnDisabled(true);
    } else if (data.Body.length < 10) {
      setMessage("El cuerpo debe tener al menos 10 caracteres.");
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
    swal(
      "¡Noticia publicada!",
      `${data.Headline}\n${data.Lead}\n${data.Body}`,
      "success"
    );
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Publicar nueva noticia</h2>
      <label htmlFor="Headline">Titular*</label>
      <input
        type="text"
        id="Headline"
        name="Headline"
        placeholder="Ej: Descubren nueva especie en la Amazonía"
        onChange={handleInputChange}
        value={data.Headline}
        autoComplete="off"
      />

      <label htmlFor="Lead">Entradilla*</label>
      <input
        type="text"
        id="Lead"
        name="Lead"
        placeholder="Resumen breve de la noticia"
        onChange={handleInputChange}
        value={data.Lead}
        autoComplete="off"
      />

      <label htmlFor="Body">Cuerpo de la noticia*</label>
      <textarea
        id="Body"
        name="Body"
        placeholder="Desarrolla aquí la noticia completa..."
        onChange={handleInputChange}
        value={data.Body}
        rows={6}
      />

      <label htmlFor="Author">Autor</label>
      <input
        type="text"
        id="Author"
        name="Author"
        placeholder="Nombre del periodista (opcional)"
        onChange={handleInputChange}
        value={data.Author}
        autoComplete="off"
      />

      <label htmlFor="Date">Fecha</label>
      <input
        type="text"
        id="Date"
        name="Date"
        value={data.Date}
        readOnly
      />

      <button type="submit" disabled={btnDisable}>Publicar noticia</button>
      {message && <p className="error-message">{message}</p>}
    </form>
  );
};

export default Form;
