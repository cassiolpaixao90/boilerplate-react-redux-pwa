import * as types from "../constants/type.route";
import initialReducer from './initial.reducer';

export default (state = initialReducer.initState, action) => {
  switch (action.type) {
    case types.ROUTE_SET: {
      return action.routeId
    }
    case types.ROUTE_CLEANUP: {
      return initialReducer.initState
    }
    default: {
      return state
    }
  }
}
