import { useContext } from 'react';
import SWPlanetsContext, { EXCLUDED_COLUMNS } from '../context/SWPlanetsContext';

export default function useColumns() {
  const { data } = useContext(SWPlanetsContext);

  return Object.keys(data[0] || {})
    .filter((column) => !EXCLUDED_COLUMNS.includes(column));
}
