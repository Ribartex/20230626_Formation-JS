import REST_ADR, { RESSOURCE_PATH } from "../constantes.js";
export class Ressources {
  #images = [];
  #memes = [];
  #isloaded=false
  get memes() {
    return this.#memes;
  }
  get images() {
    return this.#images;
  }
  get isLoaded() {
    return this.#isloaded
  }
  /**
   * 
   * @param {Function} callback 
   */
  loadRessources(callback) {
    const promiseImage = fetch(REST_ADR + RESSOURCE_PATH.images).then((resp) =>
      resp.json()
    );
    const promiseMemes = fetch(REST_ADR + RESSOURCE_PATH.memes).then((resp) =>
      resp.json()
    );
    Promise.all([promiseImage, promiseMemes])
    .then((array) => {
      console.log(array);
      this.#images.splice(0);
      this.#images.push(...array[0])
      this.#memes.splice(0);
      this.#memes.push(...array[1])
      this.#isloaded=true;
      if(undefined!==callback){callback(this)}
    });

  }
}
export const ressources=new Ressources();