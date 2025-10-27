import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="head-content main-head">
                {/* Title */}
                <h1 className="page-title">Home</h1>

                {/* Row 2: Title + Text */}
                <div className="row">
                    <div className="left-title">Biber</div>
                    <div className="right-text">
                        Der Biber (Castor spp.) ist nach dem Capybara das zweitgrösste
                        Nagetier der Welt. Durch sein bemerkenswert dichtes Fell,
                        scharfe Schneidezähne und das charakteristische breite Paddelschwanz
                        ist er perfekt fuer ein Leben im Wasser angepasst. Als echter
                        Ökosystem-Ingenieur formt er mit Dämmen ganze Landschaften
                        und schafft dabei neue Lebensraume fuer zahlreiche Arten.
                    </div>
                </div>

                {/* Row 3: Info + Cur-page */}
                <div className="row-bottom">
                    <ul className="info">
                        <li>Länge:
                            <div>90 – 130 cm (inkl. Schwanz)</div></li>
                        <li>Gewicht:
                            <div>11 - 32 kg</div></li>
                        <li>Lebenserwartung:
                            <div>10 – 15 Jahre</div></li>
                        <li>Familienstand:
                            <div>Monogam, ein Paar bleibt meist lebenslang zusammen</div></li>
                        <li>Aktivität:
                            <div>Dämmerungs- und nachtaktiv</div></li>
                    </ul>

                    <ul className="cur-page">
                        <li className="active"><Link to="/">01</Link></li>
                        <li><Link to="/habitat">02</Link></li>
                        <li><Link to="/lifestyle">03</Link></li>
                        <li><Link to="/importance">04</Link></li>
                        <li><Link to="/contact">05</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
