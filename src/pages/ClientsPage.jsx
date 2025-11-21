import ClientLogo from '../components/ClientLogo';
import { clientLogos } from '../data/projectsData';
import './ClientsPage.css';

function ClientsPage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Our Esteemed Clients</h1>
                <p>Trusted by leading real estate developers across Pune</p>
            </div>

            <div className="container content-section">
                <div className="clients-grid">
                    {clientLogos.map((client, index) => (
                        <ClientLogo key={index} name={client.name} logo={client.logo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientsPage;
