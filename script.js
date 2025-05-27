function carregar() {
  var teste = 5;
  var hora = window.document.getElementById("hora");
  var img = window.document.getElementById("imagem");
  var txt1 = window.document.getElementById("txt1");
  var txt2 = Number(txt1.value);
  //var data = new Date()
  //var hora2 = data.getHours()

  if (txt2 >= 1 && txt2 < 12) {
    hora.innerHTML = `Agora são ${txt2} horas bom dia.`;
    imagem.src = "img/manha.png";
    document.body.style.background = "#FED590";
  } else if (txt2 > 12 && txt2 <= 18) {
    hora.innerHTML = `Agora são ${txt2} horas boa tarde.`;
    imagem.src = "img/tarde.png";
    document.body.style.background = "#905B68";
  } else {
    hora.innerHTML = `Agora são ${txt2} horas boa noite.`;
    imagem.src = "img/noite.png";
    document.body.style.background = "#327DB7";
  }

  //#327DB7 noite
  //#905B68 tarde
  //#FED590 manha
}
