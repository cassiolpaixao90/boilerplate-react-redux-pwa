export const ROUTE_SET = 'ROUTE_SET'
export const ROUTE_CLEANUP = 'ROUTE_CLEANUP'

export const setRoute = routeId => {
  return {
    type: ROUTE_SET,
    routeId
  }
}

export const cleanupRoute = () => {
  return {
    type: ROUTE_CLEANUP
  }
}
