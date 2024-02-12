---
title: "How to make an enchant"
sidebar_position: 8
---

## Config Layout

Each enchantment has it's own config file. They are stored in `/enchants/<id>.yml` so for example Telekinesis would be stored in `/enchants/telekinesis.yml`

If you want to add or remove enchantments, just create or delete config files. These config files can be placed anywhere in the `/enchants/` folder, including in subfolders.


## Example Enchantment Config

```yaml
display-name: "Example" # The name of the enchantment in-game
description: "Gives a &a%placeholder%%&8 bonus to damage" # The description of the enchantment
placeholder: "%level% * 20" # The placeholder to show in the enchantment description
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
