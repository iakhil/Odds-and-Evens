//$("h1").html(num);
// us = prompt("Enter a number.")
// if(us == num)
// alert("You lost!")
//alert(num)
user = 500;
var score = 0;
var one_sound = new Audio('one.mp3');
var two_sound = new Audio('two_edited.mp3');
var four_sound = new Audio('four_edited.mp3');
var five_sound = new Audio('five_edited.mp3');
var six_sound = new Audio('six_1.mp3');
var out = new Audio('out_1.mp3');


$("#one").click(function() {
  //alert("One is clicked!")
  //$("h1").html(num)
  var num = Math.floor((Math.random() * 6)+1)
    var user = 1;
    score += 1
  $("#scoredigits").html(score);
  $("#comp").html(num);
    $("#current").html("A Single!");

    if(num == user)
    {
      out.play();
      $("#dismiss").html("Dismissed for:" )
      $("#dismiss2").html(score);
      $("#current").html("That's Out!");
      score = 0;
      $("#scoredigits").html(score);
      //alert("You lost!")
      }
      else
        one_sound.play()

})

$("#two").click(function() {
  //alert("Two is clicked!")
  var num = Math.floor((Math.random() * 6)+1)
  two_sound.play();
    var user = 2;
            //$("h1").html(num)
            score += 2
          $("#scoredigits").html(score);
          $("#comp").html(num)
            $("#current").html("Two Runs!");
    if(num == user)
    {
      out.play();
      $("#dismiss").html("Dismissed for:" )
      $("#dismiss2").html(score);
      $("#current").html("That's Out!");
      score = 0;
      $("#scoredigits").html(score);
      //alert("You lost!")
    }


})

$("#three").click(function() {
  //alert("Three is clicked!")
  var num = Math.floor((Math.random() * 6)+1)
    var user = 3;
    two_sound.play();
        //$("h1").html(num)
        score += 3
      $("#scoredigits").html(score);
      $("#comp").html(num)
      $("#current").html("Three Runs!");
    if(num == user)
{
  out.play();
      //alert("You lost!")
      $("#dismiss").html("Dismissed for:" )
      $("#dismiss2").html(score);
      score = 0;
      $("#scoredigits").html(score);
    $("#current").html("That's Out!");
}

})

$("#four").click(function() {
  var user = 4;
      //$("h1").html(num)
var num = Math.floor((Math.random() * 6)+1)
two_sound.play();
four_sound.play();
      score += 4
    $("#scoredigits").html(score);
    $("#comp").html(num);
    $("#current").html("That's a Four!");
  if(num == user)
  {
    out.play();
    $("#dismiss").html("Dismissed for:" )
    $("#dismiss2").html(score);
    score = 0;
    $("#scoredigits").html(score);
$("#current").html("That's Out!");
    //alert("You lost!")
  }

})

$("#five").click(function() {
  //alert("Five is clicked!")
  var num = Math.floor((Math.random() * 6)+1)
  five_sound.play();
    var user = 5;
    //$("h1").html(num)
    score += 5
  $("#scoredigits").html(score);
  $("#comp").html(num)
  $("#current").html("Five Runs!");
    if(num == user)
    {
      //$("h1").html(num)
      out.play();
      $("#dismiss").html("Dismissed for:" )
      $("#dismiss2").html(score);
      score = 0;
      $("#scoredigits").html(score);
    $("#current").html("That's Out!");
      //alert("You lost!")
    }

})

$("#six").click(function() {
  //alert("Six is clicked!")
  var num = Math.floor((Math.random() * 6)+1)
    var user = 6;
    //$("h1").html(num);
    score += 6
  $("#scoredigits").html(score);
  $("#comp").html(num);
  $("#current").html("Over the Rope!");
  six_sound.play();
    if(num == user)
    {
      //$("h1").html(num)
      out.play();
      $("#dismiss").html("Dismissed for:" )
      $("#dismiss2").html(score);
      score = 0;
      $("#scoredigits").html(score);
      $("#current").html("That's Out!");

      //alert("You lost!")
    }

})
