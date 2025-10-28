import {Link} from "react-router-dom";
import MoveDown from "../components/movedown.jsx"
import ContactForm from "../components/contactform";
import MoveTop from "../components/movetop.jsx"


function Contact() {
    return (
        <>
            <div className="head-content">
                {/* Title */}
                <h1 className="page-title">Kontakt</h1>

                {/* Row 2: Title + Text */}
                <div className="row">
                    <div className="left-title">Biber</div>
                    <div className="right-text">
                        Du möchtest mehr über den Biber erfahren oder hast Fragen zu unseren Projekten?
                        Wir freuen uns über dein Interesse und deine Nachricht! Ob du mehr über unsere Arbeit wissen
                        möchtest, dich für unsere Aktivitäten interessierst oder eigene Ideen einbringen willst – wir
                        sind gern für dich da.
                        Kontaktiere uns einfach über die untenstehenden Wege. Wir melden uns so bald wie möglich bei
                        dir!
                    </div>
                </div>

                {/* Row 3: Info + Cur-page */}
                <div className="row-bottom">
                    <ul className="info">
                        <li>
                            Verein
                            <div>Standortförderung Zürcher Weinland</div>
                        </li>
                        <li>
                            Standort
                            <div>Humlikonerstrasse 1, 8450 Andelfingen</div>
                        </li>
                        <li>
                            Mail
                            <div><a href="mailto:info@zuecher-weinland.ch"
                                    className="fancy-link">info@zuecher-weinland.ch</a></div>
                        </li>
                        <li>
                            Weitere Infos
                            <div><a href="https://www.zuercher-weinland.ch/ausflugsziel/bibergebiet-marthalen"
                                    target="_blank" rel="noreferrer" className="fancy-link">
                                www.zuercher-weinland.ch
                            </a></div>
                        </li>
                    </ul>

                    <ul className="cur-page">
                        <li><Link to="/">01</Link></li>
                        <li><Link to="/habitat">02</Link></li>
                        <li><Link to="/lifestyle">03</Link></li>
                        <li><Link to="/importance">04</Link></li>
                        <li className="active"><Link to="/contact">05</Link></li>
                    </ul>

                    <div className="arrow-down-container">
                        Wir freuen uns auf deine Nachricht!
                        <MoveDown className="arrow-down"/>
                    </div>
                </div>

            </div>
            <div className="main-content">
                <div className="info-box top-left">
                    <h2>Kontaktformular</h2>
                    <ContactForm/>
                </div>
                <div className="info-box bottom-right">
                    <h2>Impressum</h2>
                    <p>Standortförderung Zürcher Weinland – Verein zur Förderung des Biberschutzes</p>
                    <p>Vertreten durch: Ben Grob</p>
                    <p>Inhaltlich verantwortlich gem. § 28 ZGB: Ben Grob</p>
                </div>
                <MoveTop/>
            </div>
        </>
    );
}

export default Contact;
