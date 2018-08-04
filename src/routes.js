import Home from './component/Tabs'
import Splash from './component/splash/Splash'
import Login from './components/login/Login'

export const initialRouteId = 'home'
export const Routes = {
  home: { component: Home, title: 'Home', id: 'home' },
  login: { component: Login, title: 'Login', id: 'login' },
  splash: { component: Splash, title: 'Splash', id: 'splash' }
}

export const getRoute = id => Routes[id];
export const getRouteList = () => Object.keys(Routes).map(key => Routes[key]);
export const getInitialRoute = () => getRoute(initialRouteId)
