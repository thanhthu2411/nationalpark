import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { introSectionTemplate, mediaCardTemplate} from "./templates.mjs";
import setHeaderFooterInfo from "./setHeaderFooter.mjs"


const parkData = getParkData();
const parkLinkData = getParkInfoLinks();

// header & footer section
setHeaderFooterInfo(parkData);


// intro section 

function setParkIntro (infor) {
  const introSection = document.querySelector(".intro-container");
  introSection.innerHTML = introSectionTemplate(infor);
}

setParkIntro(parkData);


// infor section (cards)

function setParkInfor(data) {
  const inforHtml = data.map(mediaCardTemplate);
  document.querySelector(".infor-container").innerHTML = inforHtml.join("");
};

setParkInfor(parkLinkData);



