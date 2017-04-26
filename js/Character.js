class Character
{
  // Wpn = weapon
  // Dmg = damage
  // Rng = range
  // Light weapons have range of 2
  // Damage is calculated by: passing minimum damage to get damage method and add to random number multiply range to get damage inflicted
  // Ex: Blow Darts damagr = 1-2
  // Blow Darts attack damage = (1 + (Math.floor(Math.random()*2)))
  constructor(name, health, lightWpn, lightDmg, lightRng, mediumWpn, mediumDmg, mediumRng, heavyWpn, heavyDmg, heavyRng, shield, shieldDmg, shieldRng, power, powerDmg, magic, magicDmg, magicRng, dodge, isDragon, fireBreath, fireBreathDmg, fireBreathRng, gold, level)
  {
    this.name = name;
    this.health = health;
    this.lightWpn = lightWpn;
    this.lightDmg = lightDmg;
    this.lightRng = lightRng;
    this.mediumWpn = mediumWpn;
    this.mediumDmg = mediumDmg;
    this.mediumRng = mediumRng;
    this.heavyWpn = heavyWpn;
    this.heavyDmg = heavyDmg;
    this.heavyRng = heavyRng;
    this.shield = shield;
    this.shieldDmg = shieldDmg;
    this.shieldRng = shieldRng;
    this.power = power;
    this.powerDmg = powerDmg;
    this.magic = magic;
    this.magicDmg = magicDmg;
    this.magicRng = magicRng;
    this.dodge = dodge;
    this.isDragon = isDragon;
    this.fireBreath = fireBreath;
    this.fireBreathDmg = fireBreathDmg;
    this.fireBreathRng = fireBreathRng;
    this.gold = gold;
    this.level = level;
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
        if ((this.health - health) < 0)
          this.health = 0;
        else
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
  getLightRng()
  {
    return this.lightRng;
  }
  getLightDmgTotal()
  {
    return (this.getLightDmg()+(Math.floor(Math.random()*this.getLightRng())));
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
  getMediumRng()
  {
    return this.mediumRng;
  }
  getMediumDmgTotal()
  {
    return (this.getMediumDmg()+(Math.floor(Math.random()*this.getMediumRng())));
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
  getHeavyRng()
  {
    return this.heavyRng;
  }
  getHeavyDmgTotal()
  {
    return (this.getHeavyDmg()+(Math.floor(Math.random()*this.getHeavyRng())));
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
  getShieldRng()
  {
    return this.shieldRng;
  }
  getShieldDmgTotal()
  {
    return (this.getShieldDmg()+(Math.floor(Math.random()*this.getShieldRng())));
  }
  // power up
  getPower()
  {
    return this.power;
  }
  setPower(power)
  {
    if(typeof power === "string")
    {
      this.power = power;
    }
  }
  getPowerDmg()
  {
    return this.powerDmg;
  }
  setPowerDmg(powerDmg)
  {
    if(typeof powerDmg === "number")
    {
      this.powerDmg = powerDmg;
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
      this.magic = magic;
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
  getMagicRng()
  {
    return this.magicRng;
  }
  getMagicDmgTotal()
  {
    return (this.getMagicDmg()+(Math.floor(Math.random()*this.getMagicRng())));
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
  getDodged()
  {
    // if this random num is <= dodge % of character return true
    if ((1+(Math.floor(Math.random()*100))) <= this.getDodge())
      return true;
    else
      return false;
  }
  // is dragon?
  isCharacterDragon()
  {
    return(this.isDragon);
  }
  getFireBreath()
  {
    if(this.isCharacterDragon())
    {
      return this.fireBreath;
    }
  }
  setFireBreath(fireBreath)
  {
    if(this.isCharacterDragon())
    {
      if(typeof fireBreath === "string")
      {
        this.fireBreath = fireBreath;
      }
    }
  }
  getFireBreathDmg()
  {
    if(this.isCharacterDragon())
    {
      return this.fireBreathDmg;
    }
  }
  setFireBreathDmg(fireBreathDmg)
  {
    if(this.isCharacterDragon())
    {
      if(typeof fireBreathDmg === "number")
      {
        this.fireBreathDmg = fireBreathDmg;
      }
    }
  }
  getFireBreathRng()
  {
    if(this.isCharacterDragon())
    {
      return this.fireBreathRng;
    }
  }
  getFireBreathDmgTotal()
  {
    if(this.isCharacterDragon())
    {
      return (this.getFireBreathDmg()+(Math.floor(Math.random()*this.getFireBreathRng())));
    }
  }
  // gold
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
  getLevel()
  {
    return this.level;
  }
  setLevel(level)
  {
    this.level = level;
  }
  getWeapons()
  {
    return this.weapons;
  }
  addWeapons(weapon)
  {
    this.weapons.push(weapon);
  }
}
