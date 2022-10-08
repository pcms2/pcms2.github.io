function itogovoe_sochineniye_2022_11klass_alert() {
  let text =prompt("Вы зарегестрировались на итоговое сочинение\nЧто хотите сказать?", "");
  var audio = new Audio();
  audio.src = "img/gimn.mp3";
  audio.autoplay = true;
  
  while(text != "Как похорошела москва при Сёргее Семеновиче!" && text.toLowerCase() != "кукареку") {
    text = prompt("Неправильно! повторите ещо\nЧто хотите сказать?", "")
  }
  audio.pause()
  var audio1 = new Audio();
  audio1.src = "img/gimn1.mp3";
  audio1.autoplay = true;
  alert("Встать!")
}