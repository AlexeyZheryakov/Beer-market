const routes = {
  main: () => '/',
  category: (category = ':category') => `/${category}`,
  details: (id = ':id', category: string = ':category') => `/${category}/details/${id}`,
  order: (category: string = ':category') => `/${category}/order`,
  cart: (category: string = ':category') => `/${category}/cart`,
};

export default routes;
