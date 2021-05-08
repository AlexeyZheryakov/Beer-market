import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import Api, { IBeerDTO } from 'Api/beer';
import { IStore } from 'redux/types';
import { createAction, createActionWithPayload } from 'redux/utils';

export const SET_BEER_DETAILS_ACTION_NAME = 'SET_BEER_DETAILS_ACTION_NAME';
export const START_GETTING_BEER_DETAILS_ACTION_NAME = 'START_GETTING_BEER_DETAILS_ACTION_NAME';
export const ERROR_GETTING_BEER_DETAILS_ACTION_NAME = 'ERROR_GETTING_BEER_DETAILS_ACTION_NAME';

export const startGettingBeerDetailsction = () => createAction(START_GETTING_BEER_DETAILS_ACTION_NAME);

export const errorGettingBeerDetailsction = () => createAction(ERROR_GETTING_BEER_DETAILS_ACTION_NAME);

export const setBeerDetailsAction = (details: IBeerDTO) =>
  createActionWithPayload(SET_BEER_DETAILS_ACTION_NAME, { details });

export const getBeerDetails = (id: string): ThunkAction<void, IStore, unknown, AnyAction> => async (dispatch) => {
  // до начала процесса получения данных запускаем экшен старта
  dispatch(startGettingBeerDetailsction());
  try {
    const { data } = await Api.getBeerDetails(id);
    const item = data[0];
    // setTimeout нужен что бы замедлить получения данных для отображения загрузки
    setTimeout(() => {
      dispatch(setBeerDetailsAction(item));
    }, 2000);
  } catch (error) {
    // если ошибка сервера - то диспатчим экшен с ошибкой
    dispatch(errorGettingBeerDetailsction());
  }
};
