$(document).ready(function()
{
  // start game
  $("#topStart").click(function()
  {
    // start game
    var city = new City();
    var name = $("#warriorNameInput").val();
    // remove start screen
    $("#startScreen").remove();
    // intro here
    var gameScreen = new GameScreen();
    gameScreen.makeIntro(city, name);
  });
});
