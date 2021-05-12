import { ADD_BEER_TO_CART_ACTION_NAME } from 'redux/reducers/cart/actions';
import { IStore, AnyActionWithPayload, ICartBeer } from 'redux/types';

interface IBeerPayload {
  cartBeer: ICartBeer;
}

function beerCartReducer(
  state: IStore['beerCart'] = { items: [], selectedIds: {} },
  action: AnyActionWithPayload<IBeerPayload>
) {
  switch (action.type) {
    case ADD_BEER_TO_CART_ACTION_NAME:
      return {
        items: [...state.items, action.payload.cartBeer],
        selectedIds: { ...state.selectedIds, [action.payload.cartBeer.id]: action.payload.cartBeer.count },
      };
    default:
      return state;
  }
}

export default beerCartReducer;
