/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;


/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  if(window.confirm('Þegar ýtt er á OK byrjar leikur og markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.')){ 
    play();  
  } if (window.confirm('Spila annan leik?')){ 
  } else { 
    stop();
  }
}
  
/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */

function play() {
  var guess = 0;
  var correct = 0;
  for (x = 0; x < 10; x++) { 
  
  if(window.prompt('Hvað er ' + '...'  +'?') ) { 
    console.log(guess);  
    guess++;
    correct++;
  } else {
    guess++;
  }
  
  }
  if (guess === 10) { 
  window.confirm('Þú fékkst '+ correct + ' af 10 dæmum rétt á ' + x + ' sekúndum'
  + 'Meðalrétt svör á sekúndu eru ...');
   }
  //if (confirm ('Hætt í leik.') == false) break;
      

  }

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() { 
  
}

function spurningar() { 
  var finnaSpurningu = randomNumber(1,4);
  if (finnaSpurningu == 1) { 
  var h = randomNumber(1,100);
  var e = randomNumber(1,100);
  var k = h + e;

  return [1, k, h, e];
}
  
  else if (finnaSpurningu == 2) { 
  var h = randomNumber(1,100);
  var e = randomNumber(1,100);
  var k = h - e;

  return [2, k, h, e];
  }

  else if (finnaSpurningu == 3) {  
  var h = randomNumber(1,10);
  var e = randomNumber(1,10);
  var k = h * e;

  return [3, k, h, e];
  }

  else {  (finnaSpurningu == 4) 
  var h = randomNumber(2,10);
  var e = h * randomNumber(2,10);
  var k = h / e;

  return [4, k, h, e];
  }

}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Byrjar leik
start();
// Stoppar Leik
stop();





