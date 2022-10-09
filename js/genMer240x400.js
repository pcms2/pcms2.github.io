let ads240x400Items = [
  {
    image: "img/mer240x400/1.png",
    text: "",
    link: "https://oper.ru"
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