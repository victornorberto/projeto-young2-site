function helloWorld() {
  alert('aaaaaaaa!');
}
function mudarTexto() {
  const paragrafo1 = document.getElementById('paragrafo1');

  paragrafo1.textContent = 'o texto foi mudado';
}
function transferirTexto() {
  const paragrafo2 = document.getElementById('paragrafo2');
  const inputTexto = document.getElementById('inputTexto');
  paragrafo2.textContent = inputTexto.value;
}
function definirCor() {
  const cor = document.getElementById('inputCor').value;
  const inputTexto2 = document.getElementById('inputTexto2').value;
  const paragrafo3 = document.getElementById('paragrafo3');
  paragrafo3.textContent = inputTexto2;
  paragrafo3.style.backgroundColor = cor;
}
function somarEMostrar(){
  const n1 = Number(document.getElementById('n1').value);
  const n2 = Number(document.getElementById('n2').value);
  const somar = document.getElementById('somar');  
  let n3 = n1 + n2;
  somar.textContent = (`a soma de ${n1} com ${n2} resulta em ${n3}`);
}
function MudaTamanhoImg(){
  const width = Number(document.getElementById('largura').value);
  const height = Number(document.getElementById('altura').value);
  const src = document.getElementById('imagemDoUsuario').value;
  const imagem2 = document.getElementById('imagem');
  if (height > 0 && width > 0){
    imagem2.src = src;
    imagem2.width = width;
    imagem2.height = height;
  }
  else{alert("erro")}
}

document.getElementById('formulario').addEventListener('submit', function(event){
  event.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const corpo2 = document.getElementById('corpo').value;
  const url = document.getElementById('url').value;
  const titulo2 = document.getElementById('tituloH3');
  const paragrafo4 = document.getElementById('paragrafo4');
  const imagem2 = document.getElementById('imagem2');
  titulo2.textContent = titulo;
  paragrafo4.textContent = corpo2;
  imagem2.src = url;
});
