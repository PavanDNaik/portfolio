
import jsx from "../assets/jsx.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import json from "../assets/json.svg";
import readme from "../assets/readme.svg";

export function getImg(type) {
  if (type == "jsx") {
    return jsx;
  }
  if (type == "css") {
    return css;
  }
  if (type == "html") {
    return html;
  }
  if (type == "json") {
    return json;
  }
  if (type == "md") {
    return readme;
  }
}
