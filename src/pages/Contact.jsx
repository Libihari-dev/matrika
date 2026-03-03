import { MapPin, Clock, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="page-wrapper">
            <section className="contact-hero">
                <div className="container">
                    <span className="section-label">GET IN TOUCH</span>
                    <h1 className="section-title">Contact Us</h1>
                    <p className="section-subtitle" style={{ margin: '16px 0 0', textAlign: 'left', maxWidth: '600px' }}>
                        Ready to begin your wellbeing journey? Have questions about our services?
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrap">
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send Us a Message</h2>
                            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" type="text" placeholder="Your full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input id="email" type="email" placeholder="your@email.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inquiry">Inquiry Type</label>
                                    <select id="inquiry" defaultValue="">
                                        <option value="" disabled>Select inquiry type</option>
                                        <option value="diagnostics">Diagnostics Booking</option>
                                        <option value="literacy">Literacy Hub Inquiry</option>
                                        <option value="sanctuary">Sanctuary Programs</option>
                                        <option value="greenlab">Green Lab Programs</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="partnership">Partnership</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tier">Preferred Session Tier</label>
                                    <select id="tier" defaultValue="">
                                        <option value="" disabled>Select a tier</option>
                                        <option value="basic">Blueprint Basic — ₹2,499</option>
                                        <option value="standard">Blueprint Standard — ₹4,999</option>
                                        <option value="comprehensive">Blueprint Comprehensive — ₹7,499</option>
                                        <option value="undecided">Not sure yet</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="Tell us about your wellbeing goals or questions..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="contact-info">
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Information</h2>
                            <div className="contact-info-items">
                                <div className="contact-info-item">
                                    <MapPin size={20} />
                                    <div>
                                        <strong>Location</strong>
                                        <p>India-based, serving clients nationwide</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <Clock size={20} />
                                    <div>
                                        <strong>Operating Hours</strong>
                                        <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <Mail size={20} />
                                    <div>
                                        <strong>Email</strong>
                                        <p>hello@matrikasoulnest.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <Phone size={20} />
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91 (contact on request)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social">
                                <h3 style={{ fontSize: '1rem', marginBottom: '16px' }}>Follow Us</h3>
                                <div className="social-links">
                                    <a href="#" className="social-link" aria-label="Instagram"><Instagram size={22} /></a>
                                    <a href="#" className="social-link" aria-label="Facebook"><Facebook size={22} /></a>
                                    <a href="#" className="social-link" aria-label="Twitter"><Twitter size={22} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
