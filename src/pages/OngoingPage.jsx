import ProjectCard from '../components/ProjectCard';
import { ongoingProjects } from '../data/projectsData';
import './OngoingPage.css';

function OngoingPage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Ongoing Projects</h1>
                <p>Current projects under construction showcasing our commitment to excellence</p>
            </div>

            <div className="container content-section">
                <div className="ongoing-grid">
                    {ongoingProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} showImage={true} />
                    ))}
                </div>

                <div className="cta-section">
                    <div className="cta-card glass">
                        <h2>Interested in Our Services?</h2>
                        <p>Let's discuss how we can bring your construction vision to life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OngoingPage;
