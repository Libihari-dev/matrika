import { Link } from 'react-router-dom';
import { Leaf, Sprout, TreePine, FlaskConical, ArrowRight } from 'lucide-react';
import './ServicePage.css';

export default function GreenLab() {
    return (
        <div className="page-wrapper">
            <section className="service-hero service-hero-greenlab">
                <div className="service-hero-overlay"></div>
                <div className="container service-hero-content">
                    <span className="section-label" style={{ color: '#C19A4E' }}>LAUNCHING SOON</span>
                    <h1 className="service-hero-title">Green Lab</h1>
                    <p className="service-hero-desc">
                        Where herbal science meets sustainable living — an evidence-based approach to
                        understanding plant-based wellness and ecological harmony.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <span className="section-label">OUR PROGRAMS</span>
                    <h2 className="section-title">Rooted in Science, Grown with Care</h2>
                    <p className="section-subtitle">
                        Our Green Lab programs blend traditional herbal knowledge with modern
                        research for evidence-based natural wellness.
                    </p>
                </div>
                <div className="container">
                    <div className="grid-4 service-cards" style={{ marginTop: '48px' }}>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><Leaf size={28} /></div>
                            <h3>Herbal Science</h3>
                            <p>Evidence-based education on medicinal plants, their properties, and safe applications in daily wellness.</p>
                        </div>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><Sprout size={28} /></div>
                            <h3>Sustainable Living</h3>
                            <p>Practical workshops on eco-friendly practices, zero-waste living, and sustainable lifestyle choices.</p>
                        </div>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><TreePine size={28} /></div>
                            <h3>Community Garden</h3>
                            <p>Hands-on gardening programs connecting communities with nature and promoting food sovereignty.</p>
                        </div>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><FlaskConical size={28} /></div>
                            <h3>Research Hub</h3>
                            <p>Collaborative research initiatives bridging traditional herbal knowledge with contemporary science.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section service-cta-section">
                <div className="container text-center">
                    <h2 className="section-title" style={{ color: 'white' }}>Explore with Green Lab</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Join our waitlist to be notified when Green Lab programs launch.
                    </p>
                    <Link to="/contact" className="btn btn-white" style={{ marginTop: '24px' }}>
                        Join Waitlist <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
