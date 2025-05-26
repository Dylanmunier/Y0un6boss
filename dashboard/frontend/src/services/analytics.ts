import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getAnalyticsData = async (projectId) => {
    try {
        const response = await axios.get(`${API_URL}/analytics/${projectId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        throw error;
    }
};

export const trackUserAction = async (projectId, action) => {
    try {
        const response = await axios.post(`${API_URL}/analytics/${projectId}/track`, { action });
        return response.data;
    } catch (error) {
        console.error('Error tracking user action:', error);
        throw error;
    }
};

export const getKPIData = async (projectId) => {
    try {
        const response = await axios.get(`${API_URL}/analytics/${projectId}/kpi`);
        return response.data;
    } catch (error) {
        console.error('Error fetching KPI data:', error);
        throw error;
    }
};