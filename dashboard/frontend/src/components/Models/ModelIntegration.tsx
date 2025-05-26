import React, { useEffect, useState } from 'react';
import { fetchModels, integrateModel } from '../../services/api';
import './ModelIntegration.css';

const ModelIntegration = () => {
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [integrationStatus, setIntegrationStatus] = useState('');

    useEffect(() => {
        const loadModels = async () => {
            const fetchedModels = await fetchModels();
            setModels(fetchedModels);
        };
        loadModels();
    }, []);

    const handleModelSelect = (model) => {
        setSelectedModel(model);
    };

    const handleIntegrate = async () => {
        if (selectedModel) {
            setIntegrationStatus('Integrating...');
            try {
                await integrateModel(selectedModel.id);
                setIntegrationStatus('Integration successful!');
            } catch (error) {
                setIntegrationStatus('Integration failed. Please try again.');
            }
        }
    };

    return (
        <div className="model-integration">
            <h2>Model Integration</h2>
            <div className="model-list">
                {models.map((model) => (
                    <div
                        key={model.id}
                        className={`model-item ${selectedModel?.id === model.id ? 'selected' : ''}`}
                        onClick={() => handleModelSelect(model)}
                    >
                        {model.name}
                    </div>
                ))}
            </div>
            <button onClick={handleIntegrate} disabled={!selectedModel}>
                Integrate Selected Model
            </button>
            {integrationStatus && <p>{integrationStatus}</p>}
        </div>
    );
};

export default ModelIntegration;