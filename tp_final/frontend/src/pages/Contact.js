import React, {useState} from "react";
import "../styles/components/pages/Contact.css"
import axios from 'axios';

const Contact = () => {

    const initialForm = {
        nombre: '',
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
    <main className="holder-contacto">
        <div id="formcontacto">
            <h1>Contactanos</h1>
            <form action="" method="" className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label for="nombre">Nombre </label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label for="email">Email </label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono">Telefono </label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p id="cont_mensaje">
                    <label for="mensaje">Mensaje </label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar" />
                </p>
                {sending ? <p>Enviando...  </p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>
    </main>
);
}

export {Contact};