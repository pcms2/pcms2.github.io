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
    text: "Проекты",
    href: "/products/"
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
    <div id="headLeft">
      <a href="">
        <span id="headLogo">
          pcms2.me
        </span>
      </a>
      <a href="https://mos.ru">
        <span id="headTitle">
          Официальный сайт Мера Москвы
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