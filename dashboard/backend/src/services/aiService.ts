import axios from 'axios';

class AIService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    public async generateModel(data: any): Promise<any> {
        try {
            const response = await axios.post(`${this.apiUrl}/ai/generate`, data);
            return response.data;
        } catch (error) {
            throw new Error(`Error generating model: ${error.message}`);
        }
    }

    public async getGuidedActions(projectId: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/ai/guided-actions/${projectId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching guided actions: ${error.message}`);
        }
    }

    public async analyzeData(data: any): Promise<any> {
        try {
            const response = await axios.post(`${this.apiUrl}/ai/analyze`, data);
            return response.data;
        } catch (error) {
            throw new Error(`Error analyzing data: ${error.message}`);
        }
    }
}

export default new AIService(process.env.AI_API_URL || 'http://localhost:5000');