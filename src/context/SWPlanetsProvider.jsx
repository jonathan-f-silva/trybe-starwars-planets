import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getSWPlanets from '../services/SWPlanetsAPI';
import SWPlanetsContext from './SWPlanetsContext';

export default function SWPlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const handleFilterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  };

  const handleFilterByNumericValues = (filter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ],
    });
  };

  const removeNumericFilter = (filterColumn) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter(({ column }) => column !== filterColumn),
    });
  };

  useEffect(() => { getSWPlanets().then(setData); }, []);

  return (
    <SWPlanetsContext.Provider
      value={ {
        data,
        filters,
        handleFilterByName,
        handleFilterByNumericValues,
        removeNumericFilter,
      } }
    >
      { children }
    </SWPlanetsContext.Provider>
  );
}

SWPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
