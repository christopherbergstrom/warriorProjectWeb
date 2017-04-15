class Fight
{
  // player fights enemy
  // this is where all dom manipulation for fight happens
  fight(player, enemy)
  {
    var magicCount = 4;
    var magicAttack = false;
    var doubleDamage = 1;
    var doubleLight = 1;
    var doubleMedium = 1;
    var doubleHeavy = 1;
    var ultimateBlock = 1;
    var critical = 1;
    var doubleGold = 1;
    var actionsArray = [];
    // add action buttons to screen
    addButtons();
    // add player and enemy stats to left and right bars
    addStats();
    gameLoop();
    // implement dodge and attack with coresponding weapon, only inflict damage if dodge was successful?
    function gameLoop()
    {
      if(player.getHealth() > 0)
      {
        // magic can only be used once every 4 moves
        if (magicAttack === false)
        {
          $("#attackMagic").removeClass("click").unbind("click");
          $("#attackMagic").addClass("noClick").unbind("click");
          magicCount++;
        }
        if (magicCount % 4 === 0)
        {
          magicAttack = true;
          $("#attackMagic").removeClass("noClick").unbind("click");
          $("#attackMagic").addClass("click").unbind("click");
        }
        resetSpecialRounds();
        specialRounds();
        playerAttack(true, (enemy.getName() !== "Harpy"), (enemy.getName() !== "Harpy"), magicAttack);
      }
      else
      {
        console.log("player died");
        // implement back to MainGame here
      }
    }
    // if these arguments are true, player can click on buttons
    // player attacks here
    function playerAttack(light, medium, heavy, magic)
    {
      if (light)
      {
        $("#attackLight").click(function()
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getLightWpn()+"</div>");
          
          // send damage to enemyDefend
          // normal damage multiplied by special rounds
          enemyDefend((player.getLightDmgTotal()*doubleDamage*doubleLight*critical));
        });
      }
      if (medium)
      {
        $("#attackMedium").click(function()
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getMediumWpn()+"</div>");
          
          // send damage to enemyDefend
          // normal damage multiplied by special rounds
          enemyDefend((player.getMediumDmgTotal()*doubleDamage*doubleMedium*critical));
        });
      }
      if (heavy)
      {
        $("#attackHeavy").click(function()
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getHeavyWpn()+"</div>");
          
          // send damage to enemyDefend
          // normal damage multiplied by special rounds
          enemyDefend((player.getHeavyDmgTotal()*doubleDamage*doubleHeavy*critical));
        });
      }
      if (magic)
      {
        $("#attackMagic").click(function()
        {
          magicAttack = false;
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getMagic()+"</div>");
          
          // send damage to enemyDefend
          // normal damage multiplied by special rounds
          enemyDefend((player.getMagicDmgTotal()*doubleDamage*critical));
        });
      }
    }
    // player defends here
    function playerDefend(receivingDmg)
    {
      // can only click on defend options
      $("#attackMagic").removeClass("click").unbind("click");
      $("#attackMagic").addClass("noClick").unbind("click");
      toggleClasses();
      $("#block").click(function()
      {
        var damageBlocked = player.getShieldDmgTotal();
        if (damageBlocked >= receivingDmg)
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" blocks "+receivingDmg+" damage with "+player.getShield()+"</div>");
          
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts 0 damage to "+player.getName()+"</div>");
          
          showHealthLevels();
          // print actions
          actionPrintouts();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
        else
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" blocks "+damageBlocked+" damage with "+player.getShield()+"</div>");
          
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts "+(receivingDmg-damageBlocked)+" damage to "+player.getName()+"</div>");
          
          player.setHealth("sub", (receivingDmg-damageBlocked));
          showHealthLevels();
          // print actions
          actionPrintouts();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
      });
      $("#dodge").click(function()
      {
        // player dodge successful
        if (player.getDodged())
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" successfully dodged the attack</div>");
          
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts 0 damage to "+player.getName()+"</div>");
          
          showHealthLevels();
          // print actions
          actionPrintouts();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
        // player dodge unsuccessful
        else
        {
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" unsuccessfully dodged the attack</div>");
          
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts "+receivingDmg+" damage to "+player.getName()+"</div>");
          
          player.setHealth("sub", receivingDmg);
          showHealthLevels();
          // print actions
          actionPrintouts();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
      });
    }
    // enemy attacks here
    function enemyAttack()
    {
      if (enemy.getHealth() > 0)
      {
        // chooses which attack enemy uses
        var whichAttack;
        // if enemy is dragon choose 1-4 attackd else choose 1-3
        if (enemy.isCharacterDragon())
          whichAttack = Math.floor(Math.random()*4);
        else
          whichAttack = Math.floor(Math.random()*3);
        // attack based on whichAttack number
        if (whichAttack === 0)
          enemyAttackLight();
        else if (whichAttack === 1)
          enemyAttackMedium();
        else if (whichAttack === 2)
          enemyAttackHeavy();
        else
          enemyFireBreath();
      }
      else
      {
        console.log("enemy died");
        // implement back to MainGame here
      }
      function enemyAttackLight()
      {
        actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getLightWpn()+"</div>");
        // print actions
        actionPrintouts();
        playerDefend(enemy.getLightDmgTotal());
      }
      function enemyAttackMedium()
      {
        actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getMediumWpn()+"</div>");
        // print actions
        actionPrintouts();
        playerDefend(enemy.getMediumDmgTotal());
      }
      function enemyAttackHeavy()
      {
        actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getHeavyWpn()+"</div>");
        // print actions
        actionPrintouts();
        playerDefend(enemy.getHeavyDmgTotal());
      }
      function enemyFireBreath()
      {
        actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getFireBreath()+"</div>");
        // print actions
        actionPrintouts();
        playerDefend(enemy.getFireBreathDmgTotal());
      }
    }
    // enemy defends here
    function enemyDefend(receivingDmg)
    {
      // if enemy can block and dodge choose randomly between the two
      if (enemy.getShield() !== null && enemy.getDodge() !== 0)
      {
        var whichDefense = Math.floor(Math.random()*2);
        if (whichDefense === 0)
          enemyBlock(receivingDmg);
        else
          enemyDodge(receivingDmg);
      }
      // if enemy can only block
      else if (enemy.getShield() !== null)
        enemyBlock(receivingDmg);
      // if enemy can only dodge
      else if (enemy.getDodge() !== 0)
        enemyDodge(receivingDmg);
      // if enemy can't block or dodge
      else
      {
        // enemy receives full damage
        actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+receivingDmg+" damage to "+enemy.getName()+"</div>");
        
        // gold drop amount here
        enemy.setHealth("sub", receivingDmg);
        showHealthLevels();
        enemyAttack();
      }
      function enemyBlock(receivingDmg)
      {
        // enemy blocks all damage
        var damageBlocked = enemy.getShieldDmgTotal();
        if (damageBlocked >= receivingDmg)
        {
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" blocks "+receivingDmg+" damage with Shield</div>");
          
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" inflicts 0 damage to "+enemy.getName()+"</div>");
          
          showHealthLevels();
          enemyAttack();
        }
        // enemy recieves partial damage
        else
        {
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" blocks "+damageBlocked+" damage with Shield</div>");
          
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+(receivingDmg-damageBlocked)+" damage to "+enemy.getName()+"</div>");
          
          // enemy has 10% of dropping gold if it is hit
          if (randomNum())
            goldPrintout(goldAmount());
          enemy.setHealth("sub", (receivingDmg-damageBlocked));
          showHealthLevels();
          enemyAttack();
        }
      }
      function enemyDodge(receivingDmg)
      {
        // enemy dodge successful
        if (enemy.getDodged())
        {
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" successfully dodged your attack</div>");
          
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" inflicts 0 damage to "+enemy.getName()+"</div>");
          
          showHealthLevels();
          enemyAttack();
        }
        // enemy dodge unsuccessful
        else
        {
          actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" unsuccessfully dodged your attack</div>");
          
          actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+receivingDmg+" damage to "+enemy.getName()+"</div>");
          
          // enemy has 10% of dropping gold if it is hit
          if (randomNum())
            goldPrintout(goldAmount());
          enemy.setHealth("sub", receivingDmg);
          showHealthLevels();
          enemyAttack();
        }
      }
    }
    function addButtons()
    {
      $("#screen").append("<button id='attackLight' class='buttonsTop click'>"+player.getLightWpn()+"</button>");
      $("#screen").append("<button id='attackMedium' class='buttonsTop click'>"+player.getMediumWpn()+"</button>");
      $("#screen").append("<button id='attackHeavy' class='buttonsTop click'>"+player.getHeavyWpn()+"</button>");
      $("#screen").append("<button id='block' class='buttonsBottom noClick'>"+player.getShield()+"</button>");
      $("#screen").append("<button id='dodge' class='buttonsBottom noClick'>Dodge "+player.getDodge()+"%</button>");
      if (player.getMagic() !== null)
      {
        $("#screen").append("<button id='attackMagic' class='buttonsTop noClick'>"+player.getMagic()+"</button>");
        magicAttack = true;
      }
      $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attack!</div>");
      // if enemy is Harpy only allow light attacks
      if (enemy.getName() === "Harpy")
      {
        $("#attackMedium").toggleClass("click noClick");
        $("#attackHeavy").toggleClass("click noClick");
      }
    }
    function addStats()
    {
      // character: name, health, light, medium, heavy, shield, powerup, magic, dodge
      // player stats
      $("#playerStats").append("<div>"+player.getName()+"</div>");
      $("#playerStats").append("<div>HP: "+player.getHealth()+"</div>");
      $("#playerStats").append("<div>"+player.getLightWpn()+" "+player.getLightDmg()+"-"+(player.getLightDmg()+(player.getLightRng()-1))+"</div>");
      $("#playerStats").append("<div>"+player.getMediumWpn()+" "+player.getMediumDmg()+"-"+(player.getMediumDmg()+(player.getMediumRng()-1))+"</div>");
      $("#playerStats").append("<div>"+player.getHeavyWpn()+" "+player.getHeavyDmg()+"-"+(player.getHeavyDmg()+(player.getHeavyRng()-1))+"</div>");
      $("#playerStats").append("<div>"+player.getShield()+" "+player.getShieldDmg()+"-"+(player.getShieldDmg()+(player.getShieldRng()-1))+"</div>");
      if (player.getPower() !== null)
        $("#playerStats").append("<div>Power Up: "+player.getPower()+" +"+player.getPowerDmg()+"</div>");
      if (player.getMagic() !== null)
        $("#playerStats").append("<div>"+player.getMagic()+" "+player.getMagicDmg()+"-"+(player.getMagicDmg()+(player.getMagicRng()-1))+"</div>");
      $("#playerStats").append("<div>Dodge "+player.getDodge()+"%</div>");
      // enemy stats
      $("#enemyStats").append("<div>"+enemy.getName()+"</div>");
      $("#enemyStats").append("<div>HP: "+enemy.getHealth()+"</div>");
      $("#enemyStats").append("<div>"+enemy.getLightWpn()+" "+enemy.getLightDmg()+"-"+(enemy.getLightDmg()+(enemy.getLightRng()-1))+"</div>");
      $("#enemyStats").append("<div>"+enemy.getMediumWpn()+" "+enemy.getMediumDmg()+"-"+(enemy.getMediumDmg()+(enemy.getMediumRng()-1))+"</div>");
      $("#enemyStats").append("<div>"+enemy.getHeavyWpn()+" "+enemy.getHeavyDmg()+"-"+(enemy.getHeavyDmg()+(enemy.getHeavyRng()-1))+"</div>");
      if (enemy.isCharacterDragon())
        $("#enemyStats").append("<div>"+enemy.getFireBreath()+" "+enemy.getFireBreathDmg()+"-"+(enemy.getFireBreathDmg()+(enemy.getFireBreathRng()-1))+"</div>");
      if (enemy.getShield() !== null)
        $("#enemyStats").append("<div>"+enemy.getShield()+" "+enemy.getShieldDmg()+"-"+(enemy.getShieldDmg()+(enemy.getShieldRng()-1))+"</div>");
      if (enemy.getDodge() !== null)
        $("#enemyStats").append("<div>Dodge "+enemy.getDodge()+"%</div>");
    }
    function toggleClasses()
    {
      // if enemy is Harpy only allow light attacks
      if (enemy.getName() === "Harpy")
        $("#attackLight").toggleClass("click noClick").unbind("click");
      else
      {
        $("#attackLight").toggleClass("click noClick").unbind("click");
        $("#attackMedium").toggleClass("click noClick").unbind("click");
        $("#attackHeavy").toggleClass("click noClick").unbind("click");
      }
      $("#block").toggleClass("click noClick").unbind("click");
      $("#dodge").toggleClass("click noClick").unbind("click");
    }
    function showHealthLevels()
    {
      actionsArray.push("<div class='characterAction'>.</div>");
      actionsArray.push("<div class='enemyAction characterAction'>"+enemy.getName()+" HP: "+enemy.getHealth()+"</div>");
      
      actionsArray.push("<div class='playerAction characterAction'>"+player.getName()+" HP: "+player.getHealth()+"</div>");
      
      actionsArray.push("<div class='characterAction'>.</div>");
    }
    function actionFade()
    {
      $("#actions div").first().hide().fadeIn("slow");
    }
    function specialRounds()
    {
      // array is used for spacing above and below special rounds printout
      var specialRoundsArray = [];
      if (randomNum())
      {
        critical = 2;
      }
      if (randomNum())
      {
        doubleGold = 2;
        specialRoundsArray.push("<div class='extraAction characterAction'>DOUBLE GOLD DROPPED ROUND!</div>");
        console.log(doubleGold);
      }
      if (randomNum())
      {
        ultimateBlock = 100;
        specialRoundsArray.push("<div class='extraAction characterAction'>ULTIMATE BLOCK ROUND!</div>");
        console.log(ultimateBlock);
      }
      if (randomNum())
      {
        doubleHeavy = 2;
        specialRoundsArray.push("<div class='extraAction characterAction'>DOUBLE DAMAGE HEAVY WEAPON ROUND!</div>");
        console.log(doubleHeavy);
      }
      if (randomNum())
      {
        doubleMedium = 2;
        specialRoundsArray.push("<div class='extraAction characterAction'>DOUBLE DAMAGE MEDIUM WEAPON ROUND!</div>");
        console.log(doubleMedium);
      }
      if (randomNum())
      {
        doubleLight = 2;
        specialRoundsArray.push("<div class='extraAction characterAction'>DOUBLE DAMAGE LIGHT WEAPON ROUND!</div>");
        console.log(doubleLight);
      }
      if (randomNum())
      {
        doubleDamage = 2;
        specialRoundsArray.push("<div class='extraAction characterAction'>DOUBLE DAMAGE INFLICTING ROUND!</div>");
        console.log(doubleDamage);
      }
      if (specialRoundsArray.length > 0)
      {
        specialRoundsArray.forEach(function(item)
        {
          $("#actions").prepend(item);
          actionFade();
        });
        $("#actions").prepend("<div class='characterAction'>.</div>");
      }
    }
    function resetSpecialRounds()
    {
      var doubleDamage = 1;
      var doubleLight = 1;
      var doubleMedium = 1;
      var doubleHeavy = 1;
      var ultimateBlock = 1;
      var critical = 1;
      var doubleGold = 1;
    }
    function goldAmount()
    {
      // enemy will drop 1-5 gold
      return (1+(Math.floor(Math.random()*5)));
    }
    function randomNum()
    {
      // returns true if random number is 1 (10% chance)
      var num = Math.floor(Math.random()*10);
      if (num === 0)
        return true;
    }
    function goldPrintout(goldAmount)
    {
      $("#actions").prepend("<div class='characterAction'>.</div>");
      $("#actions").prepend("<div class='extraAction characterAction'>"+enemy.getName()+" drops "+goldAmount+" Gold</div>");
      actionFade();
      console.log("player gold before: "+player.getGold());
      // normal gold multiplied by doubleGold
      player.setGold("add", (goldAmount*doubleGold));
      console.log("goldAmount: "+goldAmount);
      console.log("player gold after: "+player.getGold());
    }
    function actionPrintouts()
    {
      actionsArray.forEach(function(item)
      {
        $("#actions").prepend(item);
        actionFade();
      });
      actionsArray = [];
    }
  }
}
