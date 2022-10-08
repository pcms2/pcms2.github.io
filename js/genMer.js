let ads120x500Items = [
  {
    image: "/img/mer120x500/1.png",
    link: "https://mos.ru"
  },
  {
    image: "/img/mer120x500/2.png",
    link: "https://mos.ru"
  },
  {
    image: "/img/mer120x500/3.png",
    link: "https://mos.ru"
  },
  {
    image: "/img/mer120x500/4.png",
    link: "https://mos.ru"
  },
  {
    image: "/img/mer120x500/5.png",
    link: "https://rlc.education"
  },
  {
    image: "/img/mer120x500/6.png",
    link: "https://mos.ru"
  },
  {
    image: "/img/mer120x500/7.png",
    link: "https://mos.ru"
  }
];


function randint(max) {
  return Math.floor(Math.random() * max);
}
const leftMerBlock = 2;
for(let i = 1; i <= leftMerBlock; i++) {
  let j = randint(ads120x500Items.length);
  let textBanner;
  if(i == 1) {
    textBanner = `<a id="mer120x500_${i}" href="${ads120x500Items[j].link}" class="mer120x500">
      <img id="mer120x500IMG_${i}" class="mer120x500IMG" src="${ads120x500Items[j].image}">
    </a>
    `;
  } else {
    textBanner = `<a id="mer120x500_${i}" href="${ads120x500Items[j].link}" class="mer120x500" style="padding-bottom:32px;">
      <img id="mer120x500IMG_${i}" class="mer120x500IMG" src="${ads120x500Items[j].image}">
    </a>
    `;
  }

  let banner = document.querySelector('#contentLeft');
  banner.insertAdjacentHTML("afterbegin", textBanner);
}