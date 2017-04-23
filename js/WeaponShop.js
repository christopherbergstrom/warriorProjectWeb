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
    // light weapons
    if (weapon === "Blow Darts")
      return (1 + (player.getLevel()*2));
    // medium weapons
    
    // heavy weapons
    
    // shields
  }
}
