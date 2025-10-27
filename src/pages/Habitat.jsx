import {Link} from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Habitat() {
    return (
        <>
            <div className="head-content">
                {/* Title */}
                <h1 className="page-title">Habitat</h1>

                {/* Row 2: Title + Text */}
                <div className="row">
                    <div className="left-title">Biber</div>
                    <div className="right-text">
                        Der Biber lebt bevorzugt in ruhigen Gewässern mit sanfter Strömung,
                        wie Teichen, Altarmen und kleinen Flüssen. Durch das Anlegen von
                        Dämmen reguliert er den Wasserstand und formt seine Umgebung aktiv
                        um – ein echter Baumeister der Natur. Seine Bauwerke dienen nicht nur
                        dem eigenen Schutz, sondern schaffen Lebensräume für zahlreiche andere Arten.
                    </div>
                </div>

                {/* Row 3: Info + Cur-page */}
                <div className="row-bottom">
                    <ul className="info">
                        <li>
                            Lebensraum
                            <div>Ruhige Süsswassergebiete mit dichter Ufervegetation</div>
                        </li>
                        <li>
                            Verbreitung
                            <div>Weite Teile Europas, Nordamerikas und Asiens</div>
                        </li>
                        <li>
                            Besonderheit
                            <div>Gestalter ganzer Ökosysteme durch Dammbau</div>
                        </li>
                    </ul>

                    <ul className="cur-page">
                        <li><Link to="/">01</Link></li>
                        <li className="active"><Link to="/habitat">02</Link></li>
                        <li><Link to="/lifestyle">03</Link></li>
                        <li><Link to="/importance">04</Link></li>
                        <li><Link to="/contact">05</Link></li>
                    </ul>

                    <div className="arrow-down-container">
                        <div>
                            Entdecke mehr über den Lebensraum
                        </div>
                        <ArrowDownwardIcon className="arrow-down"/>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="info-box top-left">
                    <h3>Lebensraum im Detail</h3>
                    <p>
                        Biber bevorzugen ruhige, langsam fliessende Gewässer mit stabilen
                        Uferböschungen. Besonders wichtig ist für sie der Zugang zu Weichhölzern
                        wie Weiden, Espen und Pappeln, die sie sowohl als Baumaterial als auch
                        als Nahrungsquelle nutzen. In diesen Landschaften legen sie ihre
                        Bauten an, die aus einem Wohnkessel und einem unter Wasser liegenden
                        Eingang bestehen.
                        In Gebieten mit wechselnden Wasserständen passen Biber ihre Dämme laufend
                        an – ein Beispiel für ihre erstaunliche Anpassungsfähigkeit. Ihr Einfluss
                        auf den Wasserhaushalt ist enorm: Ganze Flussabschnitte werden durch ihre
                        Aktivität umgestaltet.
                    </p>
                </div>

                <div className="embeded-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172134.62099170894!2d8.33955908671874!3d47.61439990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a82bcd4432ad9%3A0x203b8dd37eaf170!2sBibergebiet%20bei%20Marthalen!5e0!3m2!1sde!2sch!4v1761230342489!5m2!1sde!2sch"
                        loading="lazy"
                        title="Bibergebiet bei Marthalen"
                    ></iframe>
                </div>

                <div className="info-box picture-container habitat">
                </div>

                <div className="info-box bottom-right">
                    <h3>Einfluss auf die Umwelt</h3>
                    <p>
                        Durch ihre Dämme schaffen Biber Rückzugsorte für Amphibien, Insekten
                        und Wasservögel. Die entstehenden Feuchtgebiete wirken wie natürliche
                        Schwämme, die Wasser speichern und in Trockenzeiten langsam wieder abgeben.
                        So tragen Biber entscheidend zur Stabilisierung von Ökosystemen bei.
                        Darüber hinaus fördern sie die Selbstreinigungskraft von Gewässern, da
                        ihre Teiche Sedimente abfangen und die Wasserqualität verbessern.
                        Diese „Ingenieure der Natur“ spielen somit eine zentrale Rolle im
                        Gleichgewicht zahlreicher Landschaften.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Habitat;
