import React, { useEffect, useState } from 'react';
import { fetchDeliverables } from '../../services/api';
import { Deliverable } from '../../types';

const DeliverableList: React.FC = () => {
    const [deliverables, setDeliverables] = useState<Deliverable[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDeliverables = async () => {
            try {
                const data = await fetchDeliverables();
                setDeliverables(data);
            } catch (err) {
                setError('Failed to load deliverables');
            } finally {
                setLoading(false);
            }
        };

        loadDeliverables();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Deliverable List</h2>
            <ul>
                {deliverables.map((deliverable) => (
                    <li key={deliverable.id}>
                        <h3>{deliverable.title}</h3>
                        <p>{deliverable.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeliverableList;