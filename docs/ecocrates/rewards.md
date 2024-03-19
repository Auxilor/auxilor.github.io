---
title: "Rewards"
sidebar_position: 3
---

## Default config
The default reward config can be found [here](https://github.com/Auxilor/EcoCrates/blob/master/eco-core/core-plugin/src/main/resources/rewards.yml).

## How to configure rewards
Each reward goes into the `rewards.yml` file. From here you reference each one in your crates using the ID of the reward.

## Example Reward Config

```yaml
  - id: 1000_coins
    commands:
      - "eco give %player% 1000"
    items: [ ]
    messages: [ ]
    max-wins: -1
    weight:
      permission-multipliers: false
      actual: 10
      display: 25
    display:
      name: "&a$1000"
      item: paper 1 unbreaking:1 hide_enchants
      dont-keep-lore: false
      lore:
        - "&fDisplay Chance: &a%chance%%"
        - "&fActual Chance: &a%actual_chance%%"
```

## Understanding all the sections

**id:** The ID of the reward, used to add the reward to a crate

**commands:** Commands to be ran when the reward is won - use %player% for the player-name

**items:** A list of items to be given to the player when the reward is won, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**messages:** The messages to be sent to the player when they win

**max-wins:** The max amount of times a given player can win the reward, perfect for single-use rewards like giving particle effects. Set to -1 to disable
#### Weight

**permission-multipliers:** If permission chance multipliers should apply to this reward

**actual:** The actual chance of winning the reward

**display:** The chance of the reward showing up in crate animations - this allows you to rig crates however you want, for example making a rare (or even unwinnable) item appear common, or vice versa. Both actual and display weight let you use PAPI placeholders to calculate them, for example `%player_y%`, if you want the chance to depend on a placeholder - very useful if you're basing it off of wins, ranks, or whatever - this supports mathematical expressions too, like when configuring an effect in my other plugins

#### Display

**name:** The name of the reward

**item:** The item to be shown in animations and previews, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**dont-keep-lore:** (Optional) Set to true to only show custom lore.

**lore:** The lore of the item.
## Internal Placeholders

| Placeholder       | Value                       |
| ----------------- | --------------------------- |
| `%chance%`        | The reward's display chance |
| `%actual_chance%` | The reward's actual chance  |


