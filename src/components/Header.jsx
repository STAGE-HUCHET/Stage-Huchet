import { Link } from "react-router-dom";

export default function Header({ tag, links }) {
  return (
    <div className="topbar">
      <Link className="brand" to="/">
        <div className="crest-wrap">
          <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 2 L94 16 V52 C94 82 74 100 50 108 C26 100 6 82 6 52 V16 Z"
              fill="#5f4aa8"
              stroke="#ffffff"
              strokeWidth="4"
            />
            <text x="50" y="66" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="40" fill="#ffffff">
              SH
            </text>
          </svg>
        </div>
        <div className="brand-name">
          Stage Huchet
          {tag && <small>{tag}</small>}
        </div>
      </Link>
      <nav>
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </div>
  );
}
