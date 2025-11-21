import StatCard from '../components/StatCard';
import './HomePage.css';

function HomePage({ setCurrentPage }) {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>In Pursuit of Your Perfect Project</h1>
                <p>Providing exceptional construction services across Pune since 2012. Building excellence with a legacy spanning four decades.</p>
                <button className="btn" onClick={() => setCurrentPage('contact')}>Get a Quote</button>
                <div className="hero-stats">
                    <StatCard number="100+" label="Projects Completed" />
                    <StatCard number="40+" label="Years Legacy" />
                    <StatCard number="12M+" label="Sq.ft Built" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
