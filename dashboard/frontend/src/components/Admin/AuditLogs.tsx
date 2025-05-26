import React, { useEffect, useState } from 'react';
import { fetchAuditLogs } from '../../services/api';
import './AuditLogs.css';

const AuditLogs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAuditLogs = async () => {
            try {
                const response = await fetchAuditLogs();
                setLogs(response.data);
            } catch (err) {
                setError('Failed to fetch audit logs');
            } finally {
                setLoading(false);
            }
        };

        getAuditLogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="audit-logs">
            <h2>Audit Logs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log) => (
                        <tr key={log.id}>
                            <td>{new Date(log.date).toLocaleString()}</td>
                            <td>{log.user}</td>
                            <td>{log.action}</td>
                            <td>{log.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuditLogs;