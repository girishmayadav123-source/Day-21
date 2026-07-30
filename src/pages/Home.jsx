import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-text">
          <h1>Reliable SmartLogix</h1>

          <p>
            We provide trusted Annual Maintenance Contract services with
            professional support, preventive maintenance, and quick issue
            resolution to ensure uninterrupted business operations.
          </p>

         <Link to ="/support"> <button>Request Support</button></Link>

        </div>

      </section>

      <section className="overview">

        <h2>About Our AMC</h2>

        <p>
          Our AMC solutions help organizations maintain equipment, reduce
          downtime, and receive timely maintenance through dedicated support
          professionals.
        </p>

      </section>

      <section className="services">

        <h2>Our Services</h2>

        <div className="cards">

          <div className="card">
            <h3>Preventive Maintenance</h3>
            <p>Scheduled maintenance to avoid unexpected failures.</p>
          </div>

          <div className="card">
            <h3>Emergency Support</h3>
            <p>Fast response to minimize downtime.</p>
          </div>

          <div className="card">
            <h3>Remote Assistance</h3>
            <p>Quick online troubleshooting from our experts.</p>
          </div>

          <div className="card">
            <h3>On-Site Service</h3>
            <p>Professional engineers available at your location.</p>
          </div>

        </div>

      </section>

      <section className="navigation">

        <h2>Quick Navigation</h2>

        <div className="nav-box">

          <div className="box">
             <Link to="/services"><h3>AMC Overview</h3></Link>
          </div>

          <div className="box">
           <Link to="/support"> <h3>Support Request</h3></Link>
          </div>
          <div className="box">
            <Link to="/client"><h3>Customer Care</h3></Link>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;