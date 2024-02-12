---
title: "How to make an enchant"
sidebar_position: 2
---

## Config Layout

Each enchantment has its own config file, they are stored in `/enchants/<id>.yml` so for example Telekinesis would be stored in `/enchants/telekinesis.yml`

If you want to add or remove enchantments, just create or delete config files. These config files can be placed anywhere in the `/enchants/` folder, including in subfolders.


## Example Enchantment Config

```yaml
display-name: "Example" # The name of the enchantment in-game
description: "Gives a &a%placeholder%%&8 bonus to damage" # The description of the enchantment
placeholder: "%level% * 20" # The placeholder to show in the enchantment description
placeholders: # [Optional] You can also create multiple placeholders to ushow in the enchantment description
  example: "%level% * 800"
type: normal # The enchantment type, from types.yml

targets: # The items that the enchantment can be applied to, see targets.yml
  - sword
conflicts: # The enchantments that conflict with this
  - sharpness
rarity: common # The rarity of the enchantment, see rarity.yml
max-level: 4 # The max level of the enchantment

tradeable: true # If the enchantment can be obtained from villagers
discoverable: true # If the enchantment can generate naturally in chests
enchantable: true # If the enchantment can be obtained from enchanting tables

# The effects of the enchantment (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
# Use %level% as a placeholder for the enchantment level
effects:
  - id: damage_multiplier
    args:
      multiplier: 1 + 0.2 * %level%
    triggers:
      - melee_attack

# The conditions required to use the enchantment,
# you can use %level% as a placeholder here too
conditions: [ ]
```

## Understanding all the sections
**id:** The ID of the enchantment. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 
ID's must be lowercase letters, numbers, and underscores only.

**display-name:** The name of the enchantment, displayed in the item lore.

**description:** The enchantment description/lore.

**placeholder:** Custom placeholders to show in the enchantment description.

**type:** The enchantment type, from [types.yml](https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/types.yml).

**targets:** The items this enchantment can be applied to, from [targets.yml](https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/targets.yml).

**conflicts:** Any conflicting enchantments. If one is present, the other cannot be.

**rarity:** The rarity of obtaining the enchantment, from [rarity.yml](https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/rarity.yml).

**max-level:** The maximum obtainable enchantment level.

**tradeable:** If the enchantment can be obtained from villagers.

**discoverable:** If the enchantment can be found in chests and loot tables.

**enchantable:** If the enchantment can be obtained from enchanting tables.

### Effects + Conditions

Effects are the actual functionality of the job, and conditions are requirements that a player must meet for the job to activate for them - so you can make it so a job only works for a certain type of player, ie only players that have above a certain amount of playtime, or those that only have below a certain balance.

See this page for how to configure effects:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)