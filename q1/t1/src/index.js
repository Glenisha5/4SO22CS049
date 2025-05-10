import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StockPage from './Pages/stockpage';
import CorrelationHeatmapPage from './pages/CorrelationHeatmapPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/correlation" element={<CorrelationHeatmapPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;