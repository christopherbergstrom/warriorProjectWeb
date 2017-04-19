class GameScreen
{
  constructor(player, enemy)
  {
    this.player = player;
    this.enemy = enemy;
  }
  makeGameScreen()
  {
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
    var battle = "<div class='col-md-4 topAndBottom topButtons text'>Battle</div>";
    var practiceArena = "<div class='col-md-4 topAndBottom topButtons text'>Practice Arena</div>";
    var weaponShop = "<div class='col-md-4 topAndBottom topButtons text'>Weapon Shop</div>";
    var talkToLocals = "<div class='col-md-6 topAndBottom bottomButtons text'>Talk to Locals</div>";
    var instructions = "<div class='col-md-6 topAndBottom bottomButtons text'>Instructions</div>";
    $("body").append("<div class='container-fluid'></div>")
    $(".container-fluid").append("<div class='row'>"+battle+practiceArena+weaponShop+"</div>");
    $(".container-fluid").append("<div class='row'>"+talkToLocals+instructions+"</div>");
  }
}
