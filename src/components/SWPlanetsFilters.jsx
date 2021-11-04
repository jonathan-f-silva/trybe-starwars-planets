import React, { useContext } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';

export default function SWPlanetsFilters() {
  const { filters, handleFilterByName } = useContext(SWPlanetsContext);
  return (
    <section className="sw-planets-filters">
      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ ({ target: { value } }) => handleFilterByName(value) }
        placeholder="Filtre pelo nome"
      />
    </section>
  );
}
