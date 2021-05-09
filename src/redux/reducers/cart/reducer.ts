import { ADD_BEER_TO_CART_ACTION_NAME } from 'redux/reducers/cart/actions';
import { IStore, AnyActionWithPayload, ICartBeer } from 'redux/types';

interface IBeerPayload {
  cartBeer: ICartBeer;
}

function beerCartReducer(state: IStore['beerCart'] = { items: [] }, action: AnyActionWithPayload<IBeerPayload>) {
  switch (action.type) {
    case ADD_BEER_TO_CART_ACTION_NAME:
      return { items: [...state.items, action.payload.cartBeer] };

    default:
      return state;
  }
}

export default beerCartReducer;
