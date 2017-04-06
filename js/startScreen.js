$(document).ready(function()
{
  $("#topStart").click(function()
  {
    var startGame = new StartGame();
    startGame.start();
  });
  $("#bottomInstructions").click(function()
  {
    instructions();
  });
  function instructions()
  {
    
  }
});