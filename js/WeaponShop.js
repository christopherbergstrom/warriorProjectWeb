class WeaponShop
{
  buy()
  {
    
  }
  loadout()
  {
    
  }
  stats(player, weapon)
  {
    console.log(player);
    console.log("player level: "+player.getLevel());
    var lightWpnRangeTimesPlayerLevel = (player.getLevel()*2);
    var mediumWpnRangeTimesPlayerLevel = (player.getLevel()*3);
    var heavyWpnRangeTimesPlayerLevel = (player.getLevel()*4);
    var shieldRangeTimesPlayerLevel = (player.getLevel()*5);
    var magicDmgRangeTimesPlayerLevel = (player.getLevel()*10);
    switch (weapon)
    {
      // light
      case "Blow Darts":
        return (1 + lightWpnRangeTimesPlayerLevel);
      case "Throwing Knives":
        return (4 + lightWpnRangeTimesPlayerLevel);
      case "Throwing Axe":
        return (7 + lightWpnRangeTimesPlayerLevel);
      case "Crossbow":
        return (10 + lightWpnRangeTimesPlayerLevel);
      case "Javelin":
        return (13 + lightWpnRangeTimesPlayerLevel);
      case "Recurve Bow":
        return (16 + lightWpnRangeTimesPlayerLevel);
      case "Long Bow":
        return (19 + lightWpnRangeTimesPlayerLevel);
      case "Mystical Bow":
        return (22 + lightWpnRangeTimesPlayerLevel);
      // medium weapons
      case "Chain Whip":
        return (7 + mediumWpnRangeTimesPlayerLevel);
      case "Ring Sword":
        return (11 + mediumWpnRangeTimesPlayerLevel);
      case "Staff":
        return (15 + mediumWpnRangeTimesPlayerLevel);
      case "Cestus":
        return (19 + mediumWpnRangeTimesPlayerLevel);
      case "Spiked Chain":
        return (23 + mediumWpnRangeTimesPlayerLevel);
      case "Meteor Hammer":
        return (27 + mediumWpnRangeTimesPlayerLevel);
      case "Mace":
        return (31 + mediumWpnRangeTimesPlayerLevel);
      case "Flail":
        return (35 + mediumWpnRangeTimesPlayerLevel);
      // heavy weapons
      case "Shortsword":
        return (15 + heavyWpnRangeTimesPlayerLevel);
      case "War Hammer":
        return (20 + heavyWpnRangeTimesPlayerLevel);
      case "Spear":
        return (25 + heavyWpnRangeTimesPlayerLevel);
      case "Trident":
        return (30 + heavyWpnRangeTimesPlayerLevel);
      case "Scythe":
        return (35 + heavyWpnRangeTimesPlayerLevel);
      case "Battle Axe":
        return (40 + heavyWpnRangeTimesPlayerLevel);
      case "Broadsword":
        return (45 + heavyWpnRangeTimesPlayerLevel);
      case "Mystical Sword":
        return (50 + heavyWpnRangeTimesPlayerLevel);
      // shields
      case "Wood Shield":
        return (1 + shieldRangeTimesPlayerLevel);
      case "Iron Shield":
        return (7 + shieldRangeTimesPlayerLevel);
      case "Steel Shield":
        return (13 + shieldRangeTimesPlayerLevel);
      case "Silver Shield":
        return (19 + shieldRangeTimesPlayerLevel);
      case "Gold Shield":
        return (25 + shieldRangeTimesPlayerLevel);
      case "Mystical Shield":
        return (31 + shieldRangeTimesPlayerLevel);
      // magic
      case "Ice Blast":
        return (10 + magicDmgRangeTimesPlayerLevel);
      case "Fire Blast":
        return (25 + magicDmgRangeTimesPlayerLevel);
      case "Lightning Blast":
        return (40 + magicDmgRangeTimesPlayerLevel);
    }
  }
  price(weapon)
  {
    // return gold amount to buy weapon
    switch (weapon)
    {
      // light
      case "Blow Darts":
        return (0);
      case "Throwing Knives":
        return (10);
      case "Throwing Axe":
        return (20);
      case "Crossbow":
        return (30);
      case "Javelin":
        return (40);
      case "Recurve Bow":
        return (50);
      case "Long Bow":
        return (60);
      case "Mystical Bow":
        return (70);
      // medium weapons
      case "Chain Whip":
        return (0);
      case "Ring Sword":
        return (30);
      case "Staff":
        return (50);
      case "Cestus":
        return (70);
      case "Spiked Chain":
        return (90);
      case "Meteor Hammer":
        return (110);
      case "Mace":
        return (130);
      case "Flail":
        return (150);
      // heavy weapons
      case "Shortsword":
        return (0);
      case "War Hammer":
        return (70);
      case "Spear":
        return (100);
      case "Trident":
        return (130);
      case "Scythe":
        return (160);
      case "Battle Axe":
        return (190);
      case "Broadsword":
        return (220);
      case "Mystical Sword":
        return (250);
      // shields
      case "Wood Shield":
        return (0);
      case "Iron Shield":
        return (30);
      case "Steel Shield":
        return (60);
      case "Silver Shield":
        return (90);
      case "Gold Shield":
        return (120);
      case "Mystical Shield":
        return (150);
      // power ups
      case "Ice ":
        return (100);
      case "Fire ":
        return (300);
      case "Lightning ":
        return (500);
      // magic
      case "Ice Blast":
        return (200);
      case "Fire Blast":
        return (400);
      case "Lightning Blast":
        return (600);
    }
  }
}
