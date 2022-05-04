---
title: "Rewards"
sidebar_position: 3
---

## How to configure a reward

Example reward config:

```yaml
  - id: 1000_coins
    commands:
      - "eco give %player% 1000"
    items: [ ]
    messages: [ ]
    weight:
      permission-multipliers: false
      actual: 10
      display: 25
    max-wins: -1
    display:
      name: "&a$1000"
      item: paper 1 unbreaking:1 hide_enchants
      dont-keep-lore: false # Optional, set to true to only show custom lore
      lore:
        - "&fDisplay Chance: &a%chance%%"
        - "&fActual Chance: &a%actual_chance%%"
```

**id:** The ID of the reward, used to add the reward to a crate

**commands:** Commands to be ran when the reward is won - use %player% for the player-name

**items:** A list of items to be given to the player when the reward is won, supports custom items, enchants, and more - read about the syntax here:

[The Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system)

**messages:** The messages to be sent to the player when they win

**weight:**

* **permission-multipliers:** If permission chance multipliers should apply to this reward
* **actual:** The actual chance of winning the reward
* **display:** The chance of the reward showing up in crate animations - this allows you to rig crates however you want, for example making a rare (or even unwinnable) item appear common, or vice versa. Both actual and display weight let you use PAPI placeholders to calculate them, for example %player_y%, if you want the chance to depend on a placeholder - very useful if you're basing it off of wins, ranks, or whatever - this supports mathematical expressions too, like when configuring an effect in my other plugins

**max-wins:** The max amount of times a given player can win the reward, perfect for single-use rewards like giving particle effects. Set to -1 to disable

**display:**

* **name:** The name of the reward
* **item:** The item to be shown in animations and previews
* **lore:** The lore of the item

## Showing a reward in the preview GUI

In order to have the reward be shown in the preview GUI, you need to specify it like this in your crate config:

```yaml
preview: # The preview GUI, when left-clicking a crate or using /crates preview
  title: Demo Crate # The GUI title
  rows: 6 # The amount of rows for the gui, between 1 and 6
  mask: # Filler items for decoration
    items: # Add as many items as you want
      - gray_stained_glass_pane # Item 1
      - black_stained_glass_pane # Item 2
    pattern:
      - "222222222"
      - "211010112"
      - "201010102"
      - "201010102"
      - "201111102"
      - "222222222"
  rewards: # Where to put rewards in the GUI
    - id: diamond_sword # The reward ID
      row: 3 # The row
      column: 2 # The column
    - id: stack_of_emeralds
      row: 4
      column: 2
    - id: bedrock
      row: 3
      column: 2
    - id: 1000_coins
      row: 5
      column: 2
```
