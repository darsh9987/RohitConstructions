import { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for your next project</p>
            </div>

            <div className="container content-section">
                <div className="contact-grid">
                    <div className="contact-info glass">
                        <h3>Get In Touch</h3>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <strong>Address</strong>
                                <p>301 Isabella, 77/559, Sahney Sujjan Park, Lullanagar, Pune, Maharashtra, India - 411040</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div>
                                <strong>Phone</strong>
                                <p>+91 9922 88 7699</p>
                                <p>+91 8830 83 4674</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">✉️</div>
                            <div>
                                <strong>Email</strong>
                                <p>rohitconstructions@icloud.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">🕒</div>
                            <div>
                                <strong>Business Hours</strong>
                                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form glass">
                        <h3>Send Us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="projectType">Project Type</label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a type</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="bunglow">Bunglow</option>
                                    <option value="hospital">Hospital</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                />
                            </div>

                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
