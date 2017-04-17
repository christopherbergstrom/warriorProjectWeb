class CreateCharacter
{
  // name, health, lightWpn, lightDmg, lightWpnDmgRng, mediumWpn, mediumDmg, mediumWpnDmgRng, heavyWpn, heavyDmg, heavyWpnDmgRng, shield, shieldDmg, shieldDmgRng, power, powerDmg, magic, magicDmg, magicDmgRng, dodge, isDragon, fireBreath, fireBreathDmg, fireBreathDmgRng, gold, level
  player()
  {
    return(new Character("Warrior", 250, "Blow Darts", 1, 2,"Chain Whip", 7, 3, "Shortsword", 15, 4, "Wood Shield", 2, 3, "Ice ", 10, "Ice Blast", 10, 10, 10, false, null, 0, 0, 0, 1));
  }
  one()
  {
    return(new Character("Skeleton Archer", 250, "Dagger", 1, 3, "Throwing Knives", 4, 4, "Bow", 8, 3, "Shield", 1, 5, null, 0, null, 0, 0, 20, false, null, 0, 0, 0, 1));
  }
  two()
  {
    return(new Character("Undead Soldier", 500, "Mace", 11, 3, "Sword", 14, 4, "Halberd", 18, 3, "Shield", 6, 5, null, 0, null, 0, 0, 10, false, null, 0, 0, 0, 2));
  }
  three()
  {
    return(new Character("Harpy", 750, "Piercing Scream", 21, 3, "Acid Spit", 24, 4, "Tallons", 28, 3, null, 0, 0, null, 0, null, 0, 0, 25, false, null, 0, 0, 0, 3));
  }
  four()
  {
    return(new Character("Gorgon", 1000, "Stone Gaze", 31, 3, "Claws", 34, 4, "Tail", 38, 3, null, 0, 0, null, 0, null, 0, 0, 15, false, null, 0, 0, 0, 4));
  }
  five()
  {
    return(new Character("Centaur", 1250, "Charge", 41, 3, "Chain Whip", 44, 4, "Flail", 48, 3, "Shield", 21, 5, null, 0, null, 0, 0, 0, false, null, 0, 0, 0, 5));
  }
  six()
  {
    return(new Character("Cerberus Dog", 1500, "Fire Spit", 51, 3, "Claws", 54, 4, "Bite", 58, 3, null, 0, 0, null, 0, null, 0, 0, 15, false, null, 0, 0, 0, 6));
  }
  seven()
  {
    return(new Character("Giant Spider", 1750, "Trample", 61, 3, "Bite", 64, 4, "Stinger", 68, 3, null, 0, 0, null, 0, null, 0, 0, 20, false, null, 0, 0, 0, 7));
  }
  eight()
  {
    return(new Character("Minotaur", 2000, "Throwing Axe", 71, 3, "Horns", 74, 4, "Axe", 78, 3, "Shield", 36, 5, null, 0, null, 0, 0, 15, false, null, 0, 0, 0, 8));
  }
  nine()
  {
    return(new Character("Cyclops", 3000, "Kick", 81, 3, "Punch", 84, 4, "Spiked Club", 88, 3, null, 0, 0, null, 0, null, 0, 0, 0, false, null, 0, 0, 0, 9));
  }
  ten()
  {
    return(new Character("Dragon", 5000, "Claws", 91, 3, "Tail", 94, 4, "Bite", 98, 3, null, 0, 0, null, 0, null, 0, 0, 0, true, "Fire Breath", 101, 10, 0, 10));
  }
}