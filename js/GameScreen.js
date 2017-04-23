class GameScreen
{
  constructor(player)
  {
    this.player = player;
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
    // this.clearScreen();
    $("body").empty();
    var battle = "<div class='col-md-4 topAndBottom topButtons text' id='battle'>Battle</div>";
    var practiceArena = "<div class='col-md-4 topAndBottom topButtons text' id='practiceArena'>Practice Arena</div>";
    var weaponShop = "<div class='col-md-4 topAndBottom topButtons text' id='weaponShop'>Weapon Shop</div>";
    var talkToLocals = "<div class='col-md-6 topAndBottom bottomButtons text' id='talkToLocals'>Talk to Locals</div>";
    var instructions = "<div class='col-md-6 topAndBottom bottomButtons text' id='instructions'>Instructions</div>";
    $("body").append("<div class='container-fluid'></div>");
    $(".container-fluid").append("<div class='row'>"+battle+practiceArena+weaponShop+"</div>");
    $(".container-fluid").append("<div class='row'>"+talkToLocals+instructions+"</div>");
  }
  makeFightSelection(level)
  {
    // clears out old container
    $(".container-fluid").empty();
    var row1 = [];
    var row2 = [];
    var row3 = [];
    var row4 = [];
    if (level >= 1)
      row1.push("<div class='col-md-4 topAndBottom enemySelection' id='one'>Skeleton Archer</div>");
    if (level >= 2)
      row1.push("<div class='col-md-4 topAndBottom enemySelection' id='two'>Undead Soldier</div>");
    if (level >= 3)
      row1.push("<div class='col-md-4 topAndBottom enemySelection' id='three'>Harpy</div>");
    if (level >= 4)
      row2.push("<div class='col-md-4 topAndBottom enemySelection' id='four'>Gorgon</div>");
    if (level >= 5)
      row2.push("<div class='col-md-4 topAndBottom enemySelection' id='five'>Centaur</div>");
    if (level >= 6)
      row2.push("<div class='col-md-4 topAndBottom enemySelection' id='six'>Cerberus Dog</div>");
    if (level >= 7)
      row3.push("<div class='col-md-4 topAndBottom enemySelection' id='seven'>Giant Spider</div>");
    if (level >= 8)
      row3.push("<div class='col-md-4 topAndBottom enemySelection' id='eight'>Mintaur</div>");
    if (level >= 9)
      row3.push("<div class='col-md-4 topAndBottom enemySelection' id='nine'>Cyclops</div>");
    if (level >= 10)
      row4.push("<div class='col-md-12 topAndBottom enemySelection' id='ten'>Dragon</div>");
    $(".container-fluid").append("<div class='row' id='row1'></div>");
    row1.forEach(function(item)
    {
      $("#row1").append(item);
    });
    $(".container-fluid").append("<div class='row' id='row2'></div>");
    row2.forEach(function(item)
    {
      $("#row2").append(item);
    });
    $(".container-fluid").append("<div class='row' id='row3'></div>");
    row3.forEach(function(item)
    {
      $("#row3").append(item);
    });
    $(".container-fluid").append("<div class='row' id='row4'></div>");
    row4.forEach(function(item)
    {
      $("#row4").append(item);
    });
  }
  makeWeaponShop(player)
  {
    // clears out old container
    $(".container-fluid").empty();
    // row1
    $(".container-fluid").append("<div class='row' id='row1'></div>");
    // light weapons
    $("#row1").append("<div class='col-md-4 topAndBottom weaponCategory' id='light'>Light Weapons</div>");
    // medium weapons
    $("#row1").append("<div class='col-md-4 topAndBottom weaponCategory' id='medium'>Medium Weapons</div>");
    // heavy weapons
    $("#row1").append("<div class='col-md-4 topAndBottom weaponCategory' id='heavy'>Heavy Weapons</div>");
    // row2
    $(".container-fluid").append("<div class='row' id='row2'></div>");
    // shields
    $("#row2").append("<div class='col-md-4 topAndBottom weaponCategory' id='shield'>Shields</div>");
    // power ups
    $("#row2").append("<div class='col-md-4 topAndBottom weaponCategory' id='power'>Power Ups</div>");
    // magic
    $("#row2").append("<div class='col-md-4 topAndBottom weaponCategory' id='magic'>Magic</div>");
    // row3
    $(".container-fluid").append("<div class='row' id='row3'></div>");
    // row4
    $(".container-fluid").append("<div class='row' id='row4'></div>");
    $("#light").click(light);
    $("#medium").click(medium);
    $("#heavy").click(heavy);
    $("#shield").click(shield);
    $("#power").click(power);
    $("#magic").click(magic);
    function light()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-3 weaponSelect' id='L1'>Blow Darts</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect' id='L2'>Throwing Knives</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect' id='L3'>Throwing Axe</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect' id='L4'>Mystical Bow</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect' id='L5'>Crossbow</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect' id='L6'>Javelin</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect' id='L7'>Recurve Bow</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect' id='L8'>Long Bow</div>");
      showWeapons();
      $(".weaponSelect").click(function()
      {
        var count = 0;
        for (var i = 0; i < player.weapons.length; i++)
        {
          // console.log($(this).html() === player.weapons[i].name);
          if ($(this).html() !== player.weapons[i].name)
            count++;
        }
        if (count === player.weapons.length)
        {
          console.log("purchasing");
          player.weapons.push({name:$(this).html(), dmg:10});
          console.log(player.weapons);
        }
      });
    }
    function medium()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect' id='M1'>Chain Whip</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect' id='M2'>Ring Sword</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect' id='M3'>Staff</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect' id='M4'>Cestus</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect' id='M5'>Spiked Chain</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect' id='M6'>Meteor Hammer</div>");
      showWeapons();
    }
    function heavy()
    {
      
    }
    function shield()
    {
      
    }
    function power()
    {
      
    }
    function magic()
    {
      
    }
    function removeWeapons()
    {
      $("#row3").empty();
      $("#row4").empty();
    }
    function showWeapons()
    {
      $("#row3").hide().fadeIn("medium");
      $("#row4").hide().fadeIn("medium");
    }
  }
  clearScreen()
  {
    $("body").empty();
  }
}
