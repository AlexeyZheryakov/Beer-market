const paths = {
  main: (category = ':category') => `/${category}`,
  details: (id = ':id', category = ':category') => `/${category}/details/${id}`,
  order: (category = ':category') => `/${category}/order`,
  cart: (category = ':category') => `/${category}/cart`,
};

export default paths;
