export class Meme {
  titre = "";
  text = "";
  x = 0;
  y = 50;
  imageId = -1;
  fontSize = 30;
  fontWeight = "500";
  underline = false;
  italic = false;
  color = "#000000";
  static render(meme, cssSelector, img) {
    const svg = document.querySelector(cssSelector + " svg");
    svg.setAttribute(
      "viewBox",
      `0 0 ${undefined !== img ? img.w : 500} ${
        undefined !== img ? img.h : 500
      }`
    );
    const imgElement = svg.querySelector("image");
    const textElement = svg.querySelector("text");
    
    imgElement.setAttribute("xlink:href", undefined !== img ? img.url : "");

    textElement.innerHTML = meme.text;
    textElement.style.fill = meme.color;
    textElement.style.fontSize = meme.fontSize;
    textElement.setAttribute("x", meme.x);
    textElement.setAttribute("y", meme.y);
  }
}
