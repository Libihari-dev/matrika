import { Link } from 'react-router-dom';
import { Beaker, Accessibility, Sprout, Users, ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <span className="section-label">ABOUT US</span>
                    <h1 className="section-title">Rooted in Science, Guided by Wisdom</h1>
                    <p className="about-hero-desc">
                        Matrika Soulnest was founded on a simple yet powerful belief: true wellbeing
                        emerges when we understand our body's unique biological blueprint and align
                        our lifestyle accordingly. We integrate the depth of traditional wisdom with
                        the precision of contemporary science to help individuals and communities
                        build lasting resilience.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section">
                <div className="container">
                    <div className="about-mission-grid">
                        <div className="about-mission-text">
                            <span className="section-label">OUR MISSION</span>
                            <h2 className="section-title">Empowering Preventive Wellbeing</h2>
                            <p>
                                We exist to make science-informed wellbeing accessible to everyone.
                                Through our four pillars — Diagnostics, Literacy Hub, Sanctuary, and
                                Green Lab — we provide a structured pathway for individuals to understand
                                their health, build essential skills, find inner balance, and connect
                                with nature's healing potential.
                            </p>
                            <p>
                                Our diagnostic approach goes beyond conventional health assessments. By
                                mapping your unique physiological patterns, emotional tendencies, and
                                lifestyle factors, we create a comprehensive biological blueprint that
                                serves as the foundation for truly personalized wellbeing strategies.
                            </p>
                        </div>
                        <div className="about-mission-image">
                            <div className="about-image-placeholder">
                                <Sprout size={64} />
                                <span>Growing Together</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section about-values-section">
                <div className="container text-center">
                    <span className="section-label">CORE VALUES</span>
                    <h2 className="section-title">What We Stand For</h2>
                </div>
                <div className="container">
                    <div className="grid-4" style={{ marginTop: '48px' }}>
                        <ValueCard
                            icon={<Beaker size={28} />}
                            title="Science-Informed"
                            desc="Every program and assessment is grounded in peer-reviewed research and clinical evidence."
                        />
                        <ValueCard
                            icon={<Accessibility size={28} />}
                            title="Accessibility"
                            desc="Making quality wellbeing education and services available to all communities."
                        />
                        <ValueCard
                            icon={<Sprout size={28} />}
                            title="Sustainability"
                            desc="Promoting practices that nurture both personal health and environmental harmony."
                        />
                        <ValueCard
                            icon={<Users size={28} />}
                            title="Community"
                            desc="Building supportive networks that foster collective growth, healing, and resilience."
                        />
                    </div>
                </div>
            </section>

            {/* Founder's Story */}
            <section className="section">
                <div className="container">
                    <div className="founder-story-grid">
                        <div className="founder-portrait">
                            <div className="founder-portrait-placeholder">
                                <Users size={48} />
                            </div>
                            <span className="founder-portrait-label">Founder Portrait</span>
                        </div>
                        <div className="founder-story-text">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Founder's Story</h2>
                            <p>
                                With a background in science and years of public service, our founder
                                recognized a gap between traditional wellbeing wisdom and modern
                                accessibility. Matrika Soulnest was born from the conviction that
                                these worlds don't need to be separate.
                            </p>
                            <p>
                                Drawing from formal education in biological sciences, certifications in
                                holistic health methodologies, and extensive community work, the
                                mission became clear: create a structured, evidence-based platform
                                that makes preventive wellbeing accessible to every family.
                            </p>
                            <p>
                                Today, Matrika Soulnest serves as a bridge — connecting validated
                                science with time-tested lifestyle wisdom in a format that is
                                professional, warm, and never preachy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

function ValueCard({ icon, title, desc }) {
    return (
        <div className="card about-value-card">
            <div className="about-value-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
