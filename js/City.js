class City
{
  start()
  {
    // intro here
    var player = new Character("Warrior", 250, "Blow Darts", 1, 2, "Chain Whip", 7, 3, "Shortsword", 15, 4, "Wood Shield", 1, 5, "", 0, null, 0, 0, 10, false, null, 0, 0, 0, 1);
    player.weapons = [{name:"Blow Darts", dmg:1}, {name:"Chain Whip", dmg:7}, {name:"Shortsword", dmg:15}, {name:"Wood Shield", dmg:1}];
    // player.setGold("", 10000);
    this.returnToCity(player);
  }
  returnToCity(player)
  {
    var fight = new Fight();
    var createCharacter = new CreateCharacter();
    var weaponShop = new WeaponShop();
    var gameScreen = new GameScreen();
    var instructions = new Instructions();
    gameScreen.makeCity();
    // implement city fuctions here, talk to people, weapon shop, instructions
    // battle, practice arena, weapon shop
    // talk to locals, instructions
    $("#battle").click(battle);
    $("#practiceArena").click(practiceArena);
    $("#weaponShop").click(goToWeaponShop);
    $("#talkToLocals").click(talkToLocals);
    $("#instructions").click(viewInstructions);
    function battle()
    {
      gameScreen.makeFightSelection(player.getLevel());
      // main menu btn
      $("body").prepend("<button id='mainMenuBtn'>M</button>");
      $("#mainMenuBtn").click(function()
      {
        var city = new City();
        city.returnToCity(player);
      });
      $("#one").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.one());
      });
      $("#two").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.two());
      });
      $("#three").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.three());
      });
      $("#four").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.four());
      });
      $("#five").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.five());
      });
      $("#six").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.six());
      });
      $("#seven").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.seven());
      });
      $("#eight").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.eight());
      });
      $("#nine").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.nine());
      });
      $("#ten").click(function()
      {
        gameScreen.makeGameScreen();
        fight.fight(player, createCharacter.ten());
      });
    }
    function practiceArena()
    {
      gameScreen.makeGameScreen();
      fight.fight(player, createCharacter.practice(10, player.getLightDmg(), player.getLightRng(), player.getMediumDmg(), player.getMediumRng(), player.getHeavyDmg(), player.getHeavyRng(), player.getShieldDmg(), player.getShieldRng(), player.getDodge()));
    }
    function goToWeaponShop()
    {
      gameScreen.makeWeaponShop(player, weaponShop);
      // main menu btn
      $("body").prepend("<button id='mainMenuBtn'>M</button>");
      $("#mainMenuBtn").click(function()
      {
        var city = new City();
        city.returnToCity(player);
      });
    }
    function talkToLocals()
    {
      
    }
    function viewInstructions()
    {
      
    }
  }
}
