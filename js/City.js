class City
{
  start()
  {
    // intro here
    
    // below is test code for fight
    var fight = new Fight();
    var createCharacter = new CreateCharacter();
    var weaponShop = new WeaponShop();
    var gameScreen = new GameScreen();
    var instructions = new Instructions();
    var player = new Character("Warrior", 250, "Blow Darts", 1, 2, "Chain Whip", 7, 3, "Shortsword", 15, 4, "Wood Shield", 2, 3, "Ice ", 10, "Ice Blast", 10, 10, 10, false, null, 0, 0, 0, 1);
    // fight.fight(createCharacter.player(), createCharacter.practice());
    // fight.fight(player, createCharacter.practice(player.getHealth(), player.getLightDmg(), player.getLightRng(), player.getMediumDmg(), player.getMediumRng(), player.getHeavyDmg(), player.getHeavyRng(), player.getShieldDmg(), player.getShieldRng(), player.getDodge()));
    this.returnToCity(player, createCharacter, fight, weaponShop, gameScreen, instructions);
  }
  returnToCity(player, createCharacter, fight, weaponShop, gameScreen, instructions)
  {
    gameScreen.makeCity();
    // implement city fuctions here, talk to people, weapon shop, practice arena, instructions
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
      $("#one").click(fight.fight(player, createCharacter.one()));
      $("#two").click(fight.fight(player, createCharacter.two()));
      $("#three").click(fight.fight(player, createCharacter.three()));
      $("#four").click(fight.fight(player, createCharacter.four()));
      $("#five").click(fight.fight(player, createCharacter.five()));
      $("#six").click(fight.fight(player, createCharacter.six()));
      $("#seven").click(fight.fight(player, createCharacter.seven()));
      $("#eight").click(fight.fight(player, createCharacter.eight()));
      $("#nine").click(fight.fight(player, createCharacter.nine()));
      $("#ten").click(fight.fight(player, createCharacter.ten()));
    }
    function practiceArena()
    {
      gameScreen.makeGameScreen();
      fight.fight(player, createCharacter.practice(player.getHealth(), player.getLightDmg(), player.getLightRng(), player.getMediumDmg(), player.getMediumRng(), player.getHeavyDmg(), player.getHeavyRng(), player.getShieldDmg(), player.getShieldRng(), player.getDodge()));
    }
    function goToWeaponShop()
    {
      
    }
    function talkToLocals()
    {
      
    }
    function viewInstructions()
    {
      
    }
  }
}
