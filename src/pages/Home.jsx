import { Link } from 'react-router-dom';
import { Stethoscope, BookOpen, Heart, Leaf, ArrowRight, Shield, Users, Sparkles, Star, Quote } from 'lucide-react';
import './Home.css';

export default function Home() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container hero-content">
                    <span className="section-label">SCIENCE-INFORMED WELLBEING</span>
                    <h1 className="hero-title">
                        Understand Your Blueprint.<br />Build Your Resilience.
                    </h1>
                    <p className="hero-desc">
                        At Matrika Soulnest, we integrate traditional wisdom with contemporary science
                        to help you understand your body's unique patterns and build lasting resilience
                        through evidence-based preventive health strategies.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">
                            Book Your Blueprint Session <ArrowRight size={18} />
                        </Link>
                        <Link to="/about" className="btn btn-outline">
                            Learn Our Approach
                        </Link>
                    </div>
                </div>
            </section>

            {/* Four Pillars */}
            <section className="section pillars-section">
                <div className="container text-center">
                    <span className="section-label">OUR FOUR PILLARS</span>
                    <h2 className="section-title">A Structured Approach to Holistic Wellbeing</h2>
                    <p className="section-subtitle">
                        Each pillar addresses a fundamental dimension of health — from understanding
                        your biological blueprint to building sustainable lifestyle practices.
                    </p>
                </div>
                <div className="container">
                    <div className="pillars-grid">
                        <PillarCard
                            icon={<Stethoscope size={28} />}
                            title="Diagnostics"
                            desc="Discover your unique biological blueprint through science-informed assessments for preventive wellbeing."
                            link="/diagnostics"
                            badge="NOW BOOKING"
                            badgeType="green"
                            featured
                        />
                        <PillarCard
                            icon={<BookOpen size={28} />}
                            title="Literacy Hub"
                            desc="Digital literacy, women & youth skill development programs, and future ECCE integration."
                            link="/literacy-hub"
                            badge="LAUNCHING SOON"
                            badgeType="gold"
                        />
                        <PillarCard
                            icon={<Heart size={28} />}
                            title="Sanctuary"
                            desc="Yoga, meditation, emotional regulation programs, and community circles for inner balance."
                            link="/sanctuary"
                            badge="LAUNCHING SOON"
                            badgeType="gold"
                        />
                        <PillarCard
                            icon={<Leaf size={28} />}
                            title="Green Lab"
                            desc="Evidence-based herbal education and sustainable living programs grounded in research."
                            link="/green-lab"
                            badge="LAUNCHING SOON"
                            badgeType="gold"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-section">
                <div className="container text-center">
                    <span className="section-label">WHY CHOOSE US</span>
                    <h2 className="section-title">What Sets Us Apart</h2>
                    <p className="section-subtitle">
                        We combine the best of science and tradition to deliver a wellbeing experience
                        that is both deeply informed and genuinely caring.
                    </p>
                </div>
                <div className="container">
                    <div className="grid-3" style={{ marginTop: '48px' }}>
                        <div className="card why-card">
                            <div className="why-icon-wrap">
                                <Shield size={28} />
                            </div>
                            <h3>Science-Backed Approach</h3>
                            <p>Every assessment and recommendation is grounded in peer-reviewed research and clinical evidence.</p>
                        </div>
                        <div className="card why-card">
                            <div className="why-icon-wrap">
                                <Sparkles size={28} />
                            </div>
                            <h3>Holistic Integration</h3>
                            <p>We bridge traditional healing wisdom with modern diagnostics for a comprehensive wellbeing experience.</p>
                        </div>
                        <div className="card why-card">
                            <div className="why-icon-wrap">
                                <Users size={28} />
                            </div>
                            <h3>Community Focus</h3>
                            <p>Beyond individual sessions, we foster a supportive community that nurtures collective growth and healing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container text-center">
                    <span className="section-label">TESTIMONIALS</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                </div>
                <div className="container">
                    <div className="grid-3" style={{ marginTop: '48px' }}>
                        <TestimonialCard
                            quote="The biological blueprint session was incredibly eye-opening. I finally understand my body's patterns and have a clear roadmap for improvement."
                            name="Priya S."
                            role="Wellness Enthusiast"
                        />
                        <TestimonialCard
                            quote="Matrika Soulnest's approach is unlike anything I've experienced. The blend of science and traditional wisdom is truly transformative."
                            name="Rahul M."
                            role="Tech Professional"
                        />
                        <TestimonialCard
                            quote="The diagnostic session provided insights I'd never received from conventional health checkups. Highly recommended for anyone serious about preventive health."
                            name="Anita K."
                            role="Yoga Practitioner"
                        />
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section newsletter-section">
                <div className="container text-center">
                    <span className="section-label">STAY INFORMED</span>
                    <h2 className="section-title">Join Our Wellbeing Community</h2>
                    <p className="section-subtitle">
                        Get the latest insights on holistic health, upcoming programs, and exclusive
                        wellbeing resources delivered to your inbox.
                    </p>
                    <form className="newsletter-cta" onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

function PillarCard({ icon, title, desc, link, badge, badgeType, featured }) {
    return (
        <div className={`pillar-card ${featured ? 'pillar-featured' : ''}`}>
            <span className={`badge badge-${badgeType}`}>{badge}</span>
            <div className={`pillar-icon ${featured ? 'pillar-icon-featured' : ''}`}>
                {icon}
            </div>
            <h3 className="pillar-title">{title}</h3>
            <p className="pillar-desc">{desc}</p>
            <Link to={link} className="pillar-link">
                Learn more <ArrowRight size={16} />
            </Link>
        </div>
    );
}

function TestimonialCard({ quote, name, role }) {
    return (
        <div className="card testimonial-card">
            <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#C19A4E" color="#C19A4E" />
                ))}
            </div>
            <Quote size={24} className="testimonial-quote-icon" />
            <p className="testimonial-text">{quote}</p>
            <div className="testimonial-author">
                <div className="testimonial-avatar">{name[0]}</div>
                <div>
                    <strong>{name}</strong>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    );
}
