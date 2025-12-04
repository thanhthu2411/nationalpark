import spritePath from "../images/sprite.symbol.svg";

// banner infor
export function parkInfoTemplate(infor) {
  return `<a href="#" class="banner-title">${infor.name}</a>
            <div class="banner-subtitle">
              <span>${infor.designation}</span>
              <span>${infor.states}</span>`;
}

// intro section
export function introSectionTemplate(infor) {
  return `<h1>${infor.fullName}</h1>
        <p>${infor.description}</p>
`;
}

// infor section (cards)
export function mediaCardTemplate(info) {
  return `<div class="media-card">
            <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}" class="media-card-img">
          <h3 class="media-card-title">${info.name}</h3>
          </a>
          <p> ${info.description}</p>
  </div>
  `;
}

// footer
function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers) {
  const voicePhone = phoneNumbers.find((number) => number.type === "Voice");
  return voicePhone.phoneNumber;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
  </section>`;
}

// alert
export function alertTemplate(alert) {
  let svgId = "";

  if (alert.category === "Park Closure") {
    svgId = "alert-closure";
  } else {
    svgId = `alert-${alert.category.toLowerCase()}`;
  }

  return `<li class="alert">
        <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="/images/sprite.symbol.svg#${svgId}"></use></svg>
        <div>
          <h3 class="${svgId}">${alert.title}</h3>
          <p>${alert.description}</p>
        </div>
    </li>
  `;
}

export function visitorCenterTemplate(center) {
  return `<li class="center">
            <h3><a href="visitor-center.html?id=${center.id}">${center.name}</a></h3>
            <p>${center.description}</p>
            <p>${center.directionsInfo}</p>
      </li>
    `;
}

export function activitiesTemplate(activity) {
  return `<li class="activity">
            <p>${activity.name}</p>
        </li>`;
}

// visitor-center.html

export function centerTitleTemplate(center) {
  return `<h1 class="vc-name">
            <svg class="icon" role="presentation" focusable="false">
              <use xlink:href="/images/sprite.symbol.svg#ranger-station"></use>
            </svg>
            ${center.name}
        </h1>`;
}

export function centerInfoTemplate(center) {
  const images = center.images[0];
  return `<section class="vc-info">
            <figure>
                <img src="${images.url}" alt="${images.altText}">
                <figcaption>
                        ${images.caption} <span>${images.credit}</span>
                </figcaption>
            </figure>
            <p>${center.description}</p>
        </section>`;
}

export function AddressesTemplate(center) {
  const physical = center.addresses[0];
  let html = "";

  html += `<details name="vc-details" id="vd-addresses">
                <summary>
                    <svg class="icon" role="presentation" focusable="false">
                        <use xlink:href="/images/sprite.symbol.svg#heading-icon_map-pin"></use>
                    </svg>
                    Addresses
                </summary>

                <section class="vc-addresses__physical">
                    <h3>Physical Address</h3>
                    <address> ${physical.line1}<br />
                        ${physical.city}, ${physical.stateCode} ${physical.postalCode}</address>
                </section>`;

  if (center.addresses[1]) {
    const mailing = center.addresses[1];

    html += `
        <section class="vc-addresses__mailing">
            <h3>Mailing Address</h3>
            <address>${mailing.line1}<br />
                ${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</address>
        </section>
    `;
  }

  html += `
    </details>
  `;

  return html;
}

export function DirectionsTemplate(center) {

  return `<details name="vc-details" id="vd-directions">
                <summary>
                    <svg class="icon" role="presentation" focusable="false">
                        <use xlink:href="/images/sprite.symbol.svg#directions"></use>
                    </svg>
                    Directions
                </summary>
                <p>${center.directionsInfo}</p>
            </details>`
}


export function AmenitiesTemplate(center) {
    let liHtml = "";

    for (const amenity of center.amenities)
    {
      liHtml += `<li>${amenity}</li>`
    }

    return `<details name="vc-details" id="vd-amenities">
                <summary>
                    <svg class="icon" role="presentation" focusable="false">
                        <use xlink:href="/images/sprite.symbol.svg#heading-icon_info"></use>
                    </svg>
                    Amenities
                </summary>
                <ul>
                    ${liHtml}
                </ul>
            </details>`
}

export function ContactTemplate(center) {
  return `<details name="vc-details" id="vd-contact">
                <summary>
                    <svg class="icon" role="presentation" focusable="false">
                        <use xlink:href="/images/sprite.symbol.svg#phone"></use>
                    </svg>
                    Contact Information
                </summary>
                <section class="vc-contact__email">
                    <h3>Email</h3>
                    <a href="${center.contacts.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
                </section>
                <section class="vc-contact__phone">
                    <h3>Phone numbers</h3>
                    <a href="tel:+1${center.contacts.phoneNumbers[0].phoneNumber}">${center.contacts.phoneNumbers[0].phoneNumber}</a>
                </section>
            </details>`
}

export function imageGalleryTemplate(center) {
    let liHtml = "";

    for (const img of center.images)
    {
      liHtml += `<li><img src="${img.url}" alt="${img.altText}"></li>`
    }

    return `<ul>${liHtml}</ul>`

}























// export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
//   return `<details name="vc-details" id="${elementId}">
//             <summary>
//             ${iconTemplate(iconId)}
//             ${summaryText}
//             </summary>
//             ${content}
//           </details>`;
// }

// export function iconTemplate(iconId) {
//   return `<svg class="icon" role="presentation" focusable="false">
//             <use
//             xmlns:xlink="http://www.w3.org/1999/xlink"
//             xlink:href="/images/sprite.symbol.svg#${iconId}"
//             ></use>
//           </svg>`;
// }

// export function listTemplate(data, contentTemplate) {
//   const html = data.map(contentTemplate);
//   return `<ul>${html.join("")}</ul>`;
// }
