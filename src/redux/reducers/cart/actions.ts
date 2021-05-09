import { ICartBeer } from 'redux/types';
import { createAction, createActionWithPayload } from 'redux/utils';

export const ADD_BEER_TO_CART_ACTION_NAME = 'ADD_BEER_TO_CART_ACTION_NAME';

export const addBeerToCartAction = (cartBeer: ICartBeer) =>
  createActionWithPayload(ADD_BEER_TO_CART_ACTION_NAME, { cartBeer });
