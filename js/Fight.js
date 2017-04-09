class Fight
{
  // player fights enemy
  // this is where all dom manipulation for fight happens
  fight(player, enemy)
  {
    // add action buttons to screen
    $("#screen").append("<button id='attackLight' class='buttons click'>"+player.getLightWpn()+"</button>");
    $("#screen").append("<button id='attackMedium' class='buttons click'>"+player.getMediumWpn()+"</button>");
    $("#screen").append("<button id='attackHeavy' class='buttons click'>"+player.getHeavyWpn()+"</button>");
    $("#screen").append("<button id='block' class='buttons noClick'>"+player.getShield()+"</button>");
    $("#screen").append("<button id='dodge' class='buttons noClick'>Dodge "+player.getDodge()+"%</button>");
    if (player.getMagic() !== null)
    {
      $("#screen").append("<button id='attackMagic' class='buttons noClick'>"+player.getMagic()+"</button>");
    }
    gameLoop();
    function gameLoop()
    {
      $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attack</div>");
      while(player.getHealth > 0 || enemy.getHealth > 0);
      {
        // add is harpy to see if can attack with non light weapon
        // change magic boolean to variable to keep track of when you can use magic
        playerAttack(true, true, true, true);
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
          // send damage to enemyDefend
          enemyDefend(player.getLightDmgTotal());
        });
      }
      if (medium)
      {
        $("#attackMedium").click(function()
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getMediumWpn()+"</div>");
          // send damage to enemyDefend
          enemyDefend(player.getMediumDmgTotal());
        });
      }
      if (heavy)
      {
        $("#attackHeavy").click(function()
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getHeavyWpn()+"</div>");
          // send damage to enemyDefend
          enemyDefend(player.getHeavyDmgTotal());
        });
      }
      if (magic)
      {
        $("#attackMagic").click(function()
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" attacks with "+player.getMagic()+"</div>");
          // send damage to enemyDefend
          enemyDefend(player.getMagicDmgTotal());
        });
      }
    }
    // player defends here
    function playerDefend(receivingDamage)
    {
      // can only click on defend options
      toggleClasses();
      $("#block").click(function()
      {
        var damageBlocked = player.getShieldDmgTotal();
        if (damageBlocked >= receivingDamage)
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" blocks "+receivingDamage+" damage with "+player.getShield()+"</div>");
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts 0 damage to"+player.getName()+"</div>");
          showHealthLevels();
          // can only click on attack options
          toggleClasses();
          playerAttack();
        }
        else
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" blocks "+damageBlocked+" damage with "+player.getShield()+"</div>");
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts "+(receivingDamage-damageBlocked)+" damage to"+player.getName()+"</div>");
          player.setHealth("sub", (receivingDamage-damageBlocked));
          showHealthLevels();
          // can only click on attack options
          toggleClasses();
          playerAttack();
        }
      });
      $("#dodge").click(function()
      {
        // player dodge successful
        if (player.getDodged())
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" successfully dodged the attack</div>");
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts 0 damage to"+player.getName()+"</div>");
          showHealthLevels();
          playerAttack();
        }
        // player dodge unsuccessful
        else
        {
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" unsuccessfully dodged the attack</div>");
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" inflicts "+receivingDamage+" damage to"+player.getName()+"</div>");
          player.setHealth("sub", receingDamage);
          showHealthLevels();
          playerAttack();
        }
      });
    }
    // enemy attacks here
    function enemyAttack()
    {
      // chooses which attack enemy uses
      var whichAttack;
      if (enemy.isDragon())
      {
        whichAttack = Math.floor(Math.random()*4);
        if (whichAttack === 0)
          enemyAttackLight();
        else if (whichAttack === 1)
          enemyAttackMedium();
        else if (enemyAttack === 2)
          enemyAttackHeavy();
        else
          enemyFireBreath();
      }
      else
      {
        whichAttack = Math.floor(Math.random()*3);
        if (whichAttack === 0)
          enemyAttackLight();
        else if (whichAttack === 1)
          enemyAttackMedium();
        else
          enemyAttackHeavy();
      }
      function enemyAttackLight()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getLightWpn()+"</div>");
        playerDefend(enemy.getLightDmgTotal());
      }
      function enemyAttackMedium()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getMediumWpn()+"</div>");
        playerDefend(enemy.getMediumDmgTotal());
      }
      function enemyAttackHeavy()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getHeavyWpn()+"</div>");
        playerDefend(enemy.getHeavyDmgTotal());
      }
      function enemyFireBreath()
      {
        $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" attacks with "+enemy.getFireBreath()+"</div>");
        playerDefend(enemy.getFireBreathDmgTotal());
      }
    }
    // enemy defends here
    function enemyDefend(recievingDmg)
    {
      // if enemy can block and dodge choose randomly between the two
      if (enemy.getShield() !== null && enemy.getDodge() !== 0)
      {
        var whichDefense = Math.floor(Math.random()*2);
        if (whichDefense === 0)
        {
          enemyBlock();
        }
        else
        {
          enemyDodge();
        }
      }
      // if enemy can only block
      else if (enemy.getShield() !== null)
      {
        enemyBlock();
      }
      // if enemy can only dodge
      else if (enemy.getDodge() !== 0)
      {
        enemyDodge();
      }
      // if enemy can't block or dodge
      else
      {
        // enemy receives full damage
        $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+receivingDamage+" damage to"+enemy.getName()+"</div>");
        enemy.setHealth("sub", receivingDamage);
        showHealthLevels();
        enemyAttack();
      }
      function enemyBlock()
      {
        // enemy recieves partial damage
        var damageBlocked = enemy.getShieldDmgTotal();
        if (damageBlocked >= receivingDamage)
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" blocks "+receivingDamage+" damage with Shield</div>");
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts 0 damage to"+enemy.getName()+"</div>");
          showHealthLevels();
          enemyAttack();
        }
        else
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" blocks "+damageBlocked+" damage with Shield</div>");
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+(receivingDamage-damageBlocked)+" damage to"+enemy.getName()+"</div>");
          enemy.setHealth("sub", (receivingDamage-damageBlocked));
          showHealthLevels();
          enemyAttack();
        }
      }
      function enemyDodge()
      {
        // enemy dodge successful
        if (enemy.getDodged())
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" successfully dodged your attack</div>");
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts 0 damage to"+enemy.getName()+"</div>");
          showHealthLevels();
          enemyAttack();
        }
        // enemy dodge unsuccessful
        else
        {
          $("#actions").prepend("<div class='enemyAction characterAction'>"+enemy.getName()+" unsuccessfully dodged your attack</div>");
          $("#actions").prepend("<div class='playerAction characterAction'>"+player.getName()+" inflicts "+receivingDamage+" damage to"+enemy.getName()+"</div>");
          enemy.setHealth("sub", receingDamage);
          showHealthLevels();
          enemyAttack();
        }
      }
    }
    function toggleClasses()
    {
      $("#attackLight").toggleClass("click noClick").unbind("click");
      $("#attackMedium").toggleClass("click noClick").unbind("click");
      $("#attackHeavy").toggleClass("click noClick").unbind("click");
      $("#block").toggleClass("click noClick").unbind("click");
      $("#dodge").toggleClass("click noClick").unbind("click");
    }
    function showHealthLevels()
    {
      $("#actions").prepend("div class='playerAction characterAction'>"+player.getName()+" HP: "+player.getHealth()+"</div>");
      $("#actions").prepend("div class='enemyAction characterAction'>"+enemy.getName()+" HP: "+enemy.getHealth()+"</div>");
    }
  }
}
