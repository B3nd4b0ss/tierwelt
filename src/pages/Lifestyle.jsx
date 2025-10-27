import {Link} from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


function Lifestyle() {
    return (
        <>
            <div className="head-content">
                {/* Title */}
                <h1 className="page-title">Lifestyle</h1>

                {/* Row 2: Title + Text */}
                <div className="row">
                    <div className="left-title">Biber</div>
                    <div className="right-text">
                        Biber führen ein erstaunlich strukturiertes Familienleben.
                        Sie leben in stabilen Gruppen, bestehend aus einem Elternpaar
                        und mehreren Jungtieren, die gemeinsam für den Unterhalt des
                        Baus und der Dämme sorgen. Ihr Alltag ist geprägt von
                        Arbeitsteilung, sozialem Verhalten und einem beeindruckenden
                        Sinn für Organisation.
                    </div>
                </div>

                {/* Row 3: Info + Cur-page */}
                <div className="row-bottom">
                    <ul className="info">
                        <li>
                            Sozialstruktur
                            <div>Familienverbände mit klarer Aufgabenverteilung</div>
                        </li>
                        <li>
                            Aktivitätszeit
                            <div>Dämmerungs- und Nachtaktiv</div>
                        </li>
                        <li>
                            Lebensweise
                            <div>Halbaquatisch, mit hohem sozialen Zusammenhalt</div>
                        </li>
                    </ul>

                    <ul className="cur-page">
                        <li><Link to="/">01</Link></li>
                        <li><Link to="/habitat">02</Link></li>
                        <li className="active"><Link to="/lifestyle">03</Link></li>
                        <li><Link to="/importance">04</Link></li>
                        <li><Link to="/contact">05</Link></li>
                    </ul>
                    <div className="arrow-down-container">
                        Entdecke mehr über den Lifestyle
                        <ArrowDownwardIcon className="arrow-down"/>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="info-box top-left">
                    <h2>Ernährung & Lebensrhythmus</h2>
                    <p>
                        Biber sind reine Pflanzenfresser. Ihre Nahrung besteht hauptsächlich
                        aus Rinde, Zweigen, Blättern und Wasserpflanzen. Im Sommer bedienen
                        sie sich an frischem Grün, während sie im Winter auf eingelagerte
                        Äste unter der Eisdecke zurückgreifen. Dieses Vorratssystem ermöglicht
                        ihnen, auch in kalten Monaten aktiv zu bleiben.
                        Da Biber überwiegend in der Dämmerung und bei Nacht unterwegs sind,
                        bleiben sie tagsüber meist in ihren Bauten. Ihre kräftigen Zähne
                        wachsen ein Leben lang nach und sind durch den hohen Eisenanteil
                        auffällig orange gefärbt – ein Zeichen ihrer Anpassung an das Nagen.
                    </p>
                </div>

                <div className="info-box picture-container lifestyle"></div>

                <div className="info-box bottom-right">
                    <h2>Kommunikation & Sozialverhalten</h2>
                    <p>
                        Biber verfügen über ein fein abgestimmtes Kommunikationssystem.
                        Neben körperlichen Signalen nutzen sie akustische und chemische
                        Botschaften, um mit Artgenossen zu interagieren und ihr Revier
                        zu markieren.
                    </p>
                    <ul>
                        <li><strong>Schwanzschlag:</strong> Ein lautes Klatschen auf die Wasseroberfläche
                            warnt die Familie vor drohender Gefahr.
                        </li>
                        <li><strong>Duftmarken:</strong> Mit einem Sekret namens Castoreum
                            kennzeichnen sie Grenzen ihres Reviers.
                        </li>
                        <li><strong>Lautäusserungen:</strong> Fiepen und Quieken dienen der
                            Kommunikation innerhalb der Familie – besonders zwischen Eltern
                            und Jungtieren.
                        </li>
                    </ul>
                    <p>
                        Ihr ausgeprägtes Sozialverhalten sorgt dafür, dass die Familie als Einheit
                        funktioniert – jeder Biber weiss, was zu tun ist, ob beim Dammbau, beim
                        Nahrungsbeschaffen oder beim Schutz des Baus.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Lifestyle;
