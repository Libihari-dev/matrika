import { Link } from 'react-router-dom';
import { Monitor, Users, GraduationCap, ArrowRight } from 'lucide-react';
import './ServicePage.css';

export default function LiteracyHub() {
    return (
        <div className="page-wrapper">
            <section className="service-hero service-hero-literacy">
                <div className="service-hero-overlay"></div>
                <div className="container service-hero-content">
                    <span className="section-label" style={{ color: '#C19A4E' }}>LAUNCHING SOON</span>
                    <h1 className="service-hero-title">Literacy Hub</h1>
                    <p className="service-hero-desc">
                        Empowering communities through digital literacy, women's skill development,
                        and youth programs — building the foundation for lifelong learning and growth.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <span className="section-label">OUR PROGRAMS</span>
                    <h2 className="section-title">Building Skills for Tomorrow</h2>
                    <p className="section-subtitle">
                        Our literacy programs are designed to bridge knowledge gaps and empower
                        individuals with practical skills for the modern world.
                    </p>
                </div>
                <div className="container">
                    <div className="grid-3 service-cards" style={{ marginTop: '48px' }}>
                        <ServiceCard
                            icon={<Monitor size={28} />}
                            title="Digital Literacy"
                            desc="Essential technology skills for the digital age — from basic computer literacy to online safety and digital communication."
                            status="Coming Soon"
                        />
                        <ServiceCard
                            icon={<Users size={28} />}
                            title="Women's Skill Development"
                            desc="Tailored programs empowering women with vocational skills, financial literacy, and entrepreneurship fundamentals."
                            status="Coming Soon"
                        />
                        <ServiceCard
                            icon={<GraduationCap size={28} />}
                            title="Youth Development"
                            desc="Engaging programs for young learners focusing on critical thinking, creativity, and future-ready skills."
                            status="Coming Soon"
                        />
                    </div>
                </div>
            </section>

            <section className="section service-cta-section">
                <div className="container text-center">
                    <h2 className="section-title" style={{ color: 'white' }}>Interested in Our Programs?</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Join our waitlist to be notified when Literacy Hub programs launch.
                    </p>
                    <Link to="/contact" className="btn btn-white" style={{ marginTop: '24px' }}>
                        Join Waitlist <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ icon, title, desc, status }) {
    return (
        <div className="card service-card">
            <div className="service-card-badge">{status}</div>
            <div className="service-card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
