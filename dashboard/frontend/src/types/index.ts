// This file defines the TypeScript types used throughout the Eidynia dashboard application.

export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'on-hold';
    createdAt: Date;
    updatedAt: Date;
}

export interface Deliverable {
    id: string;
    projectId: string;
    title: string;
    fileUrl: string;
    uploadedAt: Date;
}

export interface Invoice {
    id: string;
    projectId: string;
    amount: number;
    status: 'paid' | 'pending' | 'overdue';
    issuedAt: Date;
    dueDate: Date;
}

export interface Ticket {
    id: string;
    projectId: string;
    title: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'user';
    createdAt: Date;
}

export interface KPI {
    label: string;
    value: number;
}

export interface GuidedAction {
    id: string;
    description: string;
    recommended: boolean;
}

export interface APIIntegration {
    id: string;
    name: string;
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}