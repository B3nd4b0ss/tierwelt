import {Link} from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
                        Wir freuen uns über deine Nachricht! Kontaktiere uns gern über die untenstehenden Wege.
                    </div>
                </div>

                {/* Row 3: Info + Cur-page */}
                <div className="row-bottom">
                    <ul className="info">
                        <li>
                            Verein
                            <div>Biberfreunde&nbsp;e.&nbsp;V.</div>
                        </li>
                        <li>
                            Standort
                            <div>Auenweg&nbsp;7, 12345&nbsp;Flussstadt</div>
                        </li>
                        <li>
                            Kontakt
                            <div>
                                <a href="mailto:info@biberfreunde.de">info@biberfreunde.de</a><br/>
                                <a href="https://www.biberfreunde.de" target="_blank" rel="noreferrer">
                                    www.biberfreunde.de
                                </a>
                            </div>
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
                        <ArrowDownwardIcon className="arrow-down"/>
                    </div>
                </div>

            </div>
            <div className="main-content">
                <div className="info-box bottom-right">
                    <h2>Impressum</h2>
                    <p>Biberfreunde&nbsp;e.&nbsp;V. – Verein zur Förderung des Biberschutzes</p>
                    <p>Vertreten durch: Dr.&nbsp;Maria&nbsp;Fluss &amp; Jonas&nbsp;Auendorf</p>
                    <p>VR&nbsp;1234, Amtsgericht&nbsp;Flussstadt • USt-IdNr.&nbsp;DE&nbsp;12&nbsp;345&nbsp;6789</p>
                    <p>Inhaltlich verantwortlich gem. § 55 Abs. 2 RStV: Jonas&nbsp;Auendorf</p>
                </div>
            </div>
        </>
    );
}

export default Contact;
