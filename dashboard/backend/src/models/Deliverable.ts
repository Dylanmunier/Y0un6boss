export interface Deliverable {
    id: string;
    projectId: string;
    name: string;
    description: string;
    status: 'pending' | 'completed' | 'in-progress';
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export class DeliverableModel {
    private deliverables: Deliverable[] = [];

    constructor() {}

    public createDeliverable(deliverable: Deliverable): Deliverable {
        this.deliverables.push(deliverable);
        return deliverable;
    }

    public getDeliverablesByProjectId(projectId: string): Deliverable[] {
        return this.deliverables.filter(deliverable => deliverable.projectId === projectId);
    }

    public updateDeliverable(id: string, updatedData: Partial<Deliverable>): Deliverable | null {
        const index = this.deliverables.findIndex(deliverable => deliverable.id === id);
        if (index !== -1) {
            this.deliverables[index] = { ...this.deliverables[index], ...updatedData };
            return this.deliverables[index];
        }
        return null;
    }

    public deleteDeliverable(id: string): boolean {
        const index = this.deliverables.findIndex(deliverable => deliverable.id === id);
        if (index !== -1) {
            this.deliverables.splice(index, 1);
            return true;
        }
        return false;
    }
}