import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import Api, { IBeerDTO, TBeerListParams } from 'Api/beer';
import { IStore } from 'redux/types';
import { createAction, createActionWithPayload } from 'redux/utils';

export const ADD_BEER_LIST_ACTION_NAME = 'ADD_BEER_LIST_ACTION';
export const SET_BEER_LIST_ACTION_NAME = 'SET_BEER_LIST_ACTION';
export const START_GETTING_BEER_LIST_ACTION_NAME = 'START_GETTING_BEER_LIST_ACTION_NAME';
export const ERROR_GETTING_BEER_LIST_ACTION_NAME = 'ERROR_GETTING_BEER_LIST_ACTION_NAME';

export const startGettingBeerListAction = () => createAction(START_GETTING_BEER_LIST_ACTION_NAME);

export const errorGettingBeerListAction = () => createAction(ERROR_GETTING_BEER_LIST_ACTION_NAME);

export const setBeerListAction = (list: IBeerDTO[]) => createActionWithPayload(SET_BEER_LIST_ACTION_NAME, { list });
export const addBeerListAction = (list: IBeerDTO[]) => createActionWithPayload(ADD_BEER_LIST_ACTION_NAME, { list });

export const getBeerList = (props: TBeerListParams): ThunkAction<void, IStore, unknown, AnyAction> => async (
  dispatch
) => {
  // до начала процесса получения данных запускаем экшен старта
  dispatch(startGettingBeerListAction());
  try {
    const { data } = await Api.getBeer(props);
    // setTimeout нужен что бы замедлить получения данных для отображения загрузки
    setTimeout(() => {
      dispatch(setBeerListAction(data));
    }, 2000);
  } catch (error) {
    // если ошибка сервера - то диспатчим экшен с ошибкой
    dispatch(errorGettingBeerListAction());
  }
};

export const getNewPageBeerList = (props: TBeerListParams): ThunkAction<void, IStore, unknown, AnyAction> => async (
  dispatch
) => {
  try {
    const { data } = await Api.getBeer(props);
    dispatch(addBeerListAction(data));
  } catch (error) {
    dispatch(errorGettingBeerListAction());
  }
};
