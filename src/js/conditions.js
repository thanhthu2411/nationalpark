import { getParkData, getAlerts, getVisitorCenter, getActivity } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, activitiesTemplate} from "./templates.mjs";
import {setHeaderFooterInfo} from "./setHeaderFooter.mjs"
import "../css/style.css";
import "../css/conditions.css";

//alerts

function setAlerts(data) {
    const alertSection = document.querySelector("#alerts-container > ul");
    const alertHtml = data.map(alertTemplate);
    alertSection.innerHTML = alertHtml.join("");
}

function setVisitorCenter(data) {
    const visitorSection = document.querySelector("#visitors-container details ul");
    const visitortHtml = data.map(visitorCenterTemplate);
    visitorSection.innerHTML = visitortHtml.join("");
}

function setActivity(data) {
    const activitySection = document.querySelector("#activities-container details ul");
    const activityHtml = data.map(activitiesTemplate);
    activitySection.innerHTML = activityHtml.join("");

}


async function init() {
  const parkData = await getParkData();
  const alertData = await getAlerts();
  const visitorCenterData = await getVisitorCenter();
  const activityData = await getActivity();

  setHeaderFooterInfo(parkData);
  setAlerts(alertData);
  setVisitorCenter(visitorCenterData);
  setActivity(activityData);
}



init();
