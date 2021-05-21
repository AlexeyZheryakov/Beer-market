import { ADD_BEER_TO_CART_ACTION_NAME, REMOVE_BEER_FROM_CART_ACTION_NAME } from 'redux/reducers/cart/actions';
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
    case REMOVE_BEER_FROM_CART_ACTION_NAME: {
      const items = state.items.filter((beer) => beer.id !== action.payload.cartBeer.id);
      const selectedIds = { ...state.selectedIds };
      delete selectedIds[action.payload.cartBeer.id];
      return { ...state, items, selectedIds };
    }
    default:
      return state;
  }
}

export default beerCartReducer;
