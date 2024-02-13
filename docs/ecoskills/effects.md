---
title: "Effects"
sidebar_position: 3
---

Effects are special abilities given to a player. They are levelled up by levelling skills.

## The Default Effects

| Name                | Description                                                                |
|---------------------|----------------------------------------------------------------------------|
| Bountiful Harvest   | Increases chance to get extra drops from farming                           |
| Versatile Tools     | Increases damage dealt by pickaxes                                         |
| Eye of the Depths   | Increases chance to get rare loot from fishing                             |
| Serrated Strikes    | Increases chance to cause your opponent to bleed, damaging them repeatedly |
| Seamless Movement   | Increases chance to ignore fall damage                                     |
| Potionmaster        | Brewed potions last longer                                                 |
| Shamanism           | Increases the speed at which you regain health                             |
| Craftsmanship       | Take less durability damage on axes                                        |
| Second Chance       | Chance to instantly fix items on low durability                            |
| Efficient Brewing   | Decreases the time taken to brew potions                                   |
| Mystic Resilience   | Increases the chance to ignore negative potion effects                     |
| Satiation           | Decreases the rate at which you lose hunger                                |
| Golden Yield        | Increases the chance to get 5x drops from farming                          |
| Dodging             | Increases chance to ignore incoming damage                                 |
| Accelerated Escape  | Go faster after taking damage                                              |
| Bravery             | Take less damage from bosses                                               |
| Infernal Resistance | Chance to ignore fire damage                                               |
| Dazzle              | Chance to give your opponent nausea                                        |
| Strong Impact       | Small chance to deal 3x damage                                             |
| Endangering         | Chance to remove your opponents invulnerability frame                      |
| Spelunking          | Chance to get extra drops from ores                                        |
| Dynamic Mining      | Chance to get a short burst of Haste III while mining                      |
| Reimbursement       | Chance to get given back xp levels after enchanting an item                |
| Overcompensation    | Chance to get given back lapis after enchanting                            |
| Magnetic Rod        | Increases fishing speed                                                    |
| Master Lumberjack   | Increases chance to get extra drops from trees                             |

## Default configs

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoSkills/blob/master/eco-core/core-plugin/src/main/resources/effects/)

## `_example.yml`

```yaml
# The ID of the effect is the name of the .yml file,
# for example gold_touch.yml has the ID of gold_touch
# You can place effects anywhere in this folder,
# including in subfolders if you want to organize your effect configs
# _example.yml is not loaded.

name: "Midas Touch" # The name of the effect, shown to players
placeholder: "%level% / 50" # The placeholder to be shown in the description, you can use expressions - eg %level% * 2
description: "&a%placeholder%%&8 chance to get $50 every time you mine a block" # The description to be shown in lore and messages

# The effects of the effect (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
# Use %level% as a placeholder for the effect level
effects:
    - id: give_money
      args:
          chance: "%level% / 50"
          amount: 50
      triggers:
          - mine_block

# The conditions required for the effect to activate,
# you can use %level% as a placeholder here too
conditions: [ ]
```
