---
title: "Configuring a Condition"
sidebar_position: 3
---

Like effects, mutators, and entity goals, conditions consist of an ID and arguments.

## Example Condition Config
```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp" # The required permission
    inverse: true # If the player should *not* have the permission
```


As shown in the above example, all conditions additionally have an inverse argument, like this:
```yaml
- id: on_fire
  args:
    inverse: true
```
This will negate the condition, i.e. only be true when the base condition is false.

If this condition is for a plugin for items (EcoEnchants, EcoItems, Reforges, Talismans, and EcoArmor) you can also add lore lines to be shown to the player if they don't meet the condition, like this:

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp"
    not-met-lines:
      - "&cYou need &bMVP&c rank to use &7Crystal Finder"
      - "&cBuy it at &astore.ecomc.net"
```

## Not met Effects

If your condition is effect-specific (i.e. in the `conditions: []` section of an effect rather than on the main holder conditions), you can specify not-met-effects.

These are effects ran when the condition is not met but a player tries to activate the effect (invoke the trigger).

In config, they look like this:

```yaml
effects:
  - id: give_money
    args:
      amount: 100
    conditions:
      - id: has_permission
        args:
          permission: "ecomc.rank.mvp"
        not-met-effects:
          - id: send_message
            args:
              message: "&cYou need &bMVP&c rank to use &7Crystal Finder&c, buy it at &astore.ecomc.net&c!"
    triggers:
      - break_block
```

So here, MVP players would get $100 for breaking a block, whereas non-MVP players would be told to buy the rank to get the perk when they try to break a block. This functions as an alternative to not-met-lines.
## Victim Conditions

You can also check if the victim (player/entity) meets the conditions before running the effects by using the `victim_conditions` filter, [here](plugins.auxilor.io/effects/all-filters/victim_conditions). You can combine these with usual conditions to create intricate effects with comprehensive lists of criteria to be met.

In config, they look like this:

```yaml
effects:
  - id: give_money
    args:
      amount: 100
    filters:
	  victim_conditions:
		- id: in_mainhand
		  args:
			items:
			  - DIAMOND_SWORD
	conditions:
	  - id: below_y
	    args:
		  y: 0
    triggers:
      - melee_attack
```

So here, the player will gain $100 when they attack a player/entity wielding a diamond sword in their main-hand, whilst the player is below Y level 0.