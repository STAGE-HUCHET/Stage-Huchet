import { useEffect, useState } from "react";

const STAGE_DATE = new Date("2027-02-23T00:00:00");

function daysLeft() {
  const now = new Date();
  const diff = STAGE_DATE.setHours(0, 0, 0, 0) - now.setHours(0, 0, 0, 0);
  return Math.max(0, Math.round(diff / 86400000));
}

export default function Countdown({ variant = "chip" }) {
  const [days, setDays] = useState(daysLeft);

  useEffect(() => {
    const id = setInterval(() => setDays(daysLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  if (variant === "badge") {
    return (
      <div className="countdown-badge">
        <div className="countdown-num">J-{days}</div>
        <div className="countdown-label">avant le Stage Huchet</div>
      </div>
    );
  }

  return (
    <div className="fact-chip countdown-chip">
      <span className="n">⏳</span> J-{days} avant le stage
    </div>
  );
}
