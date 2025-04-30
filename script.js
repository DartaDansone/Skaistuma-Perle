
function login(){
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  if(user=="darta" && pass=="12345"){
    alert("Jūs esat veiksmīgi ielogojušies!");
}else{
    alert("Nepareizs lietotājvārds, vai parole!");
}
}