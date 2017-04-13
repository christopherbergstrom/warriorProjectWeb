class Fight
{
  // player fights enemy
  // this is where all dom manipulation for fight happens
  fight(player, enemy)
  {
    var magicCount = 4;
    var magicAttack = false;
    // add action buttons to screen
    addButtons();
    // add player and enemy stats to left and right bars
    addStats();
    gameLoop();
    // implement extras here; double damage, double light, double medium, double heavy, ultimate block, double gold, gold drop amount
    // implement dodge and attack with coresponding weapon, only inflict damage if dodge was successful?
    function gameLoop()
    {
      if(player.getHealth() > 0 || enemy.getHealth() > 0)
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
        playerAttack(true, (enemy.getName() !== "Harpy"), (enemy.getName() !== "Harpy"), magicAttack);
      }
      else
      {
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
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getLightWpn()+"</div>");
          actionFade();
          // send damage to enemyDefend
          enemyDefend(player.getLightDmgTotal());
        });
      }
      if (medium)
      {
        $("#attackMedium").click(function()
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getMediumWpn()+"</div>");
          actionFade();
          // send damage to enemyDefend
          enemyDefend(player.getMediumDmgTotal());
        });
      }
      if (heavy)
      {
        $("#attackHeavy").click(function()
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getHeavyWpn()+"</div>");
          actionFade();
          // send damage to enemyDefend
          enemyDefend(player.getHeavyDmgTotal());
        });
      }
      if (magic)
      {
        $("#attackMagic").click(function()
        {
          magicAttack = false;
          // $("#attackMagic").toggleClass("click noClick").unbind("click");
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getMagic()+"</div>");
          actionFade();
          // send damage to enemyDefend
          enemyDefend(player.getMagicDmgTotal());
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
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" blocks "+receivingDmg+" damage with "+player.getShield()+"</div>");
          actionFade();
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts 0 damage to "+player.getName()+"</div>");
          actionFade();
          showHealthLevels();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
        else
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" blocks "+damageBlocked+" damage with "+player.getShield()+"</div>");
          actionFade();
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts "+(receivingDmg-damageBlocked)+" damage to "+player.getName()+"</div>");
          actionFade();
          player.setHealth("sub", (receivingDmg-damageBlocked));
          showHealthLevels();
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
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" successfully dodged the attack</div>");
          actionFade();
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts 0 damage to "+player.getName()+"</div>");
          actionFade();
          showHealthLevels();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
        // player dodge unsuccessful
        else
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" unsuccessfully dodged the attack</div>");
          actionFade();
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts "+receivingDmg+" damage to "+player.getName()+"</div>");
          actionFade();
          player.setHealth("sub", receivingDmg);
          showHealthLevels();
          // can only click on attack options
          toggleClasses();
          gameLoop();
        }
      });
    }
    // enemy attacks here
    function enemyAttack()
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
      function enemyAttackLight()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getLightWpn()+"</div>");
        actionFade();
        playerDefend(enemy.getLightDmgTotal());
      }
      function enemyAttackMedium()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getMediumWpn()+"</div>");
        actionFade();
        playerDefend(enemy.getMediumDmgTotal());
      }
      function enemyAttackHeavy()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getHeavyWpn()+"</div>");
        actionFade();
        playerDefend(enemy.getHeavyDmgTotal());
      }
      function enemyFireBreath()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getFireBreath()+"</div>");
        actionFade();
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
        $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+receivingDmg+" damage to "+enemy.getName()+"</div>");
        actionFade();
        enemy.setHealth("sub", receivingDmg);
        showHealthLevels();
        enemyAttack();
      }
      function enemyBlock(receivingDmg)
      {
        // enemy recieves partial damage
        var damageBlocked = enemy.getShieldDmgTotal();
        if (damageBlocked >= receivingDmg)
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" blocks "+receivingDmg+" damage with Shield</div>");
          actionFade();
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts 0 damage to "+enemy.getName()+"</div>");
          actionFade();
          showHealthLevels();
          enemyAttack();
        }
        else
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" blocks "+damageBlocked+" damage with Shield</div>");
          actionFade();
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+(receivingDmg-damageBlocked)+" damage to "+enemy.getName()+"</div>");
          actionFade();
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
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" successfully dodged your attack</div>");
          actionFade();
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts 0 damage to "+enemy.getName()+"</div>");
          actionFade();
          showHealthLevels();
          enemyAttack();
        }
        // enemy dodge unsuccessful
        else
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" unsuccessfully dodged your attack</div>");
          actionFade();
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+receivingDmg+" damage to "+enemy.getName()+"</div>");
          actionFade();
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
        // if (player.getMagic() !== null)
        // {
        //   $("#attackMagic").toggleClass("click noClick").unbind("click");
        // }
      }
      // $("#attackMagic").toggleClass("click noClick").unbind("click");
      $("#block").toggleClass("click noClick").unbind("click");
      $("#dodge").toggleClass("click noClick").unbind("click");
    }
    function showHealthLevels()
    {
      $("#actions").prepend("<div class='characterAction'>.</div>");
      $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" HP: "+enemy.getHealth()+"</div>");
      actionFade();
      $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" HP: "+player.getHealth()+"</div>");
      actionFade();
      $("#actions").prepend("<div class='characterAction'>.</div>");
    }
    function actionFade()
    {
      $("#actions div").first().hide().fadeIn("slow");
    }
  }
}
