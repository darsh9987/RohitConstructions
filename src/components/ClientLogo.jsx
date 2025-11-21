import './ClientLogo.css';

function ClientLogo({ name, logo }) {
    return (
        <div className="client-logo glass">
            <img src={logo} alt={name} />
            <p className="client-name">{name}</p>
        </div>
    );
}

export default ClientLogo;
