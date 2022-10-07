let headPanelItems = [
  {
    text: "Проекты",
    prompt: "Наши проекты",
    href: "/projects/"
  },
  {
    text: "Олимпиада",
    prompt: "Олимпиада им. В.И.Ленина",
    href: "/lenin/"
  },
  {
    text: "MonoCoin",
    prompt: "Каминг сун...",
    href: "/monocoin/"
  },
  {
    text: "Помочь рублём",
    prompt: "По личной инциативе и желанию вы всегда можете помочь нашему проекту, безвозмезно или за указанные по ссылке услуги",
    href: "https://www.donationalerts.com/r/ischvo"
  },
  {
    text: "О нас",
    prompt: "О тупищво",
    href: "/about/"
  }
]

let headPanelHTML = `
<ul id="headPanel">
  <li id="logo" class="headPanelItem">
    <a href="/" prompt="На главную!">тупищво</a>
  </li>
`

for(let i = 0; i < headPanelItems.length; i++) {
  headPanelHTML += 
  `  <li id="headPanelHTML_${i}" class="headPanelItem">
      <a href="${headPanelItems[i].href}" prompt="${headPanelItems[i].prompt}">${headPanelItems[i].text}</a>
    </li>
  `
}
headPanelHTML += `
  </ul>
  <hr>
`

let footerHTML = `
<hr>
<div id="footer">
  <p>(c) Интернёт ресурс «тупищво гоблина им. 80-лет Октября»</p>
  <p>Деятельность Meta Platforms Inc. (Facebook и Instagram) запрещена в Российской Федерации.</p>
  <p>Жалобы и рац. предложения принимаются по адресу: 430005, Республика Мордовия, г. Саранск, ул. Московская, д. 38, к. 109.<br>  Получатель: Учащийся 7Б класса, Иннокентий Вилкович Сталин</p>
  <p>MonoCoin не является платёжным средством.</p>
  <p style="font-size: 7px;">Если вы не достигли 18-летия или являетесь (являлись) гражданином недружественной к Российской Федерации страны и (или) являетесь иностранным агентом и (или) лицом (физическим или юридическим) выполняющим функции иностранного агента и (или) получаете (получали) финансирование из-за рубежа (исключением является премия нобелевского комитета в области точных наук) и (или) хоть раз засовывали язык и (или) другие конечности в розетку (в том числе обесточенную) администрация сайта требует, чтобы вы немедленно покинули его (ИР "тупищво гоблина").</p>
</div>
`


let site = document.querySelector('#root')
site.insertAdjacentHTML("afterbegin", headPanelHTML)
site.insertAdjacentHTML("beforeend", footerHTML)