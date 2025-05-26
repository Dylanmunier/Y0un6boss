import { Request, Response } from 'express';
import { CMSModel } from '../models/CMSModel'; // Assurez-vous que ce modèle existe
import { logger } from '../utils/logger';

class CMSService {
    // Récupérer tous les articles
    async getAllArticles(req: Request, res: Response) {
        try {
            const articles = await CMSModel.find();
            res.status(200).json(articles);
        } catch (error) {
            logger.error('Erreur lors de la récupération des articles:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }

    // Récupérer un article par ID
    async getArticleById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const article = await CMSModel.findById(id);
            if (!article) {
                return res.status(404).json({ message: 'Article non trouvé' });
            }
            res.status(200).json(article);
        } catch (error) {
            logger.error('Erreur lors de la récupération de l\'article:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }

    // Créer un nouvel article
    async createArticle(req: Request, res: Response) {
        const newArticle = new CMSModel(req.body);
        try {
            const savedArticle = await newArticle.save();
            res.status(201).json(savedArticle);
        } catch (error) {
            logger.error('Erreur lors de la création de l\'article:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }

    // Mettre à jour un article
    async updateArticle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const updatedArticle = await CMSModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedArticle) {
                return res.status(404).json({ message: 'Article non trouvé' });
            }
            res.status(200).json(updatedArticle);
        } catch (error) {
            logger.error('Erreur lors de la mise à jour de l\'article:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }

    // Supprimer un article
    async deleteArticle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedArticle = await CMSModel.findByIdAndDelete(id);
            if (!deletedArticle) {
                return res.status(404).json({ message: 'Article non trouvé' });
            }
            res.status(204).send();
        } catch (error) {
            logger.error('Erreur lors de la suppression de l\'article:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
}

export default new CMSService();