
// banner infor
export function parkInfoTemplate(infor) {
    return `<a href="#" class="banner-title">${infor.name}</a>
            <div class="banner-subtitle">
              <span>${infor.designation}</span>
              <span>${infor.states}</span>`
}


// intro section 
export function introSectionTemplate(infor) {
  return `<h1>${infor.fullName}</h1>
        <p>${infor.description}</p>
`
};


// infor section (cards)
export function mediaCardTemplate(info) {
  return `<div class="media-card">
            <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}" class="media-card-img">
          <h3 class="media-card-title">${info.name}</h3>
          </a>
          <p> ${info.description}</p>
  </div>
  `
};

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
  const voice = getVoicePhone(info.contacts.phoneNumbers)
  
  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
  </section>`;
}