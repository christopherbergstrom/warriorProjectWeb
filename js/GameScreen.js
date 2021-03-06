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
  makeIntro(city, name)
  {
    // clears out old container
    $("body").append("<div class='container-fluid'></div>");
    $(".container-fluid").append("<div class='infoText'></div>");
    $.ajax(
    {
      url: "textFiles/intro.txt",
      success: function(result)
      {
        console.log("success");
        $(".infoText").html(result);
        $(".infoText").append("<div id='continue'>continue</div>");
        $("#continue").click(function()
        {
          city.start(name);
        });
      },
      error: function()
      {
        console.log("error")
        $(".infoText").html("Failed to load intro");
        $(".infoText").append("<div id='continue'>continue</div>");
        $("#continue").click(function()
        {
          city.start(name);
        });
      }
    });
  }
  makeEnding()
  {
    // clears out old container
    $("body").empty();
    $("body").append("<div class='container-fluid'></div>");
    $(".container-fluid").append("<div class='infoText'></div>");
    $.ajax(
    {
      url: "textFiles/ending.txt",
      success: function(result)
      {
        $(".infoText").html(result);
      },
      error: function()
      {
        $(".infoText").html("Failed to load ending");
      }
    });
  }
  makeTalkToLocals()
  {
    // clears out old container
    $(".container-fluid").empty();
    // row1
    $(".container-fluid").append("<div class='row' id='row1'></div>");
    $(".container-fluid").append("<div class='row' id='row2'></div>");
    // city ruler
    $("#row1").append("<div class='col-md-3 topAndBottom weaponCategory' id='cityRuler'>City Ruler</div>");
    // child
    $("#row1").append("<div class='col-md-3 topAndBottom weaponCategory' id='child'>Child</div>");
    // injured soldier
    $("#row1").append("<div class='col-md-3 topAndBottom weaponCategory' id='injuredSoldier'>Injured Soldier</div>");
    // wife of killed soldier
    $("#row1").append("<div class='col-md-3 topAndBottom weaponCategory' id='Widow'>Widow</div>");
    var count = 3;
    $("#row2").append("<div class='col-md-10 col-offset-1 infoText'></div>");
    // click on different locals
    $("#cityRuler").click(function()
    {
      removeText();
      if (count % 3 === 0)
        $(".infoText").html("I have unwillingly taken up the position of the ruler of this city due to the last king dying of old age. I never thought of him as a good king, especially with him being the first king from a foreign city.");
      else if (count % 3 === 1)
        $(".infoText").html("It is my burden now to look after the people of the city of Berg, although I’m afraid I can’t do much for them.");
      else
        $(".infoText").html("I put on a kind face for everyone, but I feel that I am dealing with the situation worse than any of them.");
      showText();
      count++;
    });
    $("#child").click(function()
    {
      removeText();
      if (count % 3 === 0)
        $(".infoText").html("I haven’t seen the monsters, but they sound scary.");
      else if (count % 3 === 1)
        $(".infoText").html("Please help us.");
      else
        $(".infoText").html("Sometimes I can’t sleep at night because I have nightmares about the monsters.");
      showText();
      count++;
    });
    $("#injuredSoldier").click(function()
    {
      removeText();
      if (count % 3 === 0)
        $(".infoText").html("It’s nice to meet you, I haven’t seen another soldier in a long time now.");
      else if (count % 3 === 1)
        $(".infoText").html("I was the last to try to fight off those nightmarish creatures, and the only one to survive...");
      else
        $(".infoText").html("I wish I could help you, but with the loss of my leg I’m no longer able to fight.");
        showText();
        count++;
    });
    $("#Widow").click(function()
    {
      removeText();
      if (count % 3 === 0)
        $(".infoText").html("Hello...");
      else if (count % 3 === 1)
        $(".infoText").html("I hope you can save what is left of our once great city.");
      else
        $(".infoText").html("You remind me of my husband, I hope his fate doesn’t become your own.");
      showText();
      count++;
    });
    function removeText()
    {
      $(".infoText").empty();
    }
    function showText()
    {
      $(".infoText").hide().fadeIn("medium");
    }
  }
  makeViewPlayerStats(player)
  {
    // clears out old container
    $(".container-fluid").empty();
    $(".container-fluid").append("<div id='playerStatsNotFight'></div>");
    // character: name, health, level, light, medium, heavy, shield, powerup, magic, dodge, gold
    // player stats
    $("#playerStatsNotFight").append("<div>"+player.getName()+"</div>");
    $("#playerStatsNotFight").append("<div>Level "+player.getLevel()+"</div>");
    $("#playerStatsNotFight").append("<div>HP "+player.getHealth()+"</div>");
    $("#playerStatsNotFight").append("<div>"+player.getLightWpn()+" "+player.getLightDmg()+"-"+(player.getLightDmg()+(player.getLightRng()-1))+"</div>");
    $("#playerStatsNotFight").append("<div>"+player.getMediumWpn()+" "+player.getMediumDmg()+"-"+(player.getMediumDmg()+(player.getMediumRng()-1))+"</div>");
    $("#playerStatsNotFight").append("<div>"+player.getHeavyWpn()+" "+player.getHeavyDmg()+"-"+(player.getHeavyDmg()+(player.getHeavyRng()-1))+"</div>");
    $("#playerStatsNotFight").append("<div>"+player.getShield()+" "+player.getShieldDmg()+"-"+(player.getShieldDmg()+(player.getShieldRng()-1))+"</div>");
    if (player.getPower() !== null)
      $("#playerStatsNotFight").append("<div>"+player.getPower()+" +"+player.getPowerDmg()+"</div>");
    if (player.getMagic() !== null)
      $("#playerStatsNotFight").append("<div>"+player.getMagic()+" "+player.getMagicDmg()+"-"+(player.getMagicDmg()+(player.getMagicRng()-1))+"</div>");
    $("#playerStatsNotFight").append("<div>Dodge "+player.getDodge()+"%</div>");
    $("#playerStatsNotFight").append("<div>Gold "+player.getGold()+"</div>");
  }
  makeViewInstructions()
  {
    // clears out old container
    $(".container-fluid").empty();
    $(".container-fluid").append("<div class='infoText'></div>");
    $.ajax(
    {
      url: "textFiles/instructions.txt",
      success: function(result)
      {
        $(".infoText").html(result);
      },
      error: function()
      {
        $(".infoText").html("Failed to load instructions");
      }
    });
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
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Blow Darts"+checkInventory("Blow Darts")+"<br>"+weaponShop.stats(player, "Blow Darts")+"-"+(weaponShop.stats(player, "Blow Darts")+(player.getLightRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Throwing Knives"+checkInventory("Throwing Knives")+"<br>"+weaponShop.stats(player, "Throwing Knives")+"-"+(weaponShop.stats(player, "Throwing Knives")+(player.getLightRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Throwing Axe"+checkInventory("Throwing Axe")+"<br>"+weaponShop.stats(player, "Throwing Axe")+"-"+(weaponShop.stats(player, "Throwing Axe")+(player.getLightRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Light'>Crossbow"+checkInventory("Crossbow")+"<br>"+weaponShop.stats(player, "Crossbow")+"-"+(weaponShop.stats(player, "Crossbow")+(player.getLightRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Javelin"+checkInventory("Javelin")+"<br>"+weaponShop.stats(player, "Javelin")+"-"+(weaponShop.stats(player, "Javelin")+(player.getLightRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Recurve Bow"+checkInventory("Recurve Bow")+"<br>"+weaponShop.stats(player, "Recurve Bow")+"-"+(weaponShop.stats(player, "Recurve Bow")+(player.getLightRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Long Bow"+checkInventory("Long Bow")+"<br>"+weaponShop.stats(player, "Long Bow")+"-"+(weaponShop.stats(player, "Long Bow")+(player.getLightRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Light'>Mystical Bow"+checkInventory("Mystical Bow")+"<br>"+weaponShop.stats(player, "Mystical Bow")+"-"+(weaponShop.stats(player, "Mystical Bow")+(player.getLightRng()-1))+" DMG</div>");
      showWeapons();
      buyEquip();
      changeClasses(false);
    }
    function medium()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Chain Whip"+checkInventory("Chain Whip")+"<br>"+weaponShop.stats(player, "Chain Whip")+"-"+(weaponShop.stats(player, "Chain Whip")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Ring Sword"+checkInventory("Ring Sword")+"<br>"+weaponShop.stats(player, "Ring Sword")+"-"+(weaponShop.stats(player, "Ring Sword")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Staff"+checkInventory("Staff")+"<br>"+weaponShop.stats(player, "Staff")+"-"+(weaponShop.stats(player, "Staff")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Medium'>Cestus"+checkInventory("Cestus")+"<br>"+weaponShop.stats(player, "Cestus")+"-"+(weaponShop.stats(player, "Cestus")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Spiked Chain"+checkInventory("Spiked Chain")+"<br>"+weaponShop.stats(player, "Spiked Chain")+"-"+(weaponShop.stats(player, "Spiked Chain")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Meteor Hammer"+checkInventory("Meteor Hammer")+"<br>"+weaponShop.stats(player, "Meteor Hammer")+"-"+(weaponShop.stats(player, "Meteor Hammer")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Mace"+checkInventory("Mace")+"<br>"+weaponShop.stats(player, "Mace")+"-"+(weaponShop.stats(player, "Mace")+(player.getMediumRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Medium'>Flail"+checkInventory("Flail")+"<br>"+weaponShop.stats(player, "Flail")+"-"+(weaponShop.stats(player, "Flail")+(player.getMediumRng()-1))+" DMG</div>");
      showWeapons();
      buyEquip();
      changeClasses(false);
    }
    function heavy()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>Shortsword"+checkInventory("Shortsword")+"<br>"+weaponShop.stats(player, "Shortsword")+"-"+(weaponShop.stats(player, "Shortsword")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>War Hammer"+checkInventory("War Hammer")+"<br>"+weaponShop.stats(player, "War Hammer")+"-"+(weaponShop.stats(player, "War Hammer")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>Spear"+checkInventory("Spear")+"<br>"+weaponShop.stats(player, "Spear")+"-"+(weaponShop.stats(player, "Spear")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-3 weaponSelect Heavy'>Trident"+checkInventory("Trident")+"<br>"+weaponShop.stats(player, "Trident")+"-"+(weaponShop.stats(player, "Trident")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Scythe"+checkInventory("Scythe")+"<br>"+weaponShop.stats(player, "Scythe")+"-"+(weaponShop.stats(player, "Scythe")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Battle Axe"+checkInventory("Battle Axe")+"<br>"+weaponShop.stats(player, "Battle Axe")+"-"+(weaponShop.stats(player, "Battle Axe")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Broadsword"+checkInventory("Broadsword")+"<br>"+weaponShop.stats(player, "Broadsword")+"-"+(weaponShop.stats(player, "Broadsword")+(player.getHeavyRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-3 weaponSelect Heavy'>Mystical Sword"+checkInventory("Mystical Sword")+"<br>"+weaponShop.stats(player, "Mystical Sword")+"-"+(weaponShop.stats(player, "Mystical Sword")+(player.getHeavyRng()-1))+" DMG</div>");
      showWeapons();
      buyEquip();
      changeClasses(false);
    }
    function shield()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect Shield'>Wood Shield"+checkInventory("Wood Shield")+"<br>"+weaponShop.stats(player, "Wood Shield")+"-"+(weaponShop.stats(player, "Wood Shield")+(player.getShieldRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Shield'>Iron Shield"+checkInventory("Iron Shield")+"<br>"+weaponShop.stats(player, "Iron Shield")+"-"+(weaponShop.stats(player, "Iron Shield")+(player.getShieldRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Shield'>Steel Shield"+checkInventory("Steel Shield")+"<br>"+weaponShop.stats(player, "Steel Shield")+"-"+(weaponShop.stats(player, "Steel Shield")+(player.getShieldRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect Shield'>Silver Shield"+checkInventory("Silver Shield")+"<br>"+weaponShop.stats(player, "Silver Shield")+"-"+(weaponShop.stats(player, "Silver Shield")+(player.getShieldRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect Shield'>Gold Shield"+checkInventory("Gold Shield")+"<br>"+weaponShop.stats(player, "Gold Shield")+"-"+(weaponShop.stats(player, "Gold Shield")+(player.getShieldRng()-1))+" DMG</div>");
      $("#row4").append("<div class='col-md-4 weaponSelect Shield'>Mystical Shield"+checkInventory("Mystical Shield")+"<br>"+weaponShop.stats(player, "Mystical Shield")+"-"+(weaponShop.stats(player, "Mystical Shield")+(player.getShieldRng()-1))+" DMG</div>");
      showWeapons();
      buyEquip();
      changeClasses(false);
    }
    function power()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect Power'>Ice"+checkInventory("Ice")+"<br>+"+weaponShop.stats(player, "Ice")+" DMG</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Power'>Fire"+checkInventory("Fire")+"<br>+"+weaponShop.stats(player, "Fire")+" DMG</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Power'>Lightning"+checkInventory("Lightning")+"<br>+"+weaponShop.stats(player, "Lightning")+" DMG</div>");
      showWeapons();
      buyEquip();
      changeClasses(false);
    }
    function magic()
    {
      removeWeapons();
      $("#row3").append("<div class='col-md-4 weaponSelect Magic'>Ice Blast"+checkInventory("Ice Blast")+"<br>"+weaponShop.stats(player, "Ice Blast")+"-"+(weaponShop.stats(player, "Ice Blast")+(player.getMagicRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Magic'>Fire Blast"+checkInventory("Fire Blast")+"<br>"+weaponShop.stats(player, "Fire Blast")+"-"+(weaponShop.stats(player, "Fire Blast")+(player.getMagicRng()-1))+" DMG</div>");
      $("#row3").append("<div class='col-md-4 weaponSelect Magic'>Lightning Blast"+checkInventory("Lightning Blast")+"<br>"+weaponShop.stats(player, "Lightning Blast")+"-"+(weaponShop.stats(player, "Lightning Blast")+(player.getMagicRng()-1))+" DMG</div>");
      showWeapons();
      buyEquip();
      changeClasses(false);
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
        weapon.splice(weapon.length-3, weapon.length);
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
            $("#playerGoldWeaponShop").html("Gold "+player.getGold());
            player.weapons.push({name:weapon, dmg:(weaponShop.stats(player, weapon))});
            console.log(player.weapons);
            // this adds the <br> and dmg ranges
            var endHTML = $(this).html().split(" ");
            endHTML = endHTML[endHTML.length-2];
            console.log(endHTML);
            // update inner html here (10 gold vs 0 gold)
            $(this).html(weapon+" 0 "+endHTML+" DMG");
            equipWeapon($(this), weapon);
            changeClasses($(this));
          }
          else
          {
            // implement notification here
            $("#playerGoldWeaponShop").css("color", "red");
            window.setTimeout(function()
            {
              $("#playerGoldWeaponShop").css({"color": "yellow", "transition": ".15s"});
            }, 750);
            console.log("not enough gold");
            console.log("player gold: "+player.getGold());
            console.log("cost: "+weaponShop.price(weapon));
          }
        }
        else
        {
          // weapon is already purchased, equips weapon clicked on
          console.log("already have this weapon");
          equipWeapon($(this), weapon);
          changeClasses($(this));
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
    function changeClasses(div)
    {
      if (div)
      {
        $(".weaponSelect").removeClass("weaponEquipped");
        div.addClass("weaponEquipped");
      }
      else
      {
        // weapon is equiped add weaponEquipped class
        $(".weaponSelect").each(function()
        {
          if ($(this).html().includes(player.getLightWpn()) || $(this).html().includes(player.getMediumWpn()) || $(this).html().includes(player.getHeavyWpn()) || $(this).html().includes(player.getShield()) || $(this).html().includes(player.getPower()) || $(this).html().includes(player.getMagic()))
          {
            $(this).addClass("weaponEquipped");
          }
        });
      }
    }
  }
  clearScreen()
  {
    $("body").empty();
  }
}
