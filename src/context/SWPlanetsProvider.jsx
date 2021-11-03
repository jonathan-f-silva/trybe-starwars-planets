import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getSWPlanets from '../services/SWPlanetsAPI';
import SWPlanetsContext from './SWPlanetsContext';

export default function SWPlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => { getSWPlanets().then(setData); }, []);

  return (
    <SWPlanetsContext.Provider
      value={ {
        data,
      } }
    >
      { children }
    </SWPlanetsContext.Provider>
  );
}

SWPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
