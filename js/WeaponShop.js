class WeaponShop
{
  constructor(player)
  {
    this.player = player;
  }
  buy()
  {
    
  }
  loadout()
  {
    
  }
  stats(weapon)
  {
    var lightWpnRangeTimesPlayerLevel = (this.player.getLevel()*2);
    var mediumWpnRangeTimesPlayerLevel = (this.player.getLevel()*3);
    var heavyWpnRangeTimesPlayerLevel = (this.player.getLevel()*4);
    var shieldRangeTimesPlayerLevel = (this.player.getLevel()*5);
    var magicDmgRangeTimesPlayerLevel = (this.player.getLevel()*10);
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
      case "Ice Blast":
        return (10 + magicDmgRangeTimesPlayerLevel);
      case "Fire Blast":
        return (25 + magicDmgRangeTimesPlayerLevel);
      case "Lightning Blast":
        return (40 + magicDmgRangeTimesPlayerLevel);
    }
  }
}
