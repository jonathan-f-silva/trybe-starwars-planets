import React, { useContext } from 'react';

import SWPlanetsContext from '../context/SWPlanetsContext';

export default function SWPlanetsTable() {
  const { data, filters } = useContext(SWPlanetsContext);
  const EXCLUDED_COLUMNS = ['residents'];

  const compareNumericValues = (a, b, comparison) => {
    switch (comparison) {
    case 'maior que':
      return a > b;
    case 'menor que':
      return a < b;
    case 'igual a':
      return a === b;
    default:
      return true;
    }
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
            compareNumericValues(Number(planet[column]), Number(value), comparison)
          ))
        ));
      default:
        return filtered;
      }
    }, data);

  return filteredPlanets.length > 0 && (
    <table>
      <thead>
        <tr>
          { Object.keys(filteredPlanets[0]).map((key) => (
            EXCLUDED_COLUMNS.includes(key) ? null : <th key={ key }>{key}</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            { Object.entries(planet).map(([key, value]) => (
              EXCLUDED_COLUMNS.includes(key) ? null : <td key={ value }>{value}</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
