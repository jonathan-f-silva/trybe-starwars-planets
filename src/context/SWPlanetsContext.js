import { createContext } from 'react';

export const NUMERIC_SELECTORS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

export const EXCLUDED_COLUMNS = ['residents'];

const SWPlanetsContext = createContext();

export default SWPlanetsContext;
