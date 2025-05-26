import { Request, Response } from 'express';
import { AnalyticsModel } from '../models/Analytics';
import { ProjectModel } from '../models/Project';

// Service to handle analytics data
class AnalyticsService {
    // Method to get analytics data for a specific project
    async getProjectAnalytics(projectId: string): Promise<any> {
        try {
            const analyticsData = await AnalyticsModel.find({ projectId });
            return analyticsData;
        } catch (error) {
            throw new Error('Error fetching analytics data: ' + error.message);
        }
    }

    // Method to create or update analytics data for a project
    async upsertProjectAnalytics(projectId: string, data: any): Promise<any> {
        try {
            const analyticsData = await AnalyticsModel.findOneAndUpdate(
                { projectId },
                data,
                { new: true, upsert: true }
            );
            return analyticsData;
        } catch (error) {
            throw new Error('Error updating analytics data: ' + error.message);
        }
    }

    // Method to delete analytics data for a specific project
    async deleteProjectAnalytics(projectId: string): Promise<any> {
        try {
            await AnalyticsModel.deleteMany({ projectId });
            return { message: 'Analytics data deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting analytics data: ' + error.message);
        }
    }
}

export default new AnalyticsService();