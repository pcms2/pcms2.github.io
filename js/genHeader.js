let headerItems = [
  {
    text: "Новости",
    href: "/news/"
  },
  {
    text: "Олимпиады",
    href: "/olymp/"
  },
  {
    text: "MonoCoin",
    href: "/monocoin/"
  },
  {
    text: "Донат",
    href: "/donat/"
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

let headerHTML = `
<header>
  <div id="head">
    <a href=""id="headLeft">
      <span id="headLogo">
        pcms2.me
      </span>
      <span id="headTitle">
        Официальный сайт Typuщвo Goblina
      </span>
    </a>
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