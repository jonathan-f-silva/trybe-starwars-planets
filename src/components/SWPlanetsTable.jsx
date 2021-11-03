import React, { useContext } from 'react';

import SWPlanetsContext from '../context/SWPlanetsContext';

export default function SWPlanetsTable() {
  const { data } = useContext(SWPlanetsContext);
  const EXCLUDED_COLUMNS = ['residents'];
  return data.length > 0 && (
    <table>
      <thead>
        <tr>
          { Object.keys(data[0]).map((key) => (
            EXCLUDED_COLUMNS.includes(key) ? null : <th key={ key }>{key}</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { data.map((planet) => (
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
