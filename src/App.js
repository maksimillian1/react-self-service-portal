import React, {useState} from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route, Redirect } from "react-router-dom"; 

import useAxios from './hooks/useAxios';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import IncidentsPage from './pages/IncidentsPage'
import IncidentPage from "./pages/IncidentPage";
import HomePage from './pages/HomePage';
import RequestsPage from './pages/RequestsPage';
import Footer from './components/Footer';
import {AuthContext} from './contexts/AuthContext';
import {ModalContext} from './contexts/ModalContext';


import './App.css'

function App() {
  var { loading, errors, result } = useAxios('/api/x_395143_employee/em_session_user_info/current_user', 'object');

  const spinner = document.getElementById('spinner');
  if (spinner && !spinner.hasAttribute('hidden')) {
    spinner.setAttribute('hidden', 'true');
  }

  //action
  const [actionId, setActionId] = useState('');
  const [modalOpen, setModalOpen] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const modalContext = {actionId, setActionId, modalOpen, setModalOpen, modalContent, setModalContent};

  if(loading || errors){
    return <Preloader />;
  }

  return (
    <AuthContext.Provider value={result}>
      <Navigation/>
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/incidents" exact>
            <IncidentsPage />
          </Route>
          <Route path="/incident/:id" render={(props) => <IncidentPage {...props}/>} exact/>
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
