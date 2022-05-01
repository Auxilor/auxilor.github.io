---
title: "How to make a custom set"
sidebar_position: 4
---

## Typical Set Config
```yaml
- id: slayer
  conditions: []
  effects:
    - id: damage_multiplier
      args:
        multiplier: 1.5
      triggers:
        - melee_attack
        - bow_attack
        - trident_attack
      filters:
        onlyBosses: true
    - id: damage_multiplier
      args:
        multiplier: 0.9
      triggers:
        - take_damage
  advancedEffects:
    - id: damage_multiplier
      args:
        multiplier: 0.8
      triggers:
        - take_damage
    - id: damage_multiplier
      args:
        multiplier: 2
      triggers:
        - melee_attack
        - bow_attack
        - trident_attack
      filters:
        onlyBosses: true
  advancedLore:
    - ''
    - "<gradient:f12711>&lADVANCED BONUS</gradient:f5af19>"
    - "&8» &4Take 20% less damage"
    - "&8» &4Deal 2x damage to bosses"
    - "&8&oRequires full set to be worn"
  shard:
    item: prismarine_shard unbreaking:1 hide_enchants
    name: "<GRADIENT:f12711>Advancement Shard:</GRADIENT:f5af19> &4Slayer"
    lore:
      - "&8Drop this onto &4Slayer Armor"
      - "&8to make it <GRADIENT:f12711>Advanced</GRADIENT:f5af19>."
    craftable: false
    recipe:
      - prismarine_shard
      - ecoarmor:set_slayer_helmet
      - prismarine_shard
      - ecoarmor:set_slayer_chestplate
      - nether_star
      - ecoarmor:set_slayer_leggings
      - prismarine_shard
      - ecoarmor:set_slayer_boots
      - prismarine_shard
  helmet:
    item: leather_helmet color:#750909 hide_dye
    name: "&4Slayer Helmet"
    advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&4 Slayer Helmet"
    effectiveDurability: 768
    lore:
      - "&4&lSLAYER SET BONUS"
      - "&8» &4Deal 50% more damage to bosses"
      - "&8» &4Take 10% less damage"
      - "&8&oRequires full set to be worn"
      - ''
      - "&fTier: %tier%"
      - "&8&oUpgrade with an Upgrade Crystal"
    craftable: true
    defaultTier: default
    recipe:
      - air
      - netherite_helmet
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - obsidian
      - ecoitems:armor_core ? nether_star
      - obsidian
  chestplate:
    item: leather_chestplate color:#750909 hide_dye
    leatherColor: "#750909"
    name: "&4Slayer Chestplate"
    advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&4 Slayer Chestplate"
    effectiveDurability: 1024
    lore:
      - "&4&lSLAYER SET BONUS"
      - "&8» &4Deal 50% more damage to bosses"
      - "&8» &4Take 10% less damage"
      - "&8&oRequires full set to be worn"
      - ''
      - "&fTier: %tier%"
      - "&8&oUpgrade with an Upgrade Crystal"
    craftable: true
    defaultTier: default
    recipe:
      - air
      - netherite_chestplate
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - obsidian
      - ecoitems:armor_core ? nether_star
      - obsidian
  elytra:
    item: elytra
    name: "&4Slayer Elytra"
    advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19> &4Slayer Elytra"
    effectiveDurability: 1024
    lore:
      - "&4&lSLAYER SET BONUS"
      - "&8» &4Deal 50% more damage to bosses"
      - "&8» &4Take 10% less damage"
      - "&8&oRequires full set to be worn"
      - ''
      - "&fTier: %tier%"
      - "&8&oUpgrade with an Upgrade Crystal"
    craftable: true
    defaultTier: default
    recipe:
      - air
      - elytra
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - obsidian
      - ecoitems:armor_core ? nether_star
      - obsidian
  leggings:
    item: leather_leggings color:#750909 hide_dye
    name: "&4Slayer Leggings"
    advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&4 Slayer Leggings"
    effectiveDurability: 1024
    lore:
      - "&4&lSLAYER SET BONUS"
      - "&8» &4Deal 50% more damage to bosses"
      - "&8» &4Take 10% less damage"
      - "&8&oRequires full set to be worn"
      - ''
      - "&fTier: %tier%"
      - "&8&oUpgrade with an Upgrade Crystal"
    craftable: true
    defaultTier: default
    recipe:
      - air
      - netherite_leggings
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - obsidian
      - ecoitems:armor_core ? nether_star
      - obsidian
  boots:
    item: leather_boots color:#750909 hide_dye
    name: "&4Slayer Boots"
    advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&4 Slayer Boots"
    effectiveDurability: 1024
    lore:
      - "&4&lSLAYER SET BONUS"
      - "&8» &4Deal 50% more damage to bosses"
      - "&8» &4Take 10% less damage"
      - "&8&oRequires full set to be worn"
      - ''
      - "&fTier: %tier%"
      - "&8&oUpgrade with an Upgrade Crystal"
    craftable: false
    defaultTier: default
    recipe:
      - air
      - netherite_boots
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - air
      - ecoitems:boss_core ? heart_of_the_sea
      - obsidian
      - ecoitems:armor_core ? nether_star
      - obsidian
```

## Understanding all the sections

**id:** The name of the set

**conditions:** A condition is made up of an ID and arguments. Learn more here

[Configuring a Condition](https://plugins.auxilor.io/effects/all-conditions)

**effects:** All the effects that are given to the player wearing a full set of armor.

**advancedEffects:** All the effects that are given to a player wearing a full set of **advanced** armor.

A player is given **only** the advanced effects if wearing advanced armor.

Learn how to configure effects here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

**advancedLore** is lore tacked onto the end of the regular lore of advanced items.

## Item Config

A typical item (armor piece) config looks like this:

```yaml
helmet:
      item: leather_helmet color:#bd15a9 hide_dye
      name: "&5Angelic Helmet"
      advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&5 Angelic Helmet"
      effectiveDurability: 768
      lore:
        - "&5&lANGELIC SET BONUS"
        - "&8» &dGain 10 more hearts"
        - "&8» &dPermanent regeneration"
        - "&8» &dDeal 10% less melee damage"
        - "&8&oRequires full set to be worn"
        - ''
        - "&fTier: %tier%"
        - "&8&oUpgrade with an Upgrade Crystal"
      craftable: true
      defaultTier: default
      recipe:
        - netherite_block
        - ecoitems:enchanted_ender_eye ? netherite_ingot
        - diamond_block
        - air
        - golden_helmet
        - air
        - gold_block
        - ecoitems:armor_core ? enchanted_book mending:1
        - gold_block 
```

If you want to have a player head as a helmet, you can set the texture like this:

```yaml
item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNWM0ODZhZjNiODgyNzY2ZTgyYTBiYzE2NjVmZjAyZWI2ZTg3M2I2ZTBkNzcxZjNhZGFiYzc1OWI3MjAyMjZhIn19fQ==
```

[You can find skull textures here](https://minecraft-heads.com/)

**effectiveDurability** is the durability of the item. Since the item's actual durability cannot be modified, this will act similar to unbreaking, by increasing the amount of durability damage taken before losing any durability.
