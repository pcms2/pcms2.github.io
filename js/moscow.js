function itogovoe_sochineniye_2022_11klass_alert() {
  let text =prompt("Вы успешно зарегестрировались на итоговое сочинение!\nЧто хотите сказать?", "");
  if(text.length > 0) {
    var audio = new Audio();
    audio.src = "img/gimn.mp3";
    audio.autoplay = true;
  }
  
  while(text != "Как похорошела москва при Сёргее Семеновиче!" && text.toLowerCase() != "кукареку" && text.toLowerCase() != "паша тЕхник жид") {
    text = prompt("Неправильно! повторите ещо\nЧто хотите сказать?", "")
  }
  audio.pause()
  var audio1 = new Audio();
  audio1.src = "img/gimn1.mp3";
  audio1.autoplay = true;
  alert("Встать!")
}