import SideBar from './components/sideBar';

import ThingsPage from './Pages/Things';
import ConstructorPage from './Pages/Constructor';

import { Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';

function App() {
    //const [sideBarState, setSideBarState] = useState(false);

    return (
        <div className="App">
            <div className="content">
                <SideBar />
                <main>
                    <Routes>
                        <Route path="/" element={<ThingsPage />} />
                        <Route path="/things" element={<ThingsPage />} />
                        <Route path="/constructor" element={<ConstructorPage />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
