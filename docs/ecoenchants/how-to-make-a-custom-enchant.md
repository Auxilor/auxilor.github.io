---
title: "How to make an enchant"
sidebar_position: 3
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoEnchants/tree/master/eco-core/core-plugin/src/main/resources/enchants).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add enchantments
Each enchant is its own config file, placed in the `/enchants/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the enchantment is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Enchantment Config

```yaml
display-name: "Example" # The name of the enchantment in-game
description: "Gives a &a%placeholder%%&8 bonus to damage" # The description of the enchantment
placeholder: "%level% * 20" # The placeholder to show in the enchantment description
placeholders: # [Optional] You can also create multiple placeholders to show in the enchantment description
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

### Effects

The effects section is the core functionality of the enchants. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the enchantment is active.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

### Internal Placeholders

`%level%` Returns the level of the custom enchantment. Useful for creating enchantments that get stronger as the level increases.