import { getParkData, getParkInfoLinks, getInfoLinks } from "./parkService.mjs";
import { introSectionTemplate, mediaCardTemplate} from "./templates.mjs";
import {setHeaderFooterInfo, enableNavigation} from "./setHeaderFooter.mjs"
import "../css/style.css";
import "../css/home.css";


// const parkData = getParkData();
const parkLinkData = getParkInfoLinks();

// intro section 
function setParkIntro (infor) {
  const introSection = document.querySelector(".intro-container");
  introSection.innerHTML = introSectionTemplate(infor);
}



// infor section (cards)
function setParkInfor(data) {
  const inforHtml = data.map(mediaCardTemplate);
  document.querySelector(".infor-container").innerHTML = inforHtml.join("");
};

async function init() {
  const parkData = await getParkData();
  getInfoLinks(parkData.images);
  setHeaderFooterInfo(parkData);
  setParkIntro(parkData);
  setParkInfor(parkLinkData);

}





init();
enableNavigation();
