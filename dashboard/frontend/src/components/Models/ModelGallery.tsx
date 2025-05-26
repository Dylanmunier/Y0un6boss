import React, { useEffect, useState } from 'react';
import { fetchModels } from '../../services/api';
import './ModelGallery.css';

const ModelGallery = () => {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadModels = async () => {
            try {
                const response = await fetchModels();
                setModels(response.data);
            } catch (err) {
                setError('Failed to load models');
            } finally {
                setLoading(false);
            }
        };

        loadModels();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="model-gallery">
            <h2>Model Gallery</h2>
            <div className="model-grid">
                {models.map((model) => (
                    <div key={model.id} className="model-card">
                        <h3>{model.name}</h3>
                        <p>{model.description}</p>
                        <img src={model.imageUrl} alt={model.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelGallery;