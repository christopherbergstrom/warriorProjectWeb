$(document).ready(function()
{
  // start game
  $("#topStart").click(function()
  {
    // remove start screen
    $("#startScreen").remove();
    // start game
    var city = new City();
    city.start();
  });
  // view instructions
  $("#bottomInstructions").click(function()
  {
    // inplement instructions here
    var instructions = new Instructions();
    instructions.instructions();
  });
});
