import React from 'react';
import { useEffect, useState } from 'react';
import { fetchKPIData } from '../../services/analytics';

const KPIWidget: React.FC = () => {
    const [kpiData, setKpiData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getKPIData = async () => {
            try {
                const data = await fetchKPIData();
                setKpiData(data);
            } catch (err) {
                setError('Failed to fetch KPI data');
            } finally {
                setLoading(false);
            }
        };

        getKPIData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="kpi-widget">
            <h2>Key Performance Indicators</h2>
            <ul>
                {kpiData.map((kpi: any) => (
                    <li key={kpi.id}>
                        <strong>{kpi.name}:</strong> {kpi.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KPIWidget;