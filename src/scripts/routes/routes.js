import Home from '../view/pages/home';
import Detail from '../view/pages/detail';
import Favorit from '../view/pages/favorit';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorit': Favorit,
  '/detail/:id': Detail,

};

export default routes;
