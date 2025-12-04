import {footerTemplate, parkInfoTemplate } from "./templates.mjs";
import { enableNavigation } from "./navigation.mjs";

//header section
export function setHeaderFooterInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerText = data.fullName;

  // page title
  document.title = data.fullName;

  // hero image
  const heroImg = document.querySelector(".banner > img");
  heroImg.alt = data.images[0].altText;
  heroImg.src = data.images[0].url;

  const parkInfo = parkInfoTemplate(data);
  document.querySelector(".banner-infor").innerHTML = parkInfo;

  //footer
    const footerHtml = footerTemplate(data);
  document.querySelector("#park-footer").innerHTML = footerHtml;

  enableNavigation();

}



