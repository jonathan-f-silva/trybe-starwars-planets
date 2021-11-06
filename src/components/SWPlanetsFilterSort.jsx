import React, { useContext, useState } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';
import useColumns from '../hooks/useColumns';

function SWPlanetsFilterSort() {
  const columns = useColumns();
  const { filters, handleFilterSort } = useContext(SWPlanetsContext);
  const [column, setColumn] = useState(filters.order.column);
  const [sort, setSort] = useState(filters.order.sort);
  return (
    <div>
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{ columnOption }</option>
        ))}
      </select>
      <div>
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          checked={ sort === 'ASC' }
          onChange={ ({ target: { value } }) => setSort(value) }
        />
        ASC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          checked={ sort === 'DESC' }
          onChange={ ({ target: { value } }) => setSort(value) }
        />
        DESC
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => handleFilterSort({ column, sort }) }
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default SWPlanetsFilterSort;
