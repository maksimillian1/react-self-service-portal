import React, {useState} from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route, Redirect } from "react-router-dom"; 

import {useOnLoadFetch} from './hooks/useOnLoadFetch';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import {IncidentsPage} from './pages/IncidentsPage'
import {IncidentPage} from "./pages/IncidentPage";
import {TasksPage} from './pages/TasksPage'
import {TaskPage} from "./pages/TaskPage";
import {ApprovalsPage} from './pages/ApprovalsPage';
import {AssetPage} from './pages/AssetPage';
import {AssetsPage} from './pages/AssetsPage';
import {ApprovalPage} from './pages/ApprovalPage';
import HomePage from './pages/HomePage';
import RequestsPage from './pages/RequestsPage';



import {AuthContext} from './contexts/AuthContext';
import {ModalContext} from './contexts/ModalContext';

import './App.css'

function App() {

  const [actionId, setActionId] = useState('');
  const [modalOpen, setModalOpen] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const modalContext = {actionId, setActionId, modalOpen, setModalOpen, modalContent, setModalContent};
  const {result, loading, errors} = useOnLoadFetch('/api/x_395143_employee/em_session_user_info/current_user');

  if(loading || errors || !result.config){
    return <Preloader />;
  }

  const theme = result.config.theme ? `content content--${result.config.theme}`: 'content content--pink';

  return (
    <AuthContext.Provider value={result}>
      <Navigation/>
      <div className={theme}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/incidents" exact>
            <IncidentsPage />
          </Route>
          <Route path="/incident/:id" render={(props) => <IncidentPage {...props}/>} exact/>
          <Route path="/tasks">
            <TasksPage />
          </Route>
          <Route path="/task/:id" render={(props) => <TaskPage {...props}/>} exact/>
          <Route path="/approvals">
            <ApprovalsPage />
          </Route>
          <Route path="/approval/:id" render={(props) => <ApprovalPage {...props}/>} exact/>
          <Route path="/assets">
            <AssetsPage />
          </Route>
          <Route path="/asset/:id" render={(props) => <AssetPage {...props}/>} exact/>
          <Route path="/requests">
            <ModalContext.Provider value={modalContext}>
              <RequestsPage />
            </ModalContext.Provider>
          </Route>
          <Redirect to="" />
        </Switch>
      </div>
      <Footer /> 
    </AuthContext.Provider>
  );
}


export default hot(App);
