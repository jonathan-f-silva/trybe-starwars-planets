import React, { useContext } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';
import SWPlanetsFilterNumeric from './SWPlanetsFilterNumeric';

export default function SWPlanetsFilters() {
  const {
    filters,
    handleFilterByName,
    removeNumericFilter,
  } = useContext(SWPlanetsContext);

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
        <div data-testid="filter" key={ column }>
          <span>{`${column} ${comparison} ${value}`}</span>
          <button
            type="button"
            onClick={ () => removeNumericFilter(column) }
          >
            X
          </button>
        </div>
      )) }
    </section>
  );
}
