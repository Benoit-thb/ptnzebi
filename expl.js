


	fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR&api_key=59adf5499088da0d8a08367ffd840d033519784bf1ab07a8a8baea501783ccca")
  //fetch("https://mockbin.com/request")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      console.log(value);
      let aa = value.EUR;
      const oui = document.getElementById("cours");
      oui.innerHTML = "la valeur du bitcoin est de: " + aa +" €";

      if (localStorage.getItem("cours") == null) {
      localStorage.setItem("declencheurmini",2);
      }

      if (localStorage.getItem("coursmini") == null) {
      localStorage.setItem("coursmini",aa);
      localStorage.setItem("declencheurmini",1);
      }

      let valeuranc = localStorage.getItem("cours");
      let valeurmini = localStorage.getItem("coursmini");

      if(valeuranc < aa){
        localStorage.setItem("cours",aa);
        localStorage.setItem("declencheurmini",2);
      }

      if(valeurmini > aa){
        localStorage.setItem("coursmini",aa);
        localStorage.setItem("declencheurmini",1);
      }

      const jou  = document.getElementById("date");
      const joumini  = document.getElementById("datemini");
      const heur  = document.getElementById("heure");
      const minut = document.getElementById("minute");

      var jour = localStorage.getItem("date");
      var heure = localStorage.getItem("heure");
      var minute = localStorage.getItem("minute");

      var jourmini = localStorage.getItem("datemini");
      var heuremini = localStorage.getItem("heuremini");
      var minutemini = localStorage.getItem("minutemini");

      jou.innerHTML = "la valeur la plus haute du bitcoin était de : " + valeuranc + " €  le " + jour + " à " + heure + "h " + minute;
      joumini.innerHTML = "la valeur la plus basse du bitcoin était de : " + valeurmini + " €  le " + jourmini + " à " + heuremini +"h " + minutemini ;
    })


    .catch(function(err) {
      // Une erreur est survenue
    });

    bouton.onclick = () => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR&api_key=59adf5499088da0d8a08367ffd840d033519784bf1ab07a8a8baea501783ccca");
    document.location.reload();
    }


   	function tafonction(){
   		 setTimeout(function(){document.location.reload();}, 60000);
	}
 
	tafonction();


    function datemini(){
      var datem = new Date();
      var datemini = datem.toLocaleDateString();
      var heuremini = datem.getHours();
      var minutemini = datem.getMinutes();
      localStorage.setItem("datemini",datemini);
      localStorage.setItem("heuremini",heuremini);
      localStorage.setItem("minutemini",minutemini);
      localStorage.setItem("declencheurmini", 0);
    }

    function datemax(){
      var date = new Date();
      var datemax = date.toLocaleDateString();
      var heure = date.getHours();
      var minute = date.getMinutes();
      localStorage.setItem("date",datemax);
      localStorage.setItem("heure",heure);
      localStorage.setItem("minute",minute);
      localStorage.setItem("declencheurmini", 0);
    }

    if(localStorage.getItem("declencheurmini") == 1)
    {
      datemini();
    }

    if(localStorage.getItem("declencheurmini") == 2)
    {
      datemax();
    }


	  /*.then(function(value) {
	  let coursact = value.EUR;

	  if (localStorage.getItem("cours") == null) {
	  	localStorage.setItem("cours",coursact);
	  }
	  });
	  */

 //let a = "oui ma gaté";
  //const oui = document.getElementById("hello");

  //oui.innerHTML = a;


//let aa = res;
      //const oui = document.getElementById("hello");
      //oui.innerHTML = aa;
