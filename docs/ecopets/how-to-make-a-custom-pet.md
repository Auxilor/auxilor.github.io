---
title: How to make a Pet
sidebar_position: 1
---

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoPets/tree/master/eco-core/core-plugin/src/main/resources/pets).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add pets
Each pet is its own config file, placed in the `/pets/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Pet is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

## Example Pet Config

```yaml
name: "&6Tiger" # The display name of the pet
description: "&8&oLevel up by dealing melee damage" # The description of the pet

# There are two ways to specify level XP requirements:  
# 1. A formula to calculate for infinite levels  
# 2. A list of XP requirements for each level  
  
# Formula  
# xp-formula: (2 ^ %level%) * 25  
# max-level: 100 # (Optional) The max level, if not specified, there is no max level  
  
# List  
xp-requirements:  
- 50  
- 125  
- 200  
- 300  
- 500  
- 750  
- 1000  
- 1500  
- 2000  
- 3500  
- 5000  
- 7500  
- 10000

# An XP gain method takes a trigger, a multiplier, conditions, and filters.
# The 'multiplier' takes the value produced by the trigger and multiplies it
# Alternatively, you can use 'value' to count a specific number and not a multiplier
xp-gain-methods:
  - id: melee_attack
    multiplier: 0.5 # You can also use "value" here (see above comment)
    conditions: [ ] # You can add a list of conditions that must be met on xp gain

# Custom placeholders to be used in descriptions,
# Don't add % to the IDs, this is done automatically
# The value takes a %level% placeholder and is a mathetmatical expression
level-placeholders:
  - id: "damage_multiplier"
    value: "%level%"

# The text shown with the %effects% placeholder
# The number dictates the minimum level for this text to show for
# Adding new levels will override this text on those levels or above
effects-description:
  1:
    - "&8» &8Gives a &a+%damage_multiplier%%&8 bonus to"
    - "   &8melee damage"

# Same as above, but for %rewards%
rewards-description:
  1:
    - "&8» &8Gives a &a+%damage_multiplier%%&8 bonus to"
    - "   &8melee damage"

# Same as above, but for %level_up_messages%
level-up-messages:
  1:
    - "&8» &8Gives a &a+%damage_multiplier%%&8 bonus to"
    - "   &8melee damage"

# Effects to run when the pet levels up  
# %level% is the level the pet leveled up to.  
# If you want to restrict this to certain levels, you can use  
# require: %level% = 20, or require: %level% < 50, etc.  
# If you want a reward to run every x levels, you can use  
# every: 1, or every: 12, etc  
level-up-effects:  
  - id: give_item  
    args:  
      items:  
        - diamond  
      every: 5 # Gives the reward every 5 levels  
      require: "%level% = 5" # Requires level 5 before receiving rewards

# The effects for the pet, has %level% as a placeholder
effects:
  - id: damage_multiplier
    args:
      multiplier: "%level% * 0.01 + 1"
    triggers:
      - melee_attack

# The conditions for the pet, also has %level% as a placeholder
conditions: [ ]

# The texture of the pet entity in game
# If you're using modelengine, use modelengine:id as the texture
entity-texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTA5NWZjYzFlM2Q3Y2JkMzUwZjE5YjM4OTQ5OGFiOGJiOTZjNjVhZDE4NWQzNDU5MjA2N2E3ZDAzM2FjNDhkZSJ9fX0="

# The icon in GUIs
icon: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTA5NWZjYzFlM2Q3Y2JkMzUwZjE5YjM4OTQ5OGFiOGJiOTZjNjVhZDE4NWQzNDU5MjA2N2E3ZDAzM2FjNDhkZSJ9fX0=

# The spawn egg
spawn-egg:
  enabled: true # If the pet should have a spawn egg
  item: blaze_spawn_egg unbreaking:1 hide_enchants
  name: "&6Tiger&f Pet Spawn Egg"
  lore:
    - ""
    - "&8&oPlace on the ground to"
    - "&8&ounlock the &r&6Tiger&8&o pet!"
  craftable: false
  recipe: [ ]
  recipe-permission: ecopets.craft.tiger
```

## Understanding all the sections

**name:** The name of the pet in-game.

**description:** The description of the pet.

**level-xp-requirements:** A list of XP requirements for each level.
```yaml
xp-requirements:
  - 50
  - 125
  - 200
```

**xp-formula:** A formula to calculate XP requirements for each level.

**max-level:** The maximum level for the pet (Optional).

**xp-gain-methods:** The trigger, multiplier/value, conditions and filters that will award pet XP.

**level-placeholders:** Custom placeholders to be used in descriptions.

**effects-description:** Pet specific effect descriptions.

**rewards-description:** Pet specific reward descriptions.

**level-up-messages:** Pet specific level up messages.

**level-commands:** Commands to be executed when levelling the pet.

**entity-texture:** The texture of the pet that follows you around. Use `modelengine:<id>` if you're using Model Engine.

**modelengine-animation:** If you're using Model Engine, you can supply an animation here

**icon:** The item to show in /pets, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

### Spawn Egg

**enabled:** If the skill should show in /pets.

**icon:** The item to show in /pets, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The name of the spawn egg in-game.

**lore:** The lore to show in /pets when hovering the icon. 

**craftable:** If the item should be craftable (true/false).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system/recipes).

**recipe-permission:** (Optional) The permission required to craft the recipe.

### Effects & Conditions

You can configure effects, conditions, filters, and mutators in this section to run whilst this pet is  active.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

## Internal Placeholders

| Placeholder         | Value                                                                    |
|---------------------|--------------------------------------------------------------------------|
| `%level%`           | The player's pet level. Useful for creating scaling effects              |
| `%level_numeral%`   | The player's pet level shown as Numerals                                 |
| `%level_x%`         | The player's pet level, +/- a value. eg. `%level_-1%` is current level-1 |
| `%level_x_numeral%` | The player's pet level, +/- a value, shown as Numerals                   |
