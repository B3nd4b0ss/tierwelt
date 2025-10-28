import {Link} from "react-router-dom";
import Funfact from "../components/funfact";
import MoveTop from "../components/movetop.jsx"
import MoveDown from "../components/movedown.jsx"

function Importance() {
    return (
        <>
            <div className="head-content">
                {/* Title */}
                <h1 className="page-title">Wichtige Fakten</h1>

                {/* Row 2: Title + Text */}
                <div className="row">
                    <div className="left-title">Biber</div>
                    <div className="right-text">
                        Der Biber spielt eine entscheidende Rolle für das ökologische
                        Gleichgewicht unserer Landschaften. Durch seine Dämme und Kanäle
                        gestaltet er ganze Lebensräume neu und sorgt dafür, dass Gewässer
                        wieder lebendig werden. Seine Arbeit steht sinnbildlich für
                        Zusammenarbeit zwischen Natur, Wasser und Mensch.
                    </div>
                </div>

                {/* Row 3: Info + Cur-page */}
                <div className="row-bottom">
                    <ul className="info">
                        <li>
                            Ökologische Rolle
                            <div>Gestalter und Regulator von Feuchtgebieten</div>
                        </li>
                        <li>
                            Nutzen für den Menschen
                            <div>Hochwasserschutz, Wasserrückhalt, Artenvielfalt</div>
                        </li>
                        <li>
                            Schutzstatus
                            <div>In Europa streng geschützt</div>
                        </li>
                    </ul>

                    <ul className="cur-page">
                        <li><Link to="/">01</Link></li>
                        <li><Link to="/habitat">02</Link></li>
                        <li><Link to="/lifestyle">03</Link></li>
                        <li className="active"><Link to="/importance">04</Link></li>
                        <li><Link to="/contact">05</Link></li>
                    </ul>

                    <div className="arrow-down-container">
                        Erfahre mehr über Bedeutung & Schutz
                        <MoveDown className="arrow-down"/>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="info-box top-left">
                    <h2>Warum Biber wichtig sind</h2>
                    <p>
                        Biber gelten als wahre „Ökosystem-Ingenieure“. Durch das Fällen von
                        Bäumen und den Bau ihrer Dämme verändern sie aktiv ihre Umgebung und
                        schaffen so wertvolle Lebensräume für viele Tier- und Pflanzenarten.
                        Die von ihnen geschaffenen Teiche und Feuchtgebiete bieten Schutz,
                        Nahrung und Rückzugsorte für Amphibien, Insekten und Wasservögel.
                        Ihre Dämme wirken wie natürliche Rückhaltebecken: Sie filtern das
                        Wasser, speichern es in Trockenzeiten und mindern Hochwassergefahren.
                        Damit tragen Biber wesentlich zur Stabilität und Erneuerung unserer
                        Ökosysteme bei – und leisten zugleich einen Beitrag zum Klimaschutz.
                    </p>
                </div>

                <div className="info-box top-right">
                    <h3>Wusstest du schon ?</h3>
                    <Funfact/>
                </div>

                <div className="info-box bottom-right">
                    <h2>Einfluss auf den Menschen</h2>
                    <p>
                        Die Tätigkeit der Biber kann auch den Menschen unmittelbar betreffen:
                        Ihre Dämme verändern Wasserläufe, was manchmal Konflikte mit
                        Landwirtschaft oder Infrastruktur verursacht. Durch gezielte Beratung
                        und Schutzprogramme lassen sich jedoch nachhaltige Lösungen finden,
                        die sowohl den Biberschutz als auch menschliche Interessen wahren.
                        Viele Umweltinitiativen sehen im Biber ein Symbol für
                        ökologische Wiederherstellung. Seine Rückkehr zeigt, dass Natur sich
                        erholen kann, wenn wir ihr Raum geben – ein positives Zeichen für
                        Naturschutz und Biodiversität in ganz Europa.
                    </p>
                </div>
                <MoveTop/>
            </div>
        </>
    );
}

export default Importance;
