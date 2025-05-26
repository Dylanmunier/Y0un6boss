import React, { useState, useEffect } from 'react';
import { Ticket } from '../../types';
import { fetchTickets, createTicket } from '../../services/api';

const Ticketing: React.FC = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [newTicket, setNewTicket] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadTickets = async () => {
            const fetchedTickets = await fetchTickets();
            setTickets(fetchedTickets);
            setLoading(false);
        };

        loadTickets();
    }, []);

    const handleCreateTicket = async () => {
        if (newTicket.trim()) {
            const createdTicket = await createTicket(newTicket);
            setTickets([...tickets, createdTicket]);
            setNewTicket('');
        }
    };

    if (loading) {
        return <div>Loading tickets...</div>;
    }

    return (
        <div className="ticketing-container">
            <h2>Ticketing System</h2>
            <div className="ticket-list">
                {tickets.map(ticket => (
                    <div key={ticket.id} className="ticket-item">
                        <p>{ticket.description}</p>
                    </div>
                ))}
            </div>
            <div className="ticket-form">
                <input
                    type="text"
                    value={newTicket}
                    onChange={(e) => setNewTicket(e.target.value)}
                    placeholder="Enter new ticket description"
                />
                <button onClick={handleCreateTicket}>Create Ticket</button>
            </div>
        </div>
    );
};

export default Ticketing;