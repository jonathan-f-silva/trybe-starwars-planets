import React from 'react';
import './App.css';
import SWPlanetsFilters from './components/SWPlanetsFilters';
import SWPlanetsTable from './components/SWPlanetsTable';
import SWPlanetsProvider from './context/SWPlanetsProvider';

function App() {
  return (
    <SWPlanetsProvider>
      <SWPlanetsFilters />
      <SWPlanetsTable />
    </SWPlanetsProvider>
  );
}

export default App;
