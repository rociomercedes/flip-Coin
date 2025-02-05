

document.getElementById("btn").addEventListener("click", function() {
    let moneda = document.getElementById("imgMoneda");
    
  
    moneda.style.animation = "none";
    void moneda.offsetWidth; 
    moneda.style.animation = "girar 0.15s infinite, fadeOut 1.5s ease-out";

    setTimeout(() => {
        moneda.style.animation = "none"; 

  
        let randomNumber = Math.random();
        
        if (randomNumber < 0.5) {
            moneda.src = "img/coinSol.png";
        } else {
            moneda.src = "img/coinLuna.png";
        }

        moneda.style.animation = "fadeIn 1.5s ease-in";
    }, 1500); 
});
