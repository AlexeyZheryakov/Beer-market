const config = (props: string = '') => {
  const obj = {
    lightBeer: {
      abv_lt: '3',
    },
    regularBeer: {
      abv_gt: '3',
      abv_lt: '6',
    },
    strongBeer: {
      abv_gt: '6',
      abv_lt: '20',
    },
    veryStrongBeer: {
      abv_gt: '20',
    },
    americanLightLager: {
      ibu_gt: '8',
      ibu_lt: '12',
    },
    scottishAle: {
      ibu_gt: '10',
      ibu_lt: '20',
    },
    porter: {
      ibu_gt: '20',
      ibu_lt: '40',
    },
    englishBitter: {
      ibu_gt: '30',
      ibu_lt: '40',
    },
    stout: {
      ibu_gt: '30',
      ibu_lt: '50',
    },
    indiaPaleAle: {
      ibu_gt: '60',
      ibu_lt: '80',
    },
    barleywine: {
      ibu_gt: '70',
      ibu_lt: '100',
    },
    doubleOrImperial: {
      ibu_gt: '80',
      ibu_lt: '100',
    },
    pale: {
      ebc_lt: '5',
    },
    lightBlond: {
      ebc_gt: '5',
      ebc_lt: '7',
    },
    blond: {
      ebc_gt: '7',
      ebc_lt: '11',
    },
    yellow: {
      ebc_gt: '11',
      ebc_lt: '15',
    },
    gold: {
      ebc_gt: '15',
      ebc_lt: '20',
    },
    amber: {
      ebc_gt: '20',
      ebc_lt: '38',
    },
    copper: {
      ebc_gt: '38',
      ebc_lt: '46',
    },
    darkCopper: {
      ebc_gt: '46',
      ebc_lt: '68',
    },
    brown: {
      ebc_gt: '68',
      ebc_lt: '78',
    },
    darkBrown: {
      ebc_gt: '78',
    },
    search: {
      beer_name: props,
    },
  };
  return obj;
};

export default config;
