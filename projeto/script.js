function escreverFicha() {
  const nomeV = document.getElementById("nomeP");
  const idadeV = document.getElementById("idadeP");  
  const racaV = document.getElementById("racaP");
  const classeV = document.getElementById("classeP");  
  const forcaV = document.getElementById("forcaP");  
  const agilidadeV = document.getElementById("agilidadeP");
  const inteligenciaV = document.getElementById("inteligenciaP");
  const defesaV = document.getElementById("defesaP");
  const carismaV = document.getElementById("carismaP");
  const loreV = document.getElementById("loreP");

  const nomeI = document.getElementById("nome").value;
  const idadeI = Number(document.getElementById("idade").value);  
  const racaI = document.getElementById("raça").value;
  const classeI = document.getElementById("sub-class").value;  
  const forcaI = Number(document.getElementById("força").value);  
  const agilidadeI = Number(document.getElementById("agilidade").value);
  const inteligenciaI = Number(document.getElementById("inteligencia").value);
  const defesaI = Number(document.getElementById("defesa").value);
  const carismaI = Number(document.getElementById("carisma").value);
  const loreI = document.getElementById("backstory").value;
  
  nomeV.textContent = nomeI;
  idadeV.textContent = idadeI;
  racaV.textContent = racaI;
  classeV.textContent = classeI;
  forcaV.textContent = forcaI;
  agilidadeV.textContent = agilidadeI;
  inteligenciaV.textContent = inteligenciaI;
  defesaV.textContent = defesaI;
  carismaV.textContent = carismaI;
  loreV.textContent = loreI;
}
function enviar(){
  alert("sua ficha foi enviada ao mestre, bom jogo");
  const nomeV = document.getElementById("nomeP");
  const idadeV = document.getElementById("idadeP");  
  const racaV = document.getElementById("racaP");
  const classeV = document.getElementById("classeP");  
  const forcaV = document.getElementById("forcaP");  
  const agilidadeV = document.getElementById("agilidadeP");
  const inteligenciaV = document.getElementById("inteligenciaP");
  const defesaV = document.getElementById("defesaP");
  const carismaV = document.getElementById("carismaP");
  const loreV = document.getElementById("loreP");

  nomeV.textContent = "";
  idadeV.textContent = "";
  racaV.textContent = "";
  classeV.textContent = "";
  forcaV.textContent = "";
  agilidadeV.textContent = "";
  inteligenciaV.textContent = "";
  defesaV.textContent = "";
  carismaV.textContent = "";
  loreV.textContent = "";

}
function cancelar() {
  alert("mudou de ideia? sem problemas, recomece.");

  const nomeV = document.getElementById("nomeP");
  const idadeV = document.getElementById("idadeP");  
  const racaV = document.getElementById("racaP");
  const classeV = document.getElementById("classeP");  
  const forcaV = document.getElementById("forcaP");  
  const agilidadeV = document.getElementById("agilidadeP");
  const inteligenciaV = document.getElementById("inteligenciaP");
  const defesaV = document.getElementById("defesaP");
  const carismaV = document.getElementById("carismaP");
  const loreV = document.getElementById("loreP");

  nomeV.textContent = "";
  idadeV.textContent = "";
  racaV.textContent = "";
  classeV.textContent = "";
  forcaV.textContent = "";
  agilidadeV.textContent = "";
  inteligenciaV.textContent = "";
  defesaV.textContent = "";
  carismaV.textContent = "";
  loreV.textContent = "";
}