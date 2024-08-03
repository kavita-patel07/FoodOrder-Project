import {
  All_RESTAURANTS_REQUESTS,
  All_RESTAURANTS_SUCCESS,
} from "../constants/restaurantConstant";

const initialState = {
  restaurant: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case All_RESTAURANTS_REQUESTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case All_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        restaurants: action.payload.restaurants,
      };

    default:
      return state;
  }
};
