class MainGame
{
  start()
  {
    var fight = new Fight();
    // name, health, lightWpn, lightDmg, lightWpnDmgRng, mediumWpn, mediumDmg, mediumWpnDmgRng, heavyWpn, heavyDmg, heavyWpnDmgRng, shield, shieldDmg, shieldDmgRng, power, magic, magicDmg, magicDmgRng, dodge, isDragon, fireBreath, fireBreathDmg, fireBreathDmgRng, gold
    var player = new Character("Warrior", 250, "Blow Darts", 1, 2,"Chain Whip", 7, 3, "Shortsword", 15, 4, "Wood Shield", 2, 3, "null", "null", 0, 0, 10, false, "null", 0, 0, 0);
    var enemy = new Character("Skeleton Archer", 250, "Dagger", 1, 3, "Throwing Knives", 4, 4, "Bow", 8, 3, "Shield", 1, 5, "null", "null", 0, 0, 20, false, "null", 0, 0, 0);
    fight.fight(player, enemy);
  }
}
