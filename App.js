import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

    useEffect(() => {
        setAppState({ loading: true });
        // const apiUrl = 'http://192.168.0.70:8080/';
        // const apiUrl = 'http://192.168.0.155:8080/';
        const apiUrl = "http://localhost:8080";
        
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({ loading: false, repos: allRepos });
        });
    }, [setAppState]);
  return (
      <div className='App'>
        <div className='container'>
          <h1>My Repositories</h1>
        </div>
        <div className='repo-container'>
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      
      </div>
  );


}
export default App;
