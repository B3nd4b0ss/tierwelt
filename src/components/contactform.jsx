import {useState} from "react";
import "./contactform.css";

export default function ContactForm() {
    const [values, setValues] = useState({name: "", email: "", msg: ""});
    const [sent, setSent] = useState(false);

    const onChange = e =>
        setValues({...values, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        // Mini-Validierung
        if (!values.name || !values.email || !values.msg) return;

        // Mailto-Fallback
        const mailto = `mailto:info@zuecher-weinland.ch` +
            `?subject=Kontakt%20via%20Website` +
            `&body=${encodeURIComponent(
                `Name: ${values.name}\n\nNachricht:\n${values.msg}`
            )}`;
        window.location.href = mailto;
        setSent(true);
    };

    return sent ? (
        <p className="form-success">Danke! Dein Mail-Client öffnet sich gleich …</p>
    ) : (
        <form className="contact-form" onSubmit={onSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={onChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={values.email}
                onChange={onChange}
                required
            />
            <textarea
                name="msg"
                placeholder="Deine Nachricht …"
                rows="4"
                value={values.msg}
                onChange={onChange}
                required
            />
            <button type="submit">Nachricht senden</button>
        </form>
    );
}