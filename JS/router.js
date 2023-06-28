/**
 * variable de config des routes
 */
const routeConfig = {
  routes: [
    {
      path: "/thumbnail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: () => {
        document.querySelector("#home button").addEventListener("click", () => {
          alert("clické");
        });
      },
      templateUrl: "/view/home.html",
      templateText:
        '\
      <div id="home">\
        <button type="button" class="btn btn-primary">benjamin</button>\
        </div>',
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/vues/templateQuiExistePasSurLeServeur.html",
    },
  ],
};

class Router {
  #currentRoute;
  get currentRoute() {
    return this.#currentRoute;
  }
  //set currentRoute(value){this.#currentRoute=value}
  /**
   * manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
    this.#currentRoute = routeConfig.routes.find(
      (route) => route.path === pathName
    );
    this.#loadCurrentDOMContent();
  }
  /**
   *
   * @param {string} pathName chemin commencant par /
   */
  changeRoute(pathName) {}
  /**
   * chargement du contenu text/html de la vue dans le noeud du selecteur en parametre
   * @param {string} domContainerSelector css selecteur du noeud a charger dans la vue
   */
  #loadCurrentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
      if(undefined!==this.#currentRoute.initialisation){
        this.#currentRoute.initialisation()
      }
  }
}
export const router = new Router();
