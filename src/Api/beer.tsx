import axios from 'axios';

const Api = {
  getBeer: () => axios.get('https://api.punkapi.com/v2/beers').then((response) => console.log(response)),
};

export default Api;
