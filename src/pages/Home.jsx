import Header from "../components/Header";
import Crest from "../components/Crest";
import Countdown from "../components/Countdown";

const NAV = [
  { href: "#programme", label: "Programme" },
  { href: "#detection", label: "Détection" },
  { href: "#dates", label: "Dates" },
  { href: "#contact", label: "Inscription" },
];

const ROSTER = [
  { n: "01", role: "Joueur / Joueuse", desc: "Technique, tactique, matchs — le cœur du stage, encadré par Alan & Sarah." },
  { n: "02", role: "Entraîneur", desc: "Construire une séance, corriger un geste, faire progresser un groupe." },
  { n: "03", role: "Arbitre", desc: "Lire le jeu, trancher vite, tenir sa décision sous pression." },
  { n: "04", role: "Préparateur physique", desc: "Échauffement, récupération, prévention des blessures." },
  { n: "05", role: "Kiné du sport", desc: "Comprendre le corps de l'athlète, les gestes qui protègent." },
  { n: "06", role: "Recruteur / Scout", desc: "Repérer un potentiel, évaluer, argumenter un choix." },
  { n: "07", role: "Journaliste sport", desc: "Commenter, interviewer, raconter le match autrement." },
  { n: "08", role: "Manager / Agent", desc: "Organisation, communication, l'envers du terrain." },
];

export default function Home() {
  return (
    <div className="wrap">
      <Header links={NAV} />

      <div className="hero">
        <div>
          <div className="kicker-row">
            <span className="dot" />
            <span className="kicker">Événement sportif — Alan &amp; Sarah Huchet</span>
          </div>
          <h1 className="hero-title">
            Stage de
            <br />
            Football <span className="accent">Mixte</span>
          </h1>
          <p className="hero-sub">
            6 à 17 ans. Un terrain, une équipe, et bien plus qu'un ballon — le stage qui montre tout ce qu'il y a
            autour du jeu.
          </p>

          <div className="hero-facts">
            <div className="fact-chip"><span className="n">⚽</span> Mixte, 6-17 ans</div>
            <div className="fact-chip"><span className="n">👥</span> Alan &amp; Sarah Huchet</div>
            <div className="fact-chip"><span className="n">🔎</span> Volet détection inclus</div>
            <Countdown />
          </div>

          <div className="cta-row">
            <a className="btn btn-solid" href="#contact">S'inscrire</a>
            <a className="btn btn-ghost" href="#programme">Voir le programme</a>
            <span className="code-tag">CODE PROMO : SH100</span>
          </div>
        </div>

        <div className="hero-art marble">
          <div className="num-watermark">10</div>
          <div className="crest-liquid"><Crest /></div>
        </div>
      </div>

      <section id="programme">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <h2 className="sec-title">Pas que des joueurs</h2>
        </div>
        <p className="sec-lede">
          Le stage fait découvrir tous les métiers qui font vivre un club — pas seulement ce qui se passe sur le
          terrain. Chaque jeune essaie, questionne, se projette.
        </p>
        <div className="roster" style={{ marginTop: 36 }}>
          {ROSTER.map((r) => (
            <div className="roster-card" key={r.n}>
              <div className="roster-num">{r.n}</div>
              <div className="roster-role">{r.role}</div>
              <div className="roster-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="detection">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Volet détection</h2>
        </div>
        <p className="sec-lede">Pour les jeunes qui veulent être vus, évalués, poussés — un suivi à part, en plus du stage.</p>
        <div className="split" style={{ marginTop: 36 }}>
          <div className="split-main">
            <div className="display" style={{ fontSize: "1.25rem", color: "var(--lav-deep)", marginBottom: 16 }}>
              Ce que ça couvre
            </div>
            <ul>
              <li>Évaluation technique individuelle par Alan &amp; Sarah Huchet</li>
              <li>Retour concret : points forts, axes de travail, potentiel</li>
              <li>Mise en avant des profils qui se démarquent</li>
              <li>Accessible à tous les niveaux du stage, pas de présélection</li>
            </ul>
          </div>
          <div className="split-side">
            <div className="display">Repéré, pas trié</div>
            <p>La détection s'ajoute au stage — elle ne remplace pas le jeu, elle le prolonge.</p>
          </div>
        </div>
        <div className="dates-box" style={{ marginTop: 16 }}>
          <div className="display">Un jeune vise plus loin ?</div>
          <p>
            Programme séparé : sessions filmées transmises à des recruteurs universitaires américains.{" "}
            <a href="/scouting-usa" style={{ color: "var(--lav-deep)", fontWeight: 700 }}>Voir le scouting international →</a>
          </p>
        </div>
      </section>

      <section id="dates">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Dates</h2>
        </div>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Countdown variant="badge" />
        </div>
        <div className="dates-box" style={{ marginTop: 16 }}>
          <div className="display">Les prochaines dates arrivent bientôt 👀</div>
          <p>Laisse ton email pour être prévenu·e en premier — pas de spam, juste l'annonce.</p>
        </div>
      </section>

      <section id="tarif">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Accessible à tous</h2>
        </div>
        <div className="price-card">
          <div>
            <h3>Un stage pensé pour être abordable</h3>
            <p>Le Stage Huchet est construit pour rester accessible aux familles — code promo actif dès l'ouverture des inscriptions.</p>
          </div>
          <div className="code-box">
            <div className="label">Code promo</div>
            <div className="code">SH100</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>On se voit<br />sur le terrain ?</h2>
        <a className="contact-email" href="mailto:stagehuchet@gmail.com">stagehuchet@gmail.com</a>
        <div className="founders">Un stage porté par <strong>Alan Huchet</strong> &amp; <strong>Sarah Huchet</strong></div>
      </section>

      <footer>Stage Huchet — Événement sportif indépendant</footer>
    </div>
  );
}
