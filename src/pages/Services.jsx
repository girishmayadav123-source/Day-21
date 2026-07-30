import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Preventive Maintenance",
      description:
        "Regular inspections and scheduled maintenance to prevent equipment failures and improve performance.",
      icon: "🛠️",
    },
    {
      title: "Corrective Maintenance",
      description:
        "Quick troubleshooting and repair services to restore equipment to normal working condition.",
      icon: "🔧",
    },
    {
      title: "Emergency Support",
      description:
        "24/7 emergency assistance to minimize downtime and ensure business continuity.",
      icon: "🚨",
    },
    {
      title: "Equipment Inspection",
      description:
        "Detailed health checks with maintenance reports and performance recommendations.",
      icon: "📋",
    },
    {
      title: "Spare Parts Replacement",
      description:
        "Supply and replacement of genuine spare parts covered under AMC plans.",
      icon: "⚙️",
    },
    {
      title: "Technical Assistance",
      description:
        "Expert guidance and remote support from experienced service engineers.",
      icon: "💻",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-banner">
        <h1>Our AMC Services</h1>
        <p>
          Professional Annual Maintenance Contract solutions to keep your
          equipment running efficiently with minimal downtime.
        </p>
      </div>

      <section className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="benefits-section">
        <h2>Why Choose Our AMC?</h2>

        <div className="benefits">
          <div className="benefit-card">
            <h3>✔ Regular Maintenance</h3>
            <p>Scheduled servicing to increase equipment life.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Fast Response</h3>
            <p>Quick support with minimum downtime.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Experienced Engineers</h3>
            <p>Certified professionals for reliable maintenance.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Genuine Spare Parts</h3>
            <p>Original replacement parts for better performance.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Affordable Plans</h3>
            <p>Flexible AMC packages suitable for every business.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Customer Support</h3>
            <p>Dedicated support team available whenever you need assistance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}