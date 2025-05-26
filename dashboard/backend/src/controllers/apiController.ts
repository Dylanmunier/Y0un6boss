import { Request, Response } from 'express';
import { ApiService } from '../services/apiService';

class ApiController {
    private apiService: ApiService;

    constructor() {
        this.apiService = new ApiService();
    }

    public async getApiData(req: Request, res: Response): Promise<void> {
        try {
            const data = await this.apiService.fetchApiData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching API data', error });
        }
    }

    public async createApiIntegration(req: Request, res: Response): Promise<void> {
        try {
            const integrationData = req.body;
            const result = await this.apiService.createIntegration(integrationData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error creating API integration', error });
        }
    }

    public async updateApiIntegration(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const integrationData = req.body;
            const result = await this.apiService.updateIntegration(id, integrationData);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error updating API integration', error });
        }
    }

    public async deleteApiIntegration(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.apiService.deleteIntegration(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting API integration', error });
        }
    }
}

export default new ApiController();