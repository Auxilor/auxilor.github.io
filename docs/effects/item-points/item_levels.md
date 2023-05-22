---
title: "Item Levels"
sidebar_position: 2
---

Item Levels work similarly to item points, but instead of being set directly, they're levelled up by gaining XP.

You can create as many item levels as you want.

## How to make an Item Level

Item Levels are each config files placed in the `/plugins/libreforge/levels/` folder, and you can add or remove them as
you please.
There's an example config called `_example.yml` to help you out!

## `_example.yml`

```yaml
# There are two ways to specify level XP requirements:
#  1. A formula to calculate for infinite levels
#  2. A list of XP requirements for each level

# Formula
# xp-formula: (2 ^ %level%) * 25
# max-level: 10 (Optional: The max level)

# List
requirements:
    - 50
    - 100
    - 200
    - 400
    - 1000
    - 2000
    - 5000
    - 10000
    - 17500
    - 40000
    - 100000
    - 250000

# Effects to run when an item levels up
# %level% is the level the item leveled up to.
level-up-effects:
    - id: send_message
      args:
          message: "&fYou leveled up to &a%level%&f!"
    - id: play_sound
      args:
          sound: entity_player_levelup
          volume: 1.0
          pitch: 1.5
```

## Placeholders

You can get the value of a point with the following placeholders:

`%libreforge_item_xp_<level>%`: The current XP

`%libreforge_item_level_<level>%`: The current level

`%libreforge_item_xp_required_<level>%`: The XP required to level up

`%libreforge_item_progress_<level>%`: The current progress towards levelling up, as a percentage

You can also put `_numeral` on the end of any placeholder to get the value as a roman numeral.
