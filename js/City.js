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
    // fight.fight(player, createCharacter.one());
    // fight.fight(player, createCharacter.practice(player.getHealth(), player.getLightDmg(), player.getLightRng(), player.getMediumDmg(), player.getMediumRng(), player.getHeavyDmg(), player.getHeavyRng(), player.getShieldDmg(), player.getShieldRng(), player.getDodge()));
    // implement city fuctions here, talk to people, weapon shop, practice arena, instructions
    // battle, practice arena, weapon shop
    // talk to locals, instructions
    function talkToLocals()
    {
      
    }
    function goToWeaponShop()
    {
      
    }
    function battle()
    {
      
    }
    function practiceArena()
    {
      
    }
    function viewInstructions()
    {
      
    }
  }
}
