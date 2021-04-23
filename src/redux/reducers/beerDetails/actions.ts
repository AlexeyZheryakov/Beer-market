import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import Api, { IBeerDTO } from 'Api/beer';
import { IStore } from 'redux/types';
import { createAction, createActionWithPayload } from 'redux/utils';

export const SET_DETAILS_BEER_ACTION_NAME = 'SET_DETAILS_BEER_ACTION_NAME';
export const START_GETTING_DETAILS_BEER_ACTION_NAME = 'START_GETTING_DETAILS_BEER_ACTION_NAME';
export const ERROR_GETTING_DETAILS_BEER_ACTION_NAME = 'ERROR_GETTING_DETAILS_BEER_ACTION_NAME';

export const startGettingDetailsBeerAction = () => createAction(START_GETTING_DETAILS_BEER_ACTION_NAME);

export const errorGettingDetailsBeerAction = () => createAction(ERROR_GETTING_DETAILS_BEER_ACTION_NAME);

export const setDetailsBeerAction = (details: IBeerDTO) =>
  createActionWithPayload(SET_DETAILS_BEER_ACTION_NAME, { details });

export const getDetailsBeer = (id: string): ThunkAction<void, IStore, unknown, AnyAction> => async (dispatch) => {
  // до начала процесса получения данных запускаем экшен старта
  dispatch(startGettingDetailsBeerAction());
  try {
    const { data } = await Api.getDetailsBeer(id);
    const item = data[0];
    // setTimeout нужен что бы замедлить получения данных для отображения загрузки
    setTimeout(() => {
      dispatch(setDetailsBeerAction(item));
    }, 2000);
  } catch (error) {
    // если ошибка сервера - то диспатчим экшен с ошибкой
    dispatch(errorGettingDetailsBeerAction());
  }
};
