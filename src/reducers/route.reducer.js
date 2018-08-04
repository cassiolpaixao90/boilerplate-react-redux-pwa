import * as types from "../constants/type.route";
import {initialState} from '../constants/initialState';

export default (state = initialState.init, action) => {
  switch (action.type) {
    case types.ROUTE_SET: {
      return action.routeId
    }
    case types.ROUTE_CLEANUP: {
      return initialState.init
    }
    default: {
      return state
    }
  }
}
