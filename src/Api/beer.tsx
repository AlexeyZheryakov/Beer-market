import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/';

const Api = {
  // eslint-disable-next-line no-console
  getBeer: () => axios.get(`${BASE_URL}/v2/beers`),
};

export default Api;
