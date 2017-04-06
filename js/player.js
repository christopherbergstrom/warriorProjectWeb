class Player
{
  constructor(name, weapon, weaponRange)
  {
    this.name = name;
    this.weapon = weapon;
    this.weaponRange = weaponRange;
  }
  getName()
  {
    return this.name;
  }
  getWeapon()
  {
    return this.weapon;
  }
  getWeaponRange()
  {
    return this.weaponRange;
  }
  setName(name)
  {
    if(typeof name === "string")
    {
      this.name = name;
    }
  }
  setWeapon(weapon)
  {
    if(typeof weapon === "string")
    {
      this.weapon = weapon;
    }
  }
  setWeaponRange(range)
  {
    if(typeof range === "number")
    {
      this.weaponRange = range;
    }
  }
}