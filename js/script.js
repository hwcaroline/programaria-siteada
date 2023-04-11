document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
   if(document.getElementById("nome-da-usuaria").value != "" && 
      document.getElementById("email-da-usuaria").value != "" &&
      document.getElementById("telefone-da-usuaria").value != ""){

     alert("Prontinho! Você receberá as novidades por email.")
   }else{
     alert("Por favor, preencha os campos nome, e-mail e telefone!")
   }
}





//De onde vem o evento? Qual evento ele deve ouvir? O que ele deve fazer quando o evento acontecer?
//dequemviraoevento.addEventListener("evento", oquedevefazer)

//email - operador - nome - condicao - acao 
//preenchido - && - preenchido - verdadeira - executa
//preenchido - && - nao preenchido - falsa - nao executa 
//nao preenchido - && - preenchido - falsa - nao executa
//nao preenchido - && - nao preenchido - falsa - nao executa 