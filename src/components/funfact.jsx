import {useState} from "react";
import "./funfact.css";              // eigene Styles (s. u.)

const facts = [
    `Biberzähne enthalten Eisenverbindungen, die ihnen ihre typische
  orange Färbung verleihen. Dieses „eingebaute Metall“ macht die Schneidezähne
  enorm widerstandsfähig – sie wetzen sich beim Nagen ständig selber nach
  und bleiben so rasiermesserscharf.`,

    `Der längste bislang vermessene Biberdamm befindet sich im Wood-Buffalo-
  Nationalpark in Kanada. Mit einer Gesamtlänge von über 700 Metern ist er
  sogar aus dem Weltall erkennbar und wächst seit Jahrzehnten weiter, weil
  Generationen von Bibern daran bauen.`,

    `Wenn Biber Bäume fällen, entsteht mehr Licht am Ufer. Davon profitieren
  Lichtkeimer wie Weiden-, Pappel- und Espensprosse, aber auch seltene Sumpf-
  pflanzen. Dadurch schafft der Biber eine Art natürliche „Baustelle“ für
  nachwachsende Vegetation und erhöht die Artenvielfalt nachhaltig.`,

    `Biberteiche wirken wie Schwämme: Bei Starkregen breiten sie das Wasser
  flächig aus und mindern Hochwasserwellen. In Trockenperioden geben sie das
  gespeicherte Wasser langsam wieder ab, was den Grundwasserstand stabilisiert
  und Fliessgewässer vor dem Austrocknen schützt.`,

    `Biber legen Transportkanäle an, in denen sie Äste schwimmend bewegen.
  Diese Gräben vernetzen verschiedene Uferzonen und schaffen Mikrohabitate
  für Amphibien, Libellen und Wasserkäfer. So entstehen wahre Labyrinthe
  ökologischer Nischen, die ohne den Biber nicht existieren würden.`
];

export default function FunFact() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex(i => (i + 1) % facts.length);

    return (
        <div className="funfact-card" onClick={next}>
            {facts[index]}
            <span className="funfact-hint">Klick für nächsten Fact</span>
        </div>
    );
}