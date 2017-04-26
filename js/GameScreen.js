class GameScreen
{
  makeGameScreen()
  {
    this.clearScreen();
    // make divs for game screen
    // playerStats = left bar
    // enemyStats = right bar
    // screen = top middle bar where buttons are
    // actions = bottom bar where past actions show
    $("body").append("<div id='playerStats'></div>");
    $("body").append("<div id='enemyStats'></div>");
    $("body").append("<div id='screen'></div>");
    $("body").append("<div id='actions'></div>");
  }
  makeCity()
  {
    // this.clearScreen();
    $("body").empty();
    var battle = "<div class='col-md-4 topAndBottom topButtons text' id='battle'>Battle</div>";
    var practiceArena = "<div class='col-md-4 topAndBottom topButtons text' id='practiceArena'>Practice Arena</div>";
    var weaponShop = "<div class='col-md-4 topAndBottom topButtons text' id='weaponShop'>Weapon Shop</div>";
    var talkToLocals = "<div class='col-md-4 topAndBottom bottomButtons text' id='talkToLocals'>Talk to Locals</div>";
    var instructions = "<div class='col-md-4 topAndBottom bottomButtons text' id='instructions'>Instructions</div>";
    var playerStatsBtn = "<div class='col-md-4 topAndBottom bottomButtons text' id='playerStatsBtn'>Player Stats</div>";
    $("body").append("<div class='container-fluid'></div>");
    $(".container-fluid").append("<div class='row'>"+battle+practiceArena+weaponShop+"</div>");
    $(".container-fluid").append("<div class='row'>"+talkToLocals+playerStatsBtn+instructions+"</div>");
  }
  makeFightSelection(level)
  {
    // clears out old container
    $(".container-fluid").empty();
    var row1 = [];
    var row2 = [];
    var row3 = [];
    var row4 = [];
    if (level >= 1)
      row1.push("<div class='col-md-4 topAndBottom enemySelection' id='one'>Skeleton Archer</div>");
    if (level >= 2)
      row1.push("<div class='col-md-4 topAndBottom enemySelection' id='two'>Undead Soldier</div>");
    if (level >= 3)
      row1.push("<div class='col-md-4 topAndBottom enemySelection' id='three'>Harpy</div>");
    if (level >= 4)
      row2.push("<div class='col-md-4 topAndBottom enemySelection' id='four'>Gorgon</div>");
    if (level >= 5)
      row2.push("<div class='col-md-4 topAndBottom enemySelection' id='five'>Centaur</div>");
    if (level >= 6)
      row2.push("<div class='col-md-4 topAndBottom enemySelection' id='six'>Cerberus Dog</div>");
    if (level >= 7)
      row3.push("<div class='col-md-4 topAndBottom enemySelection' id='seven'>Giant Spider</div>");
    if (level >= 8)
      row3.push("<div class='col-md-4 topAndBottom enemySelection' id='eight'>Mintaur</div>");
    if (level >= 9)
      row3.push("<div class='col-md-4 topAndBottom enemySelection' id='nine'>Cyclops</div>");
    if (level >= 10)
      row4.push("<div class='col-md-12 topAndBottom enemySelection' id='ten'>Dragon</div>");
    $(".container-fluid").append("<div class='row' id='row1'></div>");
    row1.forEach(function(item)
    {
      $("#row1").append(item);
    });
    $(".container-fluid").append("<div class='row' id='row2'></div>");
    row2.forEach(function(item)
    {
      $("#row2").append(item);
    });
    $(".container-fluid").append("<div class='row' id='row3'></div>");
    row3.forEach(function(item)
    {
      $("#row3").append(item);
    });
    $(".container-fluid").append("<div class='row' id='row4'></div>");
    row4.forEach(function(item)
    {
      $("#row4").append(item);
    });
  }
  makeWeaponShop(player, weaponShop)
  {
    // clears out old container
    $(".container-fluid").empty();
    // row1
    $(".container-fluid").append("<div class='row' id='row1'></div>");
    // light weapons
    $("#row1").append("<div class='col-md-4 topAndBottom weaponCategory' id='light'>Light Weapons</div>");
    // medium weapons
    $("#row1").append("<div class='col-md-4 topAndBottom weaponCategory' id='medium'>Medium Weapons</div>");
    // heavy weapons
    $("#row1").append("<div class='col-md-4 topAndBottom weaponCategory' id='heavy'>Heavy Weapons</div>");
    // row2
    $(".container-fluid").append("<div class='row' id='row2'></div>");
    // shields
    $("#row2").append("<div class='col-md-4 topAndBottom weaponCategory' id='shield'>Shields</div>");
    // power ups
    $("#row2").append("<div class='col-md-4 topAndBottom weaponCategory' id='power'>Power Ups</div>");
    // magic
    $("#row2").append("<div class='col-md-4 topAndBottom weaponCategory' id='magic'>Magic</div>");
    // row3
    $(".container-fluid").append("<div class='row' id='row3'></div>");
    // row4
    $(".container-fluid").append("<div class='row' id='row4'></div>");
    $("#light").click(light);
    $("#medium").click(medium);
    $("#heavy").click(heavy);
    $("#shield").click(shield);
    $("#power").click(power);
    $("#magic").click(magic);
    function light()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Blow Darts"+checkInventory("Blow Darts")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Throwing Knives"+checkInventory("Throwing Knives")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Throwing Axe"+checkInventory("Throwing Axe")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Crossbow"+checkInventory("Crossbow")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Javelin"+checkInventory("Javelin")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Recurve Bow"+checkInventory("Recurve Bow")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Long Bow"+checkInventory("Long Bow")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Mystical Bow"+checkInventory("Mystical Bow")+"</div>");
      showWeapons();
      buyEquip();
    }
    function medium()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Chain Whip"+checkInventory("Chain Whip")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Ring Sword"+checkInventory("Ring Sword")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Staff"+checkInventory("Staff")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Cestus"+checkInventory("Cestus")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Spiked Chain"+checkInventory("Spiked Chain")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Meteor Hammer"+checkInventory("Meteor Hammer")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Mace"+checkInventory("Mace")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Flail"+checkInventory("Flail")+"</div>");
      showWeapons();
      buyEquip();
    }
    function heavy()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>Shortsword"+checkInventory("Shortsword")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>War Hammer"+checkInventory("War Hammer")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>Spear"+checkInventory("Spear")+"</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>Trident"+checkInventory("Trident")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Scythe"+checkInventory("Scythe")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Battle Axe"+checkInventory("Battle Axe")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Broadsword"+checkInventory("Broadsword")+"</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Mystical Sword"+checkInventory("Mystical Sword")+"</div>");
      showWeapons();
      buyEquip();
    }
    function shield()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect Shield'>Wood Shield"+checkInventory("Wood Shield")+"</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Shield'>Iron Shield"+checkInventory("Iron Shield")+"</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Shield'>Steel Shield"+checkInventory("Steel Shield")+"</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect Shield'>Silver Shield"+checkInventory("Silver Shield")+"</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect Shield'>Gold Shield"+checkInventory("Gold Shield")+"</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect Shield'>Mystical Shield"+checkInventory("Mystical Shield")+"</div>");
      showWeapons();
      buyEquip();
    }
    function power()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect Power'>Ice"+checkInventory("Ice")+"</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Power'>Fire"+checkInventory("Fire")+"</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Power'>Lightning"+checkInventory("Lightning")+"</div>");
      showWeapons();
      buyEquip();
    }
    function magic()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect Magic'>Ice Blast"+checkInventory("Ice Blast")+"</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Magic'>Fire Blast"+checkInventory("Fire Blast")+"</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Magic'>Lightning Blast"+checkInventory("Lightning Blast")+"</div>");
      showWeapons();
      buyEquip();
    }
    function removeWeapons()
    {
      $("#row3").empty();
      $("#row4").empty();
    }
    function showWeapons()
    {
      $("#row3").hide().fadeIn("medium");
      $("#row4").hide().fadeIn("medium");
    }
    function buyEquip()
    {
      // move this to weaponShop.buy?
      $(".weaponSelect").click(function()
      {
        // console.log(player);
        // console.log("player level:"+player.getLevel());
        var weapon = $(this).html().split(" ");
        console.log(weapon);
        weapon.splice(weapon.length-2, weapon.length);
        console.log(weapon);
        weapon = weapon.join();
        console.log(weapon);
        console.log(typeof(weapon));
        weapon = weapon.replace(/,/g, " ");
        console.log(weapon);
        var count = 0;
        for (var i = 0; i < player.weapons.length; i++)
        {
          // console.log($(this).html() === player.weapons[i].name);
          // if weapon clicked on doesn't match player weapon inventory count ++
          if (weapon !== player.weapons[i].name)
            count++;
        }
        // if count === number of purchased player weapons, the clicked on weapon has not been purchased
        if (count === player.weapons.length)
        {
          // check if player has enough gold, then purchase
          if (player.getGold() >= (weaponShop.price(weapon)))
          {
            console.log("purchasing");
            player.setGold("sub", weaponShop.price(weapon));
            player.weapons.push({name:weapon, dmg:(weaponShop.stats(player, weapon))});
            // equip select weapon here, different css class for selected weapon?
            
            console.log(player.weapons);
            // update inner html here (10 gold vs 0 gold)
            $(this).html(weapon+" 0 Gold");
            equipWeapon($(this), weapon);
          }
          else
          {
            console.log("not enough gold");
            console.log("player gold: "+player.getGold());
            console.log("cost: "+weaponShop.price(weapon));
          }
        }
        else
        {
          console.log("already have this weapon");
          equipWeapon($(this), weapon);
          // update inner html here equiped? or change css here?
          
        }
        
      });
    }
    function checkInventory(weapon)
    {
      var count = 0;
      for (var i = 0; i < player.weapons.length; i++)
      {
        // if weapon clicked on doesn't match player weapon inventory count ++
        if (weapon !== player.weapons[i].name)
          count++;
      }
      // if count === number of purchased player weapons, the clicked on weapon has not been purchased
      if (count === player.weapons.length)
      {
        return (" "+(weaponShop.price(weapon))+" Gold");
      }
      // weapon has been purchased already
      else
      {
        return (" "+0+" Gold");
      }
    }
    function equipWeapon(weaponBtn, weapon)
    {
      console.log(weaponBtn);
      console.log(weapon);
      // equip light wpn
      if (weaponBtn.hasClass("Light"))
      {
        console.log("has light");
        player.setLightWpn(weapon);
        player.setLightDmg(weaponShop.stats(player, weapon));
      }
      else if (weaponBtn.hasClass("Medium"))
      {
        console.log("has Medium");
        player.setMediumWpn(weapon);
        player.setMediumDmg(weaponShop.stats(player, weapon));
      }
      else if (weaponBtn.hasClass("Heavy"))
      {
        console.log("has Heavy");
        player.setHeavyWpn(weapon);
        player.setHeavyDmg(weaponShop.stats(player, weapon));
      }
      else if (weaponBtn.hasClass("Shield"))
      {
        console.log("has Shield");
        player.setShield(weapon);
        player.setShieldDmg(weaponShop.stats(player, weapon));
      }
      else if (weaponBtn.hasClass("Power"))
      {
        console.log(weaponShop.stats(player, weapon));
        console.log("has Power");
        player.setPower(weapon);
        player.setPowerDmg(weaponShop.stats(player, weapon));
        console.log(player.getPowerDmg());
      }
      else if (weaponBtn.hasClass("Magic"))
      {
        console.log("has Magic");
        player.setMagic(weapon);
        player.setMagicDmg(weaponShop.stats(player, weapon));
      }
    }
  }
  clearScreen()
  {
    $("body").empty();
  }
}
