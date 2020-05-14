import React from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route, Redirect } from "react-router-dom"; 

import useAxios from './hooks/useAxios';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import IncidentsPage from './pages/IncidentsPage'
import IncidentPage from "./pages/IncidentPage";
import HomePage from './pages/HomePage';
import RequestsPage from './pages/RequestsPage';

import './App.css'

function App() {
  var { loading, errors, result } = useAxios('/api/x_395143_employee/em_session_user_info/current_user', 'object');

  const spinner = document.getElementById('spinner');
  if (spinner && !spinner.hasAttribute('hidden')) {
    spinner.setAttribute('hidden', 'true');
  }

  if(loading || errors){
    return <Preloader />;
  }  

  return (
    <>
      <Navigation user={result} />
        <div className="content">
          <Switch>
            <Route path="/x_elsr_react_app_index-html.do" exact>
              <HomePage />
            </Route>
            <Route path="/x_elsr_react_app_index-html.do/incidents" exact>
              <IncidentsPage />
            </Route>
            <Route path="/x_elsr_react_app_index-html.do/incident/:id" render={(props) => <IncidentPage {...props}/>} exact/>
            <Route path="/x_elsr_react_app_index-html.do/requests">
              <RequestsPage />
            </Route>
            <Redirect to="/x_elsr_react_app_index-html.do" />
          </Switch>
        </div>
        
    </>
  );
}


export default hot(App);
