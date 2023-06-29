import { router } from "./router.js";
import { ressources } from "./metier/Ressources.js";

document.addEventListener("DOMContentLoaded", (evt) => {
  router.handleRoute();
  console.log(router.currentRoute);
});
ressources.loadRessources()
