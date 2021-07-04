import {CHANGE_BACKGROUND_COLOR} from './ChangeBackground.type';

const initialState = [{backgroundColor: 'red'}];

const changeBackgroundColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND_COLOR:
      return {
        ...state,

        state: state,
      };
    default:
      return state;
  }
};

export {changeBackgroundColorReducer};
