import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerText = parkData.fullName;


// page title
document.title = parkData.fullName;

// banner infor
function parkInfoTemplate(infor) {
    return `<a href="#" class="banner-title">${infor.name}</a>
            <div class="banner-subtitle">
              <span>${infor.designation}</span>
              <span>${infor.states}</span>`
}

const parkInfo = parkInfoTemplate(parkData);
document.querySelector(".banner-infor").innerHTML = parkInfo;

// hero image
const heroImg = document.querySelector(".banner > img");
heroImg.alt = parkData.images[0].altText;
heroImg.src = parkData.images[0].url;

