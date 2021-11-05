import React, { useContext, useState } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';

export default function SWPlanetsFilterNumeric() {
  const { filters, handleFilterByNumericValues } = useContext(SWPlanetsContext);

  // create selector list based on unused filters
  const NUMERIC_SELECTORS = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ].filter((selector) => !filters.filterByNumericValues
    .some(({ column }) => column === selector));

  const COMPARISON_SELECTORS = ['maior que', 'menor que', 'igual a'];
  const [column, setColumn] = useState(NUMERIC_SELECTORS[0]);
  const [comparison, setComparison] = useState(COMPARISON_SELECTORS[0]);
  const [numericValue, setNumericValue] = useState(0);

  const addFilter = () => {
    handleFilterByNumericValues(
      { column, comparison, value: numericValue },
    );
    setColumn(NUMERIC_SELECTORS[0]);
  };

  return (
    <div>
      <select
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {NUMERIC_SELECTORS.map((option) => (
          <option key={ option }>{option}</option>
        ))}
      </select>
      <select
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        {COMPARISON_SELECTORS.map((option) => (
          <option key={ option }>{option}</option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numericValue }
        onChange={ ({ target: { value } }) => setNumericValue(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Filtrar
      </button>
    </div>
  );
}
