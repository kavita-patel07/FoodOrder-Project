import axios from "axios";
import {
  All_RESTAURANTS_REQUESTS,
  All_RESTAURANTS_SUCCESS,
} from "../constants/restaurantConstant";

export const getRestaurants = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: All_RESTAURANTS_REQUESTS });
      let link = `/api/v1/eats/stores`;
      await axios.get(link);
      const { data } = await axios.get(link);
      console.log(data);
      const { restaurants, count } = data;
      dispatch({
        type: All_RESTAURANTS_SUCCESS,
        payload: { restaurants, count },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
