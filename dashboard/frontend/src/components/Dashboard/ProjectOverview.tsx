import React, { useEffect, useState } from 'react';
import { fetchProjectOverview } from '../../services/api';
import KPIWidget from './KPIWidget';
import GuidedActions from './GuidedActions';

const ProjectOverview: React.FC = () => {
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProjectOverview = async () => {
            try {
                const data = await fetchProjectOverview();
                setProjectData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getProjectOverview();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading project overview: {error.message}</div>;
    }

    return (
        <div className="project-overview">
            <h1>Project Overview</h1>
            {projectData && (
                <>
                    <h2>{projectData.name}</h2>
                    <p>{projectData.description}</p>
                    <KPIWidget data={projectData.kpis} />
                    <GuidedActions actions={projectData.guidedActions} />
                </>
            )}
        </div>
    );
};

export default ProjectOverview;