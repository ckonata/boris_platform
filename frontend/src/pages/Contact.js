import React, {useState} from "react";
import "../styles/components/pages/Contact.css"
import axios from 'axios';

const Contact = () => {

    const initialForm = {
        userName: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
    axios.post('http://localhost:4000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
        setFormData(initialForm)
    }
}
return (
    <>
        <div className="contact">
            <div>
                <h1>Contactanos</h1>
                <p>¿Tenes alguna duda, comentario o sugerencia? Completa el formulario y te responderemos a la brevedad.</p>
            </div>
            <form action="" method="" onSubmit={handleSubmit}>
                <div class="contact__form-item">
                    <label for="userName">Nombre </label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
                </div>
                <div class="contact__form-item">
                    <label for="email">Email </label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div class="contact__form-item">
                    <label for="subject">Asunto </label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div class="contact__form-item">
                    <label for="comment">Comentario </label>
                    <textarea name="comment" value={formData.comment} onChange={handleChange}></textarea>
                </div>
                <p class="acciones"><input type="submit" value="Enviar" />
                </p>
                {sending ? <p>Enviando...  </p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>
    </>
);
}

export {Contact};