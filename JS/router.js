import { initEditor } from "./js-views/editor.js";
import { initHome } from "./js-views/home.js";
import { initThumbnail } from "./js-views/thumbnail.js";

/**
 * variable de config des routes
 */
const routeConfig = {
  routes: [
    {
      path: "/thumbnail",
      initialisation: initThumbnail,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: initHome,
      templateUrl: "/view/home.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/vues/templateQuiExistePasSurLeServeur.html",
    },
    {
      path: /\/editor(\/(?<id>\d*))?/,
      initialisation: initEditor,
      templateUrl: "/view/editor.html",
    },
  ],
};

class Router {
  #currentRoute;
  #params = {};
  get params() {
    return this.#params;
  }
  get currentRoute() {
    return this.#currentRoute;
  }
  constructor() {
    document.addEventListener("DOMContentLoaded", (evt) => {
      this.#initRouterLinks();
    });
  }
  //set currentRoute(value){this.#currentRoute=value}
  /**
   * manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
    this.#currentRoute = routeConfig.routes.find((route) => {
      if (route.path instanceof RegExp) {
        const regReturn = route.path.exec(pathName);
        if (null !== regReturn) {
          //ca a match
          this.#params = { ...regReturn.groups };
          return true;
        } else return false;
      } else {
        return route.path === pathName;
      }
    });

    this.#instanciateCurrentRouteTemplate();
  }
  /**
   *
   * @param {string} pathName chemin commencant par /
   */
  changeRoute(pathName) {
    history.pushState(undefined, undefined, pathName);
    this.handleRoute();
  }
  /**
   * initialise le contenu de templateText si non présent
   * et déclenche le chargement DOM du contenu
   */
  #instanciateCurrentRouteTemplate() {
    if (undefined !== this.#currentRoute.templateText) {
      this.#loadCurrentDOMContent();
    } else {
      fetch(this.#currentRoute.templateUrl)
        .then((resp) => resp.text())
        .then((t) => {
          this.#currentRoute.templateText = t;
          this.#loadCurrentDOMContent();
        });
    }
  }
  /**
   * chargement du contenu text/html de la vue dans le noeud du selecteur en parametre
   * @param {string} domContainerSelector css selecteur du noeud a charger dans la vue
   */
  #loadCurrentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
    this.#initRouterLinks(domContainerSelector);
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }
  #initRouterLinks(baseSelector = "body") {
    const links = document.querySelectorAll(baseSelector + " a");
    links.forEach((link) => {
      link.removeEventListener("click", this.#handleLinkEvent);
      link.addEventListener("click", this.#handleLinkEvent);
    });
  }
  #handleLinkEvent = (evt) => {
    evt.preventDefault();
    this.changeRoute(evt.target.href);
  };
  /**ajouter le = et => autour du evt ci-dessous transforme la fonction en une fonction faite par nous et pas par le "this" */
}
export const router = new Router();
