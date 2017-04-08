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
      $("#actions").prepend("<div class='playerAction'>"+player.getName()+" attack</div>");

      while(player.getHealth > 0 || enemy.getHealth > 0);
      {
        // change magic boolean to variable to keep track of when you can use magic
        playerAttack(true, true, true, true);
      }
    }
    // if these arguments are true, player can click on buttons
    // player attacks here
    function playerAttack(light, medium, heavy, magic)
    {
      // toggleClasses();
      if (light)
      {
        $("#attackLight").click(function()
        {
          $("#actions").prepend("<div class='playerAction'>"+player.getName()+" attacks with "+player.getLightWpn()+"</div>");
          enemyDefend();
        });
      }
      if (medium)
      {
        $("#attackMedium").click(function()
        {
          $("#actions").prepend("<div class='playerAction'>"+player.getName()+" attacks with "+player.getMediumWpn()+"</div>");
          enemyDefend();
        });
      }
      if (heavy)
      {
        $("#attackHeavy").click(function()
        {
          $("#actions").prepend("<div class='playerAction'>"+player.getName()+" attacks with "+player.getHeavyWpn()+"</div>");
          enemyDefend();
        });
      }
      if (magic)
      {
        $("#attackMagic").click(function()
        {
          $("#actions").prepend("<div class='playerAction'>"+player.getName()+" attacks with "+player.getMagic()+"</div>");
        });
      }
    }
    // player defends here
    function playerDefend(block, dodge)
    {
      // can only click on defend options
      toggleClasses();
      if (block)
      {
        $("#block").click(function()
        {
          $("#actions").prepend("<div class='playerAction'>"+player.getName()+" blocks with "+player.getShield()+"</div>");
          // can only click on attack options
          toggleClasses();
          playerAttack(true, true, true, false);
        });
      }
      if (dodge)
      {
        $("#dodge").click(function()
        {
          $("#actions").prepend("<div class='playerAction'>"+player.getName()+" dodges</div>");
          // can only click on attack options
          toggleClasses();
          playerAttack(true, true, true, false);
        });
      }
    }
    // enemy attacks here
    function enemyAttack()
    {
      $("#actions").prepend("<div class='enemyAction'>"+enemy.getName()+" attacks</div>");
      playerDefend(true, true);
    }
    // enemy defends here
    function enemyDefend()
    {
      $("#actions").prepend("<div class='enemyAction'>"+enemy.getName()+" defends</div>");
      enemyAttack();
    }
    function toggleClasses()
    {
      $("#attackLight").toggleClass("click noClick").unbind("click");
      $("#attackMedium").toggleClass("click noClick").unbind("click");
      $("#attackHeavy").toggleClass("click noClick").unbind("click");
      $("#block").toggleClass("click noClick").unbind("click");
      $("#dodge").toggleClass("click noClick").unbind("click");
    }
  }
}
