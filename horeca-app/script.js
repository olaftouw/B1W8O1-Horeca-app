/*Olaf Touw,
  applicatieonwikkeling niv 4, Da Vinci college Gorinchem
*/
const FRIS = 2.20;	//bij deze const geef ik aan wat de prijs is.
const BIER = 2.50;
const WIJN = 4;

const SNACK8 = 5.00;
const SNACK16 = 9.20;

var fris = 0;	//hier bij geef ik alles een waarde van 0.
var bier = 0;
var wijn = 0;

var bitterbal8 = 0;
var bitterbal16 = 0;

var input;

function addOrder() {
	while (input != ("stop")){


		input = prompt("wat wilt u bestellen?");
		if (input == "fris") {
			var newFris = parseInt(prompt("hoeveel fris wilt u bestellen?"));
			fris = fris + newFris;
			console.log(fris , "x" , FRIS);
		}
		else if (input == "bier"){
			var newBier = parseInt(prompt("hoeveel bier wilt u bestellen?"));
        	bier = bier + newBier;
			console.log(bier , "x" , BIER);
		}
		else if (input == "wijn"){
			var newWijn = parseInt(prompt("hoeveel wijn wilt u bestellen?"));
			wijn = wijn + newWijn;
			console.log(wijn , "x" , WIJN);
		}


		else if (input == "snacks"){
	 		inputSnack = prompt("Hoeveel wilt u?", "8 of 16")
	 	if (inputSnack == "8") {
	 		var newBal8 = parseInt(prompt("kies hoeveel schalen van 8 u wilt."));
            bitterbal8 = bitterbal8 + newBal8;
            console.log(bitterbal8, "x" , SNACK8);
            }
        else if (inputSnack == "16"){
	        var newBal16 = parseInt(prompt("kies hoeveel schalen van 16 u wilt."));
	        bitterbal16 = bitterbal16 + newBal16;
	        console.log(bitterbal16, "x" , SNACK16);
			}
		}
		else if
			(input == "stop"){
				calcPrice();
			}
		else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
		}
	}
}


function calcPrice() {
	var frisprice = fris*FRIS;
	var bierprice = bier*BIER; 
	var wijnprice = wijn*WIJN;
	var snackprice8 = bitterbal8*SNACK8;
	var snackprice16 = bitterbal16*SNACK16;
	var totalprice = frisprice+bierprice+wijnprice+snackprice8+snackprice16;		//hier word het totaal bedrag uitgerekent.

	/* hier komt het antwoord te staan van hoeveel drankjes u heeft gekozen hij haalt het antwoord uit de prompt en de prijs uit de const */
		if (fris > 0) {
			document.write("U heeft"," ", fris," ", "fris.", " ","€", frisprice);
			document.write("<br><br>");
		}
		if (bier > 0) {
			document.write("U heeft"," ", bier," ", "bier.", " ","€", bierprice);
			document.write("<br><br>");	
		}
		if (wijn > 0) {
			document.write("U heeft"," ", wijn," ", "wijn.", " ","€", wijnprice);
			document.write("<br><br>");  		//"<br><br>" staat voor een dubbele ENTER.
		}
		if (bitterbal8 > 0) {
			document.write("U heeft"," ",bitterbal8," ", "schalen van 8 bitterballen.", " ", "€", snackprice8);
			document.write("<br><br>");
		}
		if (bitterbal16 > 0) {
			document.write("U heeft"," ",bitterbal16," ", "schalen van 16 bitterballen."," ", "€", snackprice16);
			document.write("<br><br>");	
		}
		document.write("De totale prijs is €", totalprice);
}
addOrder();
