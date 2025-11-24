import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { completedProjects, projectTypes } from '../data/projectsData';
import './ProjectsPage.css';

function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = completedProjects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'All' || project.type === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Completed Projects</h1>
                <p>Over 75 successfully delivered projects across Pune</p>
            </div>

            <div className="container">
                <div className="filter-section">
                    <div className="search-box">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="filter-buttons">
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                className={`filter-btn ${activeFilter === type ? 'active' : ''}`}
                                onClick={() => setActiveFilter(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-count">
                    Showing {filteredProjects.length} of {completedProjects.length} projects
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} showImage={false} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-results">
                        <p>No projects found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectsPage;
