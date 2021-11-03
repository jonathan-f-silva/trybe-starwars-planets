import React from 'react';
import './App.css';
import SWPlanetsTable from './components/SWPlanetsTable';
import SWPlanetsProvider from './context/SWPlanetsProvider';

function App() {
  return (
    <SWPlanetsProvider>
      <SWPlanetsTable />
    </SWPlanetsProvider>
  );
}

export default App;
