
function login(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if(username === 'darta' && password === '12345'){
    document.getElementById('massage').innerText = 'Jūs esat veiksmīgi peslēgušies!';
    
}
  else {
  document.getElementById('massage').innerText = 'Nepareizs lietotājvārds, vai parole!';
}
}