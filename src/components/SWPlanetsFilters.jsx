import React, { useContext } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';
import SWPlanetsFilterNumeric from './SWPlanetsFilterNumeric';

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
      <SWPlanetsFilterNumeric />
      { filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column }>
          {`${column} ${comparison} ${value}`}
        </div>
      )) }
    </section>
  );
}
