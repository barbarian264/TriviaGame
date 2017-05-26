var questions =["Popular instrument composed of 6 strings?","Instrument played by Beethoven?","Instument used to give depth and has 4-5 strings?"];
var answer = ["Violin", "Bass", "Guitar", "ukelele","Piano","Bass"];
// var answer1 = ["Piano", "Violin", "Drum", "Trumpet"];
// var answer2 = ["Violin", "Bass", "Guitar", "ukelele"];
var num = 0;
var corr = 0;
var inco = 0;
var number = 10;

function startscreen() {

   initialhtml = "<button type='button' class='btn-lg' id='boton'>Start Trivia</button>";
   $(".rect2").html(initialhtml);
};

function newhtml() {	
   
   triviahtml = "<h2 id= 'time'></h2><h2>" + questions[num] +" </h2><div class='list-group'><button type='button' class='list-group-item' id=item1>" + answer[num] + "</button> <button type='button' class='list-group-item' id=item2>" + answer[num+1] + "</button> <button type='button' class='list-group-item' id=item3>" + answer[num+2] + "</button> <button type='button' class='list-group-item' id=item4>" + answer[num+3] + "</button> </div>";

  $(".rect2").html(triviahtml);

  number=10;

};

function finalscore(){

	finalhtml = "<h2>Correct:" + corr + "</h2><h2>Incorrect:" + inco + "</h2>";
	$(".rect2").html(finalhtml);
	clearInterval(intervalId);
}

function run() {
      intervalId = setInterval(decrement, 1000);
}

function stop() {

	clearInterval(intervalId);
}


function decrement() {

      number--;

     
      $("#time").html(number);


   
      if (number === 0) {

      
        stop();

      
        alert("You are out of time!");
      }
    }

$("body").on("click", "#boton", function () {
    
	newhtml();

});


$("body").on("click", ".list-group-item", function () {
   
     $(".list-group-item").on("click", function() {

     	console.log(this.textContent);
        
    if (num==0 && this.textContent == "Guitar") {
		corr = corr + 1;
	}

	else if (num==1 && this.textContent == "Piano") {
		corr = corr + 1;
	}

	else if (num==2 && this.textContent == "Bass") {
		corr = corr + 1;
	}

	else {
		inco = inco + 1;
	}


    num = num + 1;
	newhtml();
	if (num == 3) {

		finalscore();

	}

     });

	

});

startscreen();
run();


