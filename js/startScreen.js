$(document).ready(function()
{
  // start game
  $("#topStart").click(function()
  {
    // start game
    var city = new City();
    city.start($("#warriorNameInput").val());
    // remove start screen
    $("#startScreen").remove();
  });
  // view instructions
  // $("#bottomInstructions").click(function()
  // {
  //   // inplement instructions here
  //   var instructions = new Instructions();
  //   instructions.instructions();
  // });
});
