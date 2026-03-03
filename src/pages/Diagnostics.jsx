import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Activity, BarChart3, Map, Check } from 'lucide-react';
import './Diagnostics.css';

export default function Diagnostics() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className="diag-hero">
                <div className="diag-hero-overlay"></div>
                <div className="container diag-hero-content">
                    <span className="section-label" style={{ color: '#C19A4E' }}>
                        FLAGSHIP SERVICE — NOW BOOKING
                    </span>
                    <h1 className="diag-hero-title">Discover Your Biological Blueprint</h1>
                    <p className="diag-hero-desc">
                        A science-informed diagnostic session that maps your unique physiological
                        patterns, emotional tendencies, and lifestyle factors — giving you a clear,
                        actionable foundation for preventive wellbeing.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Book Now <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Process */}
            <section className="section">
                <div className="container text-center">
                    <span className="section-label">HOW IT WORKS</span>
                    <h2 className="section-title">Your Blueprint Journey</h2>
                    <p className="section-subtitle">
                        A structured four-step process designed to give you deep insight into your
                        body's unique patterns and create a personalized path forward.
                    </p>
                </div>
                <div className="container">
                    <div className="process-grid">
                        <ProcessStep
                            icon={<ClipboardList size={28} />}
                            step="01"
                            title="Intake"
                            desc="Comprehensive health history review and lifestyle assessment to establish your baseline."
                        />
                        <ProcessStep
                            icon={<Activity size={28} />}
                            step="02"
                            title="Assessment"
                            desc="Science-informed evaluations including pulse analysis, body composition, and relevant biomarkers."
                        />
                        <ProcessStep
                            icon={<BarChart3 size={28} />}
                            step="03"
                            title="Analysis"
                            desc="Your data is analyzed through both traditional and modern frameworks to identify unique patterns."
                        />
                        <ProcessStep
                            icon={<Map size={28} />}
                            step="04"
                            title="Roadmap"
                            desc="A personalized wellbeing plan with actionable recommendations tailored to your blueprint."
                        />
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section pricing-section">
                <div className="container text-center">
                    <span className="section-label">PRICING</span>
                    <h2 className="section-title">Choose Your Blueprint Package</h2>
                    <p className="section-subtitle">
                        Select the level of depth that best suits your wellbeing journey. All
                        packages include a follow-up consultation.
                    </p>
                </div>
                <div className="container">
                    <div className="pricing-grid">
                        <PricingCard
                            tier="Blueprint Basic"
                            price="2,499"
                            desc="Essential health mapping for those starting their wellbeing journey."
                            features={[
                                "60-minute diagnostic session",
                                "Basic pulse & body assessment",
                                "Lifestyle pattern analysis",
                                "Digital health summary report",
                                "15-minute follow-up call"
                            ]}
                            link="/contact"
                        />
                        <PricingCard
                            tier="Blueprint Standard"
                            price="4,999"
                            desc="Comprehensive assessment for deeper insight into your biological patterns."
                            features={[
                                "90-minute diagnostic session",
                                "Advanced pulse & body assessment",
                                "Emotional pattern mapping",
                                "Detailed biological blueprint report",
                                "30-minute follow-up consultation",
                                "Personalized lifestyle recommendations"
                            ]}
                            link="/contact"
                            featured
                        />
                        <PricingCard
                            tier="Blueprint Comprehensive"
                            price="7,499"
                            desc="The most thorough assessment for complete understanding of your wellbeing."
                            features={[
                                "120-minute diagnostic session",
                                "Full physiological assessment",
                                "Emotional & cognitive mapping",
                                "Comprehensive blueprint report",
                                "45-minute follow-up consultation",
                                "Personalized action plan",
                                "3-month support access"
                            ]}
                            link="/contact"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProcessStep({ icon, step, title, desc }) {
    return (
        <div className="process-step">
            <div className="process-step-num">{step}</div>
            <div className="process-step-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

function PricingCard({ tier, price, desc, features, link, featured }) {
    return (
        <div className={`pricing-card ${featured ? 'pricing-featured' : ''}`}>
            {featured && <div className="pricing-badge">Most Popular</div>}
            <h3 className="pricing-tier">{tier}</h3>
            <p className="pricing-desc">{desc}</p>
            <div className="pricing-price">
                <span className="pricing-currency">₹</span>
                <span className="pricing-amount">{price}</span>
            </div>
            <ul className="pricing-features">
                {features.map((f, i) => (
                    <li key={i}>
                        <Check size={16} className="pricing-check" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>
            <Link to={link} className={`btn ${featured ? 'btn-primary' : 'btn-outline'} pricing-btn`}>
                Book This Package <ArrowRight size={16} />
            </Link>
        </div>
    );
}
