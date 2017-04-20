class GameScreen
{
  constructor(player, enemy)
  {
    this.player = player;
    this.enemy = enemy;
  }
  makeGameScreen()
  {
    this.clearScreen();
    // make divs for game screen
    // playerStats = left bar
    // enemyStats = right bar
    // screen = top middle bar where buttons are
    // actions = bottom bar where past actions show
    $("body").append("<div id='playerStats'></div>");
    $("body").append("<div id='enemyStats'></div>");
    $("body").append("<div id='screen'></div>");
    $("body").append("<div id='actions'></div>");
  }
  makeCity()
  {
    this.clearScreen();
    var battle = "<div class='col-md-4 topAndBottom topButtons text' id='battle'>Battle</div>";
    var practiceArena = "<div class='col-md-4 topAndBottom topButtons text' id='practiceArena'>Practice Arena</div>";
    var weaponShop = "<div class='col-md-4 topAndBottom topButtons text' id='weaponShop'>Weapon Shop</div>";
    var talkToLocals = "<div class='col-md-6 topAndBottom bottomButtons text' id='talkToLocals'>Talk to Locals</div>";
    var instructions = "<div class='col-md-6 topAndBottom bottomButtons text' id='instructions'>Instructions</div>";
    $("body").append("<div class='container-fluid'></div>")
    $(".container-fluid").append("<div class='row'>"+battle+practiceArena+weaponShop+"</div>");
    $(".container-fluid").append("<div class='row'>"+talkToLocals+instructions+"</div>");
  }
  makeFightSelection(level)
  {
    var top = [];
    var bottom = [];
    $(".container-fluid").empty();
    if (level >= 1)
      top.push("<div class='col-md-2 topAndBottom enemySelection text' id='one'>Skeleton Archer</div>");
    if (level >= 2)
      top.push("<div class='col-md-1 topAndBottom enemySelection text' id='two'>Undead Soldier</div>");
    if (level >= 3)
      top.push("<div class='col-md-1 topAndBottom enemySelection text' id='three'>Harpy</div>");
    if (level >= 4)
      top.push("<div class='col-md-1 topAndBottom enemySelection text' id='four'>Gorgon</div>");
    if (level >= 5)
      top.push("<div class='col-md-2 topAndBottom enemySelection text' id='five'>Centaur</div>");
    if (level >= 6)
      bottom.push("<div class='col-md-2 topAndBottom enemySelection text' id='six'>Cerberus Dog</div>");
    if (level >= 7)
      bottom.push("<div class='col-md-1 topAndBottom enemySelection text' id='seven'>Giant Spider</div>");
    if (level >= 8)
      bottom.push("<div class='col-md-1 topAndBottom enemySelection text' id='eight'>Mintaur</div>");
    if (level >= 9)
      bottom.push("<div class='col-md-1 topAndBottom enemySelection text' id='nine'>Cyclops</div>");
    if (level >= 10)
      bottom.push("<div class='col-md-2 topAndBottom enemySelection text' id='ten'>Dragon</div>");
    $(".container-fluid").append("<div class='row'></div>");
    top.forEach(function(item)
    {
      $(".row").append(item);
    });
    $(".container-fluid").append("<div class='row' id='bottomRow'></div>");
    bottom.forEach(function(item)
    {
      $("#bottomRow").append(item);
    });
  }
  clearScreen()
  {
    $("body").empty();
  }
}
