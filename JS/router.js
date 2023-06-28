/**
 * variable de config des routes
 */
const routeConfig = {
  routes: [
    {
        path:'/thumbnail',
        initialisation:undefined,
        templateUrl:'/view/thumbnail.html'
    },
    {
        path:'/',
        initialisation:undefined,
        templateUrl:'/vie/home.html'
    },
    {
        path:'/break',
        initialisation:undefined,
        templateUrl:'/vues/templateQuiExistePasSurLeServeur.html'
    }
    
  ],
};

class Router {
   #currentRoute
  /**
   * manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
  }
  /**
   *
   * @param {string} pathName chemin commencant par /
   */
  changeRoute(pathName) {}
}
const router = new Router();
router.handleRoute();
router.changeRoute("/chemin");
