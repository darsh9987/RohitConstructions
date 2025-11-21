import './AboutPage.css';

function AboutPage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>About Rohit Constructions</h1>
                <p>Four decades of excellence in construction services across Pune</p>
            </div>

            <div className="container content-section">
                <div className="about-grid">
                    <div className="about-card glass">
                        <h3>🏗️ Our Legacy</h3>
                        <p>Established in 1984, Rohit Constructions has been at the forefront of transforming Pune's skyline. With over 40 years of experience, we bring unmatched expertise and dedication to every project we undertake.</p>
                    </div>

                    <div className="about-card glass">
                        <h3>🎯 Our Mission</h3>
                        <p>To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability in every project we execute.</p>
                    </div>

                    <div className="about-card glass">
                        <h3>⭐ Our Values</h3>
                        <p>Integrity, quality, and customer satisfaction form the cornerstone of our business. We believe in building lasting relationships through transparent communication and reliable service delivery.</p>
                    </div>
                </div>

                <div className="highlights-section">
                    <h2>Why Choose Us</h2>
                    <div className="highlights-grid">
                        <div className="highlight-item glass">
                            <div className="highlight-icon">✓</div>
                            <div>
                                <h4>Proven Track Record</h4>
                                <p>Successfully completed 100+ projects ranging from residential complexes to commercial towers and specialized facilities.</p>
                            </div>
                        </div>

                        <div className="highlight-item glass">
                            <div className="highlight-icon">✓</div>
                            <div>
                                <h4>Expert Team</h4>
                                <p>Our team of experienced engineers, architects, and construction professionals ensure excellence at every stage.</p>
                            </div>
                        </div>

                        <div className="highlight-item glass">
                            <div className="highlight-icon">✓</div>
                            <div>
                                <h4>Quality Assurance</h4>
                                <p>Rigorous quality control processes and adherence to international construction standards guarantee superior results.</p>
                            </div>
                        </div>

                        <div className="highlight-item glass">
                            <div className="highlight-icon">✓</div>
                            <div>
                                <h4>Timely Delivery</h4>
                                <p>Commitment to project timelines with efficient resource management and proactive problem-solving.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
