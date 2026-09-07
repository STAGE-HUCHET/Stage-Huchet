import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

// clair -> lavande -> --lav (couleur de marque), plus saturé
const BG_STOPS = ["#f6f3fb", "#d9c8f0", "#a89bdc"];
// le dégradé finit dans les 3000px de scroll, pas sur toute la page (~10000px)
const SCROLL_RANGE_PX = 3000;

const NAV = [
  { href: "#probleme", label: "Le constat" },
  { href: "#comment", label: "Comment ça marche" },
  { href: "#dossier", label: "Le dossier" },
  { href: "#acces", label: "Accès" },
  { href: "#contact", label: "Candidater" },
];

export default function ScoutingUSA() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;

    // Recette effet wow, étape 4 : respecter prefers-reduced-motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: `+=${SCROLL_RANGE_PX}`,
        scrub: true,
      },
    });
    tl.to(document.body, { backgroundColor: BG_STOPS[1], ease: "none" });
    tl.to(document.body, { backgroundColor: BG_STOPS[2], ease: "none" });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  return (
    <div className="wrap">
      <Header tag="Scouting International" links={NAV} />

      <div className="hero">
        <div>
          <div className="kicker-row">
            <span className="dot" />
            <span className="kicker">Scouting international — Alan &amp; Sarah Huchet</span>
          </div>
          <h1 className="hero-title">
            Joué en France.
            <br />
            <span className="accent">Vu aux États-Unis.</span>
          </h1>
          <p className="hero-sub">
            Des sessions filmées à 360° pendant le Stage Huchet, transmises directement aux recruteurs
            universitaires américains — sans déplacement, sans frais de scouting.
          </p>

          <div className="hero-facts">
            <div className="fact-chip"><span className="n">🎥</span> Filmé sur le terrain</div>
            <div className="fact-chip"><span className="n">🇺🇸</span> Vu par des recruteurs US</div>
            <div className="fact-chip"><span className="n">🎓</span> Objectif bourse d'études</div>
          </div>

          <div className="cta-row">
            <a className="btn btn-solid" href="#contact">Candidater</a>
            <a className="btn btn-ghost" href="#comment">Voir comment ça marche</a>
          </div>
        </div>

        <div className="hero-art">
          <video
            className="hero-video"
            src="/videos/scouting-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <span className="tag-pill">Dossier joueur</span>
        </div>
      </div>

      <section id="probleme">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <h2 className="sec-title">Le constat</h2>
        </div>
        <p className="sec-lede">
          Un recruteur américain ne traverse pas l'Atlantique pour regarder un match régional. Résultat : des
          jeunes très solides restent invisibles simplement parce qu'ils jouent loin des circuits habituels.
        </p>
        <div className="split" style={{ marginTop: 36 }}>
          <div className="split-main">
            <div className="display" style={{ fontSize: "1.25rem", color: "var(--lav-deep)", marginBottom: 16 }}>
              Ce qui bloque aujourd'hui
            </div>
            <ul>
              <li>Un déplacement de scouting coûte cher pour un seul club</li>
              <li>Les compétitions françaises locales n'ont pas de diffusion</li>
              <li>Les vidéos amateur (téléphone, tribune) sont inutilisables pour évaluer</li>
              <li>Les familles ne savent pas comment se faire connaître à l'étranger</li>
            </ul>
          </div>
          <div className="split-side">
            <div className="display">Le terrain existe déjà</div>
            <p>Le Stage Huchet réunit chaque session les jeunes à observer. Il manque juste la caméra et le bon destinataire.</p>
          </div>
        </div>
      </section>

      <section id="comment">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Comment ça marche</h2>
        </div>
        <p className="sec-lede">Trois étapes entre le terrain en France et l'écran d'un recruteur aux États-Unis.</p>
        <div className="timeline">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              <h3>Captation sur le terrain</h3>
              <p>
                Caméras fixes 360° en périphérie du terrain + caméra embarquée sur certaines phases de jeu.
                Aucun geste, aucune décision du jeune n'échappe à l'image.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              <h3>Montage et fiche joueur</h3>
              <p>
                Alan et Sarah Huchet sélectionnent les séquences qui montrent le niveau réel du jeune —
                pas un best-of flatteur, un dossier honnête : technique, placement, mental sous pression.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              <h3>Envoi au réseau de recruteurs</h3>
              <p>
                Le dossier part vers les contacts universitaires américains du programme. Le jeune et sa
                famille sont informés de chaque retour, positif ou non.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="dossier">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Ce que contient le dossier</h2>
        </div>
        <div className="get-grid">
          <div className="get-card"><div className="display">Séquences clés</div><p>3 à 5 actions filmées qui montrent le niveau réel, pas un montage publicitaire.</p></div>
          <div className="get-card"><div className="display">Profil du joueur</div><p>Âge, poste, gabarit, niveau scolaire — ce qu'un recruteur universitaire regarde en premier.</p></div>
          <div className="get-card"><div className="display">Retour d'Alan &amp; Sarah</div><p>Une évaluation écrite : points forts, marge de progression, comparaison avec le niveau visé.</p></div>
          <div className="get-card"><div className="display">Contact direct</div><p>Coordonnées de la famille transmises seulement si un recruteur manifeste un intérêt réel.</p></div>
        </div>
      </section>

      <section id="acces">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Coût réduit, accès élargi</h2>
        </div>
        <div className="price-card">
          <div>
            <h3>Le prix d'un vol en moins</h3>
            <p>
              Un déplacement de scouting classique coûte au recruteur son billet, son hôtel et plusieurs jours.
              Le dossier filmé remplace ce déplacement — l'accès pour la famille reste au tarif du Stage Huchet.
            </p>
          </div>
          <div className="code-box">
            <div className="label">Inclus dans</div>
            <div className="code">Stage Huchet</div>
          </div>
        </div>
      </section>

      <section id="qui">
        <div className="sec-head">
          <span className="sec-num">05</span>
          <h2 className="sec-title">Qui peut candidater</h2>
        </div>
        <div className="who-box">
          <p>
            Ouvert aux jeunes du Stage Huchet à partir de 14 ans, niveau départemental confirmé ou plus.
            Aucune présélection à l'inscription — c'est la session filmée elle-même qui évalue.
          </p>
          <p>
            <strong>Alan Huchet</strong> et <strong>Sarah Huchet</strong> valident chaque dossier avant envoi :
            aucune vidéo ne part sans leur accord, ni sans celui de la famille.
          </p>
        </div>
      </section>

      <section id="dates">
        <div className="sec-head">
          <span className="sec-num">06</span>
          <h2 className="sec-title">Premières sessions filmées</h2>
        </div>
        <div className="dates-box">
          <div className="display">Les dates de tournage arrivent bientôt 👀</div>
          <p>Écris à stagehuchet@gmail.com pour inscrire un jeune à la prochaine session filmée.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Prêt·e à<br />être vu·e ?</h2>
        <a className="contact-email" href="mailto:stagehuchet@gmail.com">stagehuchet@gmail.com</a>
        <div className="founders">Scouting international porté par <strong>Alan Huchet</strong> &amp; <strong>Sarah Huchet</strong></div>
      </section>

      <footer>Stage Huchet — Scouting International</footer>
    </div>
  );
}
