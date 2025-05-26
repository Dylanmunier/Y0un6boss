import React, { useEffect, useState } from 'react';
import { fetchAPIs } from '../../services/api';

const APIManager: React.FC = () => {
    const [apis, setApis] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAPIs = async () => {
            try {
                const response = await fetchAPIs();
                setApis(response);
            } catch (err) {
                setError('Failed to load APIs');
            } finally {
                setLoading(false);
            }
        };

        loadAPIs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>API Manager</h2>
            <ul>
                {apis.map((api) => (
                    <li key={api.id}>
                        <strong>{api.name}</strong>: {api.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default APIManager;