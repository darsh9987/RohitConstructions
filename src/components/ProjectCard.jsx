import './ProjectCard.css';

function ProjectCard({ project, showImage = false }) {
    return (
        <div className="project-card glass">
            {showImage && project.image && (
                <div className="project-image">
                    <img src={project.image} alt={project.name} />
                </div>
            )}
            <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                {project.client && (
                    <p className="project-meta">
                        <strong>Client:</strong> {project.client}
                    </p>
                )}
                <p className="project-meta">
                    <strong>Location:</strong> {project.location}
                </p>
                <p className="project-meta">
                    <strong>Type:</strong> {project.type}
                </p>
                {project.specs && (
                    <p className="project-meta">
                        <strong>Specs:</strong> {project.specs}
                    </p>
                )}
                <div className="project-area">{project.area} sq.ft</div>
                {project.type && (
                    <span className="project-tag">{project.type}</span>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
