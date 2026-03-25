---
title: How to configure Rewards
sidebar_position: 2
---

## How to create crate rewards
Each reward goes into the `rewards.yml` file, located in the `/plugins/EcoCrates/` folder.

The ID of the reward is what you use to reference it in your crates.
ID's must be lowercase letters, numbers, and underscores only.

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
    display:
      name: "&a$1000"
      item: paper 1 unbreaking:1 hide_enchants
      dont-keep-lore: false
      lore:
        - "&fWin Chance: &a%chance%%"
```

## Understanding all the sections

### The Reward Object Section

```yaml
- id: 1000_coins # The ID of the reward
  # Commands to be run when the reward is won, use %player% for the player name
  commands:
    - "eco give %player% 1000"
  # The reward item, read more here: https://plugins.auxilor.io/the-item-lookup-system
  items:
    - paper 1 name:"&a$1000" glint
  # Messages to be sent to the player when they win
  messages:
    - "&7Congratulations, you won &a$1000!"
  max-wins: -1 # The max amount of times a player can win this reward, set to -1 to disable
```

### The Reward Weight Section

```yaml
weight:
  permission-multipliers: false # If permission chance multipliers should apply to this reward. Configure these in config.yml
  actual: 10 # The actual chance of winning the reward
```
The reward's win chance is calculated as `<weight of element> / <sum of all weights>`.

### The Reward Display Section

```yaml
display:
  name: "&a$1000" # The display name of the reward
  # The reward display item, read more here: https://plugins.auxilor.io/the-item-lookup-system
  item: paper 1 glint
  dont-keep-lore: false # (Optional) Set to true to only show custom lore
  lore: # The custom lore to show in the display
    - "&fWin Chance: &a%chance%%"
```

## Internal Placeholders

| Placeholder | Value                   |
|-------------|-------------------------|
| `%chance%`  | The reward's win chance |

<hr/>

## Default configs
The default reward config can be found [here](https://github.com/Auxilor/EcoCrates/blob/master/eco-core/core-plugin/src/main/resources/rewards.yml).