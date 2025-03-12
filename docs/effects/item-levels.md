---
title: "Item Levels"
sidebar_position: 9
---

Item Levels work similarly to item points, but instead of being set directly, they're levelled up by gaining XP.

You can create as many item levels as you want.

## How to make an Item Level

Item Levels are each config files placed in the `/plugins/libreforge/levels/` folder, and you can add or remove them as
you please.
There's an example config called `_example.yml` to help you out!

> [!example]
> ```yaml
> # There are two ways to specify level XP requirements:
> #  1. A formula to calculate for infinite levels
> #  2. A list of XP requirements for each level
> 
> # Formula
> # xp-formula: (2 ^ %level%) * 25
> # max-level: 10 (Optional: The max level)
> 
> # List
> requirements:
>     - 50
>     - 100
>     - 200
>     - 400
>     - 1000
>     - 2000
>     - 5000
>     - 10000
>     - 17500
>     - 40000
>     - 100000
>     - 250000
> 
> # Effects to run when an item levels up
> # %level% is the level the item leveled up to.
> level-up-effects:
>     - id: send_message
>       args:
>           message: "&fYou leveled up to &a%level%&f!"
>     - id: play_sound
>       args:
>           sound: entity_player_levelup
>           volume: 1.0
>           pitch: 1.5
> ```

## Placeholders

You can get the value of a point with the following placeholders:

> [!help] List of Placeholders
> 
> | Placeholder                            | Description                                                |
> | -------------------------------------- | ---------------------------------------------------------- |
> | `%libreforge_item_points_<type>%`      | The amount of points                                       |
> | `%libreforge_item_xp_<type>%`          | The current XP                                             |
> | `%libreforge_item_level_<type>%`       | The current level                                          |
> | `%libreforge_item_xp_required_<type>%` | The XP required to level up                                |
> | `%libreforge_item_progress_<type>%`    | The current progress towards levelling up, as a percentage |
> | `%libreforge_item_data_<key>%`         | The data value                                             |
> You can also put `_numeral` on the end of any placeholder to get the value as a roman numeral.

## Example EcoItems item

Assuming you have an item level called `example`, here's an example EcoItems item that uses item levels:

> [!example]
> ```yaml
> item:
>     item: diamond_pickaxe hide_attributes unbreakable efficiency:5 blast_mining:3
>     display-name: "&eLevellable Pickaxe &8- &6%libreforge_item_level_example_numeral%"
>     lore:
>         - "&fCurrently on level &a%libreforge_item_level_example%"
>         - "&fXP: &a%libreforge_item_xp_example%&8/&a%libreforge_item_xp_required_example% &f(&a%libreforge_item_progress_example%%&f)"
>     craftable: false
>     recipe: [ ]
> 
> slot: mainhand
> 
> effects:
>     - id: level_item
>       args:
>           id: example
>           xp: "%v%"
>       triggers:
>           - mine_block
> 
> conditions: [ ]
> ```
