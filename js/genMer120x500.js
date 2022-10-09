let ads120x500Items = [
  {
    image: "img/mer120x500/1.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer120x500/2.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer120x500/3.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer120x500/4.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer120x500/5.png",
    text: "*Признана экстремистской организацией на территории тупищво гоблина",
    link: "https://rlc.education"
  },
  {
    image: "img/mer120x500/6.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer120x500/7.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer120x500/8.png",
    text: "",
    link: "https://rlc-rm.gosuslugi.ru"
  },
  {
    image: "img/mer120x500/9.png",
    text: "",
    link: "https://rlc-rm.gosuslugi.ru"
  },
];


function randint(max) {
  return Math.floor(Math.random() * max);
}

const leftMerBlock = 2;
for(let i = 1; i <= leftMerBlock; i++) {
  let j = randint(ads120x500Items.length);
  let textBanner;
  if(i == 1) {
    textBanner = `<a id="mer120x500_${i}" class="mer120x500" href ="${ads120x500Items[j].link}" style="background-image: url(${ads120x500Items[j].image});">${ads120x500Items[j].text}</a>
    `;
  } else {
    // textBanner = `<a id="mer120x500_${i}" href="${ads120x500Items[j].link}" class="mer120x500" style="padding-bottom:32px;">
    //   <img id="mer120x500IMG_${i}" class="mer120x500IMG" src="${ads120x500Items[j].image}">
    // </a>
    // `;
    textBanner = `<a id="mer120x500_${i}" class="mer120x500" href ="${ads120x500Items[j].link}" style="margin-bottom:32px; background-image: url(${ads120x500Items[j].image});">${ads120x500Items[j].text}</a>
    `;
  }

  let banner = document.querySelector('#contentLeft');
  banner.insertAdjacentHTML("afterbegin", textBanner);
}