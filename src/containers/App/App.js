import React from 'react';
import Routes from '../../routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes />
            </Router>
        </div>
    );
}

export default App;
