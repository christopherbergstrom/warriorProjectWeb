class Character
{
  // Wpn = weapon
  // Dmg = damage
  // Rng = range
  // Light weapons have range of 2
  // Damage is calculated by: passing minimum damage to get damage method and add to random number multiply range to get damage inflicted
  // Ex: Blow Darts damagr = 1-2
  // Blow Darts attack damage = (1 + (Math.floor(Math.random()*2)))
  constructor(name, health, lightWpn, lightDmg, lightWpnDmgRng, mediumWpn, mediumDmg, mediumWpnDmgRng, heavyWpn, heavyDmg, heavyWpnDmgRng, shield, shieldDmg, shieldDmgRng, power, magic, magicDmg, magicDmgRng, dodge, isDragon, fireBreath, fireBreathDmg, fireBreathDmgRng, gold)
  {
    this.name = name;
    this.health = health;
    this.lightWpn = lightWpn;
    this.lightDmg = lightDmg;
    this.lightWpnDmgRng = lightWpnDmgRng;
    this.mediumWpn = mediumWpn;
    this.mediumDmg = mediumDmg;
    this.mediumWpnDmgRng = mediumWpnDmgRng;
    this.heavyWpn = heavyWpn;
    this.heavyDmg = heavyDmg;
    this.heavyWpnDmgRng = heavyWpnDmgRng;
    this.shield = shield;
    this.shieldDmg = shieldDmg;
    this.shieldDmgRng = shieldDmgRng;
    this.power = power;
    this.magic = magic;
    this.magicDmg = magicDmg;
    this.magicDmgRng = magicDmgRng;
    this.dodge = dodge;
    this.isDragon = isDragon;
    this.fireBreath = fireBreath;
    this.fireBreathDmg = fireBreathDmg;
    this.fireBreathDmgRng = fireBreathDmgRng;
    this.gold = gold;
  }
  // name
  getName()
  {
    return this.name;
  }
  setName(name)
  {
    if(typeof name === "string")
    {
      this.name = name;
    }
  }
  // health
  getHealth()
  {
    return this.health;
  }
  setHealth(type, health)
  {
    if(typeof health === "number")
    {
      if(type === "add")
      {
        this.health += health;
      }
      else if(type === "sub")
      {
        this.health -= health;
      }
      else
      {
        this.health = health;
      }
    }
  }
  // light weapon
  getLightWpn()
  {
    return this.lightWpn;
  }
  setLightWpn(lightWpn)
  {
    if(typeof lightWpn === "string")
    {
      this.lightWpn = lightWpn;
    }
  }
  getLightDmg()
  {
    return this.lightDmg;
  }
  setLightDmg(lightDmg)
  {
    if(typeof lightDmg === "number")
    {
      this.lightDmg = lightDmg;
    }
  }
  upgradeLightDmg()
  {
    if(typeof lightDmg === "number")
    {
      this.lightDmg += lightDmg;
    }
  }
  // medium weapon
  getMediumWpn()
  {
    return this.mediumWpn;
  }
  setMediumWpn(mediumWpn)
  {
    if(typeof mediumWpn === "string")
    {
      this.mediumWpn = mediumWpn;
    }
  }
  getMediumDmg()
  {
    return this.mediumDmg;
  }
  setMediumDmg(mediumDmg)
  {
    if(typeof mediumDmg === "number")
    {
      this.mediumDmg = mediumDmg;
    }
  }
  upgradeMediumDmg()
  {
    if(typeof mediumDmg === "number")
    {
      this.mediumDmg += mediumDmg;
    }
  }
  // heavy weapon
  getHeavyWpn()
  {
    return this.heavyWpn;
  }
  setHeavyWpn(heavyWpn)
  {
    if(typeof heavyWpn === "string")
    {
      this.heavyWpn = heavyWpn;
    }
  }
  getHeavyDmg()
  {
    return this.heavyDmg;
  }
  setHeavyDmg(heavyDmg)
  {
    if(typeof heavyDmg === "number")
    {
      this.heavyDmg = heavyDmg;
    }
  }
  upgradeHeavyDmg()
  {
    if(typeof heavyDmg === "number")
    {
      this.heavyDmg += heavyDmg;
    }
  }
  // shield
  getShield()
  {
    return this.shield;
  }
  setShield(shield)
  {
    if(typeof shield === "string")
    {
      this.shield = shield;
    }
  }
  getShieldDmg()
  {
    return this.shieldDmg;
  }
  setShieldDmg(shieldDmg)
  {
    if(typeof shieldDmg === "number")
    {
      this.shieldDmg = shieldDmg;
    }
  }
  upgradeShieldDmg()
  {
    if(typeof shieldDmg === "number")
    {
      this.shieldDmg += shieldDmg;
    }
  }
  // power up
  getPower()
  {
    return(this.power);
  }
  setPower(power)
  {
    if(typeof power === "string")
    {
      this.power = power;
    }
  }
  // magic
  getMagic()
  {
    return this.magic;
  }
  setMagic(magic)
  {
    if(typeof magic === "string")
    {
      this.magic = lighmagict;
    }
  }
  getMagicDmg()
  {
    return this.magicDmg;
  }
  setMagicDmg(magicDmg)
  {
    if(typeof magicDmg === "number")
    {
      this.magicDmg = magicDmg;
    }
  }
  upgradeMagicDmg()
  {
    if(typeof magicDmg === "number")
    {
      this.magicDmg += magicDmg;
    }
  }
  //dodge
  getDodge()
  {
    return this.dodge;
  }
  setDodge(dodge)
  {
    if(typeof dodge === "number")
    {
      this.dodge = dodge;
    }
  }
  upgradeDodge(dodge)
  {
    if(typeof dodge === "number")
    {
      this.dodge += dodge;
    }
  }
  // is dragon?
  getFireBreath()
  {
    if(this.isDragon)
    {
      return this.fireBreath;
    }
  }
  setFireBreath(fireBreath)
  {
    if(this.isDragon)
    {
      if(typeof fireBreath === "string")
      {
        this.fireBreath = fireBreath;
      }
    }
  }
  getFireBreathDmg()
  {
    if(this.isDragon)
    {
      return this.fireBreathDmg;
    }
  }
  setFireBreathDmg(fireBreathDmg)
  {
    if(this.isDragon)
    {
      if(typeof fireBreathDmg === "number")
      {
        this.fireBreathDmg = fireBreathDmg;
      }
    }
  }
  getGold()
  {
    return this.gold;
  }
  setGold(type, gold)
  {
    if(typeof gold === "number")
    {
      if(type === "add")
      {
        this.gold += gold;
      }
      else if(type === "sub")
      {
        this.gold -= gold;
      }
      else
      {
        this.gold = gold;
      }
    }
  }
}
