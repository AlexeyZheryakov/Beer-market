const routes = {
  main: () => '/',
  details: (id = ':id') => `/details/${id}`,
  order: () => '/order',
  cart: () => '/cart',
};

export default routes;
