import Header from "../components/Header";
import Crest from "../components/Crest";

const NAV = [
  { href: "#process", label: "Déroulé" },
  { href: "#recevez", label: "Ce que vous recevez" },
  { href: "#qui", label: "Qui évalue" },
  { href: "#contact", label: "Inscription" },
];

export default function Detection() {
  return (
    <div className="wrap">
      <Header tag="Détection" links={NAV} />

      <div className="hero">
        <div>
          <div className="kicker-row">
            <span className="dot" />
            <span className="kicker">Détection — Alan &amp; Sarah Huchet</span>
          </div>
          <h1 className="hero-title">
            Être vu.
            <br />
            <span className="accent">Être évalué.</span>
            <br />
            Progresser.
          </h1>
          <p className="hero-sub">
            Une évaluation individuelle, pas un tri de masse. Chaque jeune repart avec un retour concret sur son
            niveau et ce qui le fera progresser.
          </p>

          <div className="hero-facts">
            <div className="fact-chip"><span className="n">🔎</span> Évaluation individuelle</div>
            <div className="fact-chip"><span className="n">📋</span> Retour écrit</div>
            <div className="fact-chip"><span className="n">✅</span> Ouvert à tous niveaux</div>
          </div>

          <div className="cta-row">
            <a className="btn btn-solid" href="#contact">Candidater</a>
            <a className="btn btn-ghost" href="#process">Voir le déroulé</a>
          </div>
        </div>

        <div className="hero-art marble">
          <span className="tag-pill">Session détection</span>
          <div className="num-watermark">7</div>
          <div className="crest-liquid"><Crest /></div>
        </div>
      </div>

      <section id="process">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <h2 className="sec-title">Comment ça se passe</h2>
        </div>
        <p className="sec-lede">Trois étapes, pas de présélection à l'entrée — tout le monde commence sur le terrain.</p>
        <div className="timeline">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              <h3>Inscription</h3>
              <p>Un email à stagehuchet@gmail.com avec l'âge et le niveau du jeune. Réponse avec les créneaux disponibles.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              <h3>Session d'évaluation</h3>
              <p>Sur le terrain, en situation de jeu — pas un simple test chronométré. Alan et Sarah observent technique, lecture du jeu, comportement en équipe.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              <h3>Retour</h3>
              <p>Un débrief individuel : ce qui est déjà solide, ce qui doit se travailler, et les prochaines étapes concrètes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recevez">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Ce que vous recevez</h2>
        </div>
        <div className="get-grid">
          <div className="get-card"><div className="display">Évaluation technique</div><p>Contrôle de balle, passe, frappe, prise de décision sous pression.</p></div>
          <div className="get-card"><div className="display">Lecture du jeu</div><p>Placement, anticipation, compréhension collective — pas que le geste individuel.</p></div>
          <div className="get-card"><div className="display">Points forts &amp; axes</div><p>Ce qui distingue déjà le jeune, et ce qui le ferait progresser le plus vite.</p></div>
          <div className="get-card"><div className="display">Prochaines étapes</div><p>Recommandations concrètes : entraînement, niveau de compétition adapté, suite du suivi.</p></div>
        </div>
      </section>

      <section id="qui">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Qui évalue</h2>
        </div>
        <div className="who-box">
          <p>
            <strong>Alan Huchet</strong> et <strong>Sarah Huchet</strong> encadrent chaque session en personne — pas
            d'observateur délégué, pas de grille automatisée. L'évaluation reste humaine, du terrain au débrief.
          </p>
          <p>Ouvert à tous les niveaux, 6 à 17 ans. La détection n'exclut personne à l'entrée : elle sert à situer et à orienter, pas à filtrer.</p>
        </div>
      </section>

      <section id="dates">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Prochaines sessions</h2>
        </div>
        <div className="dates-box">
          <div className="display">Les prochaines dates arrivent bientôt 👀</div>
          <p>Écris à stagehuchet@gmail.com pour être prévenu·e en priorité.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Prêt·e à<br />être évalué·e ?</h2>
        <a className="contact-email" href="mailto:stagehuchet@gmail.com">stagehuchet@gmail.com</a>
        <div className="founders">Détection portée par <strong>Alan Huchet</strong> &amp; <strong>Sarah Huchet</strong></div>
      </section>

      <footer>Stage Huchet — Détection</footer>
    </div>
  );
}
