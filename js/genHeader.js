let headerItems = [
  {
    text: "Новости",
    href: "/news/"
  },
  {
    text: "Казино",
    href: "/казино/"
  },
  {
    text: "Олимпиады",
    href: "/olymp/"
  },
  {
    text: "Проекты",
    href: "/products/"
  },
  {
    text: "MonoCoin",
    href: "/monocoin/"
  },
  {
    text: "Донат",
    href: "https://www.donationalerts.com/r/ischvo"
  },
  {
    text: "Тупищво",
    href: "/about/"
  },
  {
    text: "Обратная связь",
    href: "/feedback/"
  }
];

function randint(max) {
  return Math.floor(Math.random() * max);
}

function genMyor() {
  if(randint(100) >= 95) {
    return "Мёр";
  } else {
    return "Мер";
  }
}

let headerHTML = `
<header>
  <div id="head">
    <div id="headLeft">
      <a href="">
        <span id="headLogo">
          pcms2.me
        </span>
      </a>
      <a href="https://mos.ru">
        <span id="headTitle">
          Официальный сайт ${genMyor()}а Москвы
        </span>
      </a>
    </div>
    
  </div>
  <ul id="headNav">
`

for(let i = 0; i < headerItems.length; ++i) {
  headerHTML += `
    <li class="headNavItem">
      <a href="${headerItems[i].href}">${headerItems[i].text}</a>
    </li>
  `
}

headerHTML += `
  </ul>
</header>
`

let site = document.querySelector('#root')
site.insertAdjacentHTML("afterbegin", headerHTML)