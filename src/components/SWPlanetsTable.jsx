import React, { useContext } from 'react';

import SWPlanetsContext, { EXCLUDED_COLUMNS, NUMERIC_SELECTORS }
  from '../context/SWPlanetsContext';
import useColumns from '../hooks/useColumns';

export default function SWPlanetsTable() {
  const { data, filters } = useContext(SWPlanetsContext);
  const columns = useColumns();

  const compareNumericValues = (a, b, comparison) => {
    switch (comparison) {
    case 'maior que':
      return Number(a) > Number(b);
    case 'menor que':
      return Number(a) < Number(b);
    case 'igual a':
      return Number(a) === Number(b);
    default:
      return true;
    }
  };

  const sortPlanets = (planets, { column, sort }) => {
    if (NUMERIC_SELECTORS.includes(column)) {
      return [...planets].sort((a, b) => {
        if (sort === 'ASC') {
          return Number(a[column]) - Number(b[column]);
        }
        return Number(b[column]) - Number(a[column]);
      });
    }
    return [...planets].sort((planetA, planetB) => {
      const REVERSE = -1;
      const STAY = 1;
      if (sort === 'ASC') {
        return planetA[column] > planetB[column] ? STAY : REVERSE;
      }
      return planetA[column] > planetB[column] ? REVERSE : STAY;
    });
  };

  const filteredPlanets = Object.entries(filters)
    .reduce((filtered, [filter, options]) => {
      switch (filter) {
      case 'filterByName':
        return filtered.filter(({ name }) => (
          name.toLowerCase().includes(options.name.toLowerCase())
        ));
      case 'filterByNumericValues':
        return filtered.filter((planet) => (
          options.every(({ column, comparison, value }) => (
            compareNumericValues(planet[column], value, comparison)
          ))
        ));
      case 'order': {
        return sortPlanets(filtered, options);
      }
      default:
        return filtered;
      }
    }, data);

  return filteredPlanets.length > 0 && (
    <table>
      <thead>
        <tr>
          { columns.map((key) => <th key={ key }>{key}</th>) }
        </tr>
      </thead>
      <tbody>
        { filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            { Object.entries(planet).map(
              ([key, value]) => {
                if (!EXCLUDED_COLUMNS.includes(key)) {
                  return key === 'name'
                    ? <td data-testid="planet-name" key={ value }>{value}</td>
                    : <td key={ value }>{value}</td>;
                }
                return null;
              },
            ) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
