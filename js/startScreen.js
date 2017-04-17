$(document).ready(function()
{
  // start game
  $("#topStart").click(function()
  {
    // remove start screen
    $("#startScreen").remove();
    // create game screen
    var gameScreen = new GameScreen();
    gameScreen.makeGameScreen();
    // start game
    var city = new City();
    city.start();
  });
  // view instructions
  $("#bottomInstructions").click(function()
  {
    instructions();
  });
  function instructions()
  {
    // implement instructions here
  }
});
