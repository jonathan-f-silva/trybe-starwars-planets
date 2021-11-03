const SW_PLANETS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const getSWPlanets = async () => {
  const response = await fetch(SW_PLANETS_API_URL);
  const data = await response.json();
  return data.results;
};

export default getSWPlanets;
