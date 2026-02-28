import "./PartnershipCards.css";

const cards = [
  {
    title: "Become an Affiliate",
    desc: [
      "Join as an affiliate partner & earn commissions",
      "Access referral links, promo materials & dashboard",
      "Help connect workers & employers while earning",
    ],
    btn: "Mail Us to Become an Affiliate",
    color: "blue",
  },
  {
    title: "Advertise Your Brand",
    desc: [
      "Showcase your brand to workers & employers",
      "Targeted campaigns inside ZOGIRAA app & website",
      "Increase visibility, trust & conversions",
    ],
    btn: "Mail Us to Advertise",
    color: "yellow",
  },
  {
    title: "Invest & Earn Profits",
    desc: [
      "Support ZOGIRAA’s mission with strong returns",
      "Invest in India’s workforce platform",
      "Be part of a scalable, impactful ecosystem",
    ],
    btn: "Mail Us to Invest",
    color: "green",
  },
];

export default function PartnershipCards() {
  return (
    <section className="partner-cards">
      <div className="cards-grid">
        {cards.map((card, i) => (
          <div className={`partner-card ${card.color}`} key={i}>
            <h3>{card.title}</h3>
            <ul>
              {card.desc.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>

            <a
              href="mailto:partner@zogiraa.com"
              className="card-btn"
            >
              {card.btn}
            </a>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="partner-bottom">
        <h2>
          Together, we can build India’s most trusted workforce ecosystem.
        </h2>
        <p>
          Whether you’re an affiliate, a brand, or an investor — ZOGIRAA
          welcomes you.
        </p>

        <a href="mailto:partner@zogiraa.com" className="bottom-mail">
          📩 Mail Us Now – partner@zogiraa.com
        </a>
      </div>
    </section>
  );
}
