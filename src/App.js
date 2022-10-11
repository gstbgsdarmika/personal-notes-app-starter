import React from 'react';
import { Route, Routes, Link  } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<ArchivedPage />}/>
        <Route path="/add" element={<AddPage />} />
        <Route path="/notes/:id" element={<DetailPage/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
