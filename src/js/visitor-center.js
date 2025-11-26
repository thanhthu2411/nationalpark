import { getParkData, getParkVisitorCenterDetails} from "./parkService.mjs";
import { visitorCenterTemplate, centerTitleTemplate, centerInfoTemplate, AddressesTemplate, AmenitiesTemplate, ContactTemplate, DirectionsTemplate, imageGalleryTemplate} from "./templates.mjs";
import {setHeaderFooterInfo} from "./setHeaderFooter.mjs"
import "../css/style.css";
import "../css/visit-center.css";




function getParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}




async function init() {
  const parkData = await getParkData();
  const centerId = getParam("id");
    const centerData = await getParkVisitorCenterDetails(centerId);
    // const data = centerData.
    console.log(centerData);

const mainContainer = document.querySelector("main");
const detailsList = document.querySelector(".vc-details-list");
const galleryContainer = document.querySelector(".vc-gallery");
  
setHeaderFooterInfo(parkData);

mainContainer.insertAdjacentHTML("afterbegin", centerTitleTemplate(centerData));
const h1 = document.querySelector(".vc-name");
h1.insertAdjacentHTML("afterend", centerInfoTemplate(centerData));

// details list
detailsList.insertAdjacentHTML("afterbegin", AddressesTemplate(centerData));
const address = document.querySelector("#vd-addresses");
address.insertAdjacentHTML("afterend", DirectionsTemplate(centerData));
const direction = document.querySelector("#vd-directions");
direction.insertAdjacentHTML("afterend", AmenitiesTemplate(centerData));
detailsList.insertAdjacentHTML("beforeend", ContactTemplate(centerData));

galleryContainer.insertAdjacentHTML("beforeend", imageGalleryTemplate(centerData));
}



init();