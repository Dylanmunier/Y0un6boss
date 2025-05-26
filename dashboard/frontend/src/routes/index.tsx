import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectOverview from '../components/Dashboard/ProjectOverview';
import KPIWidget from '../components/Dashboard/KPIWidget';
import GuidedActions from '../components/Dashboard/GuidedActions';
import DeliverableList from '../components/Deliverables/DeliverableList';
import UploadDeliverable from '../components/Deliverables/UploadDeliverable';
import InvoiceList from '../components/Billing/InvoiceList';
import PaymentIntegration from '../components/Billing/PaymentIntegration';
import TeamChat from '../components/Team/TeamChat';
import Ticketing from '../components/Team/Ticketing';
import ModelGallery from '../components/Models/ModelGallery';
import ModelIntegration from '../components/Models/ModelIntegration';
import APIManager from '../components/API/APIManager';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import UserManagement from '../components/Admin/UserManagement';
import AuditLogs from '../components/Admin/AuditLogs';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProjectOverview} />
                <Route path="/kpi" component={KPIWidget} />
                <Route path="/guided-actions" component={GuidedActions} />
                <Route path="/deliverables" exact component={DeliverableList} />
                <Route path="/deliverables/upload" component={UploadDeliverable} />
                <Route path="/billing/invoices" component={InvoiceList} />
                <Route path="/billing/payment" component={PaymentIntegration} />
                <Route path="/team/chat" component={TeamChat} />
                <Route path="/team/tickets" component={Ticketing} />
                <Route path="/models/gallery" component={ModelGallery} />
                <Route path="/models/integration" component={ModelIntegration} />
                <Route path="/api" component={APIManager} />
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Register} />
                <Route path="/admin/users" component={UserManagement} />
                <Route path="/admin/audit-logs" component={AuditLogs} />
            </Switch>
        </Router>
    );
};

export default Routes;