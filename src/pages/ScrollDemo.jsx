import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ScrollDemo() {
  const root = useRef(null);
  const ball = useRef(null);
  const net = useRef(null);
  const caption1 = useRef(null);
  const caption2 = useRef(null);
  const caption3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl.set(ball.current, { xPercent: -50, yPercent: -50 })

        // beat 1 — contrôle
        .to(caption1.current, { opacity: 1, y: 0, duration: 0.4 })
        .to(caption1.current, { opacity: 0, y: -20, duration: 0.3 }, "+=0.4")

        // beat 2 — la frappe : balle qui part le long d'un arc
        .to(caption2.current, { opacity: 1, y: 0, duration: 0.4 }, "<")
        .to(
          ball.current,
          {
            motionPath: {
              path: "#shotPath",
              align: "#shotPath",
              alignOrigin: [0.5, 0.5],
            },
            duration: 2.4,
            ease: "power1.in",
          },
          "-=0.1"
        )
        .to(caption2.current, { opacity: 0, y: -20, duration: 0.3 }, "-=0.6")

        // beat 3 — impact filet
        .to(net.current, { skewX: 8, scaleX: 0.92, duration: 0.15, ease: "power2.out" })
        .to(net.current, { skewX: 0, scaleX: 1, duration: 0.7, ease: "elastic.out(1,0.3)" })
        .to(ball.current, { scale: 0, opacity: 0, duration: 0.3 }, "<")
        .to(caption3.current, { opacity: 1, y: 0, duration: 0.5 }, "<0.1");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div style={{ padding: "20px 28px" }}>
        <Link to="/" className="mono" style={{ fontSize: 13, color: "var(--lav-deep)", textDecoration: "none" }}>
          ← Retour au site
        </Link>
      </div>

      <section
        ref={root}
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(120% 100% at 50% 0%, var(--ground-2), var(--ground) 60%)",
        }}
      >
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {/* pitch line */}
          <line x1="0" y1="480" x2="1000" y2="480" stroke="var(--lav-line)" strokeWidth="2" />

          {/* invisible path the ball follows: foot -> arc -> inside the net */}
          <path id="shotPath" d="M 160,430 Q 480,220 780,300 T 900,320" fill="none" stroke="none" />

          {/* player silhouette (simple, stylised) */}
          <g transform="translate(90,300)">
            <circle cx="40" cy="30" r="18" fill="var(--ink)" />
            <path d="M40 46 L34 120 L20 210 M40 46 L52 120 L70 205 M40 60 L10 100 M40 60 L85 90" stroke="var(--ink)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>

          {/* goal + net */}
          <g ref={net} transform="translate(760,240)" style={{ transformOrigin: "0px 160px" }}>
            <rect x="0" y="0" width="180" height="160" fill="none" stroke="var(--lav-deep)" strokeWidth="6" />
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={"v" + i} x1={i * 30} y1="0" x2={i * 30} y2="160" stroke="var(--lav-line)" strokeWidth="1.5" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={"h" + i} x1="0" y1={i * 27} x2="180" y2={i * 27} stroke="var(--lav-line)" strokeWidth="1.5" />
            ))}
          </g>

          {/* the ball */}
          <circle ref={ball} cx="160" cy="430" r="14" fill="var(--lav-deep)" stroke="var(--white)" strokeWidth="2" />
        </svg>

        <div
          ref={caption1}
          className="display"
          style={{ position: "absolute", left: 28, bottom: "18%", fontSize: "clamp(1.6rem,4vw,2.6rem)", color: "var(--ink)", opacity: 0, transform: "translateY(20px)" }}
        >
          01 — Contrôle
        </div>
        <div
          ref={caption2}
          className="display"
          style={{ position: "absolute", left: 28, bottom: "18%", fontSize: "clamp(1.6rem,4vw,2.6rem)", color: "var(--ink)", opacity: 0, transform: "translateY(20px)" }}
        >
          02 — La frappe
        </div>
        <div
          ref={caption3}
          style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="display" style={{ fontSize: "clamp(2rem,6vw,3.6rem)", color: "var(--lav-deep)" }}>
            03 — Filet trouvé
          </div>
          <Link to="/" className="btn btn-solid">Découvrir le stage</Link>
        </div>

        <div className="mono" style={{ position: "absolute", top: 24, right: 28, fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-faint)" }}>
          SCROLLE POUR JOUER
        </div>
      </section>

      <div style={{ height: "40vh" }} />
    </div>
  );
}
