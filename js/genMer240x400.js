let ads240x400Items = [
  {
    image: "img/mer240x400/1.png",
    text: "",
    link: "https://oper.ru"
  },
  {
    image: "img/mer240x400/3.png",
    text: "",
    link: "https://internat.msu.ru/"
  },
  {
    image: "img/mer240x400/2.png",
    text: "",
    link: "https://www.rossetivolga.ru/ru/o_kompanii/filiali/filial_oao__mrsk_volgi_____mordovenergo_/"
  },
  {
    image: "img/mer240x400/5.png",
    text: "",
    link: "https://synergy.ru/abiturientam/faculties/cybersport"
  },
  {
    image: "img/mer240x400/4.png",
    text: "",
    link: "https://mos.ru"
  },
  {
    image: "img/mer240x400/6.png",
    text: "",
    link: "https://россия.рф"
  },
];


function randint(max) {
  return Math.floor(Math.random() * max);
}

const rightMerBlock = 5;
for(let i = 1; i <= rightMerBlock; i++) {
  let j = randint(ads240x400Items.length);
  let textBanner;
  if(i == rightMerBlock) {
    textBanner = `<a id="mer240x400_${i}" class="mer240x400" href ="${ads240x400Items[j].link}" style="background-image: url(${ads240x400Items[j].image});">${ads240x400Items[j].text}</a>
    `;
  } else {
    // textBanner = `<a id="mer240x400_${i}" href="${ads240x400Items[j].link}" class="mer240x400" style="padding-bottom:32px;">
    //   <img id="mer240x400IMG_${i}" class="mer240x400IMG" src="${ads240x400Items[j].image}">
    // </a>
    // `;
    textBanner = `<a id="mer240x400_${i}" class="mer240x400" href ="${ads240x400Items[j].link}" style="margin-bottom:32px; background-image: url(${ads240x400Items[j].image});">${ads240x400Items[j].text}</a>
    `;
  }

  let banner = document.querySelector('#contentRight');
  banner.insertAdjacentHTML("beforeend", textBanner);
}