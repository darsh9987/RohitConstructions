import './StatCard.css';

function StatCard({ number, label }) {
    return (
        <div className="stat-card glass">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

export default StatCard;
