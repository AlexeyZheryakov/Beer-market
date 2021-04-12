export const createAction = (type: string) => ({ type });

export const createActionWithPayload = <T>(type: string, payload: T) => ({ type, payload });

export default { createActionWithPayload };
