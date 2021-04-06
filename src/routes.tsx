export const routes = {
    main: () => '/',
    details: (id = ':id') => `/details/${id}`,
    order: () => '/order',
    cart: () => '/cart'
}
