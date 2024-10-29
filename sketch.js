// fantasia, aventura, drama

// a viagem de chiriro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10,drama, fantsia, aventura
// guardiões da galaxia, 12, fantasia, aventura
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15")
} camp

function draw() { 
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFantasia){
  if (idade >=10){
        if (idade >=14){
           return "As aventuras de Pi";
         }else {
             if(gostaDeFantasia){
              return "As aventuras de pi";
           } else {
             return "Depois da chuva";
            }
           } 
    }else {  
      return "depois da chuva";
     }
    return "A viagem de chiriro";
}

  
  
  