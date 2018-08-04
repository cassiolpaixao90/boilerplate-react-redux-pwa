import * as types from "../constants/type.route";


export const setRoute = routeId => {
  return {
    type: types.ROUTE_SET,
    routeId
  }
}

export const cleanupRoute = () => {
  return {
    type: types.ROUTE_CLEANUP
  }
}
