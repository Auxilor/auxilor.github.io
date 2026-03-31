---
title: "How to make a Crate"
sidebar_position: 3
---

Crates are the core of EcoCrates. This is where you define how a crate opens, which key it uses, what players see in previews, and which rewards can be won.

## How to add crates

Each crate is its own config file, placed in the `/crates/` folder, and you can add or remove them as you please. There is an example config called `_example.yml` to help you out!

The ID of the crate is the file name. This is what you use in commands, key configs, and effects.\
ID's must be lowercase letters, numbers, and underscores only.

## Example Crate Config

```yaml
name: "Demo Crate"
roll: csgo
can-reroll: true

key: demo_crate

preview:
  title: Demo Crate
  rows: 6
  forwards-arrow:
    item: arrow name:"&fNext Page"
    row: 6
    column: 6
  backwards-arrow:
    item: arrow name:"&fPrevious Page"
    row: 6
    column: 4
  pages:
    - page: 1
      mask:
        items:
          - gray_stained_glass_pane
          - black_stained_glass_pane
        pattern:
          - "222222222"
          - "211111112"
          - "211011112"
          - "211110112"
          - "211111112"
          - "222222222"
      rewards:
        - id: diamond_sword
          row: 3
          column: 4
        - id: stack_of_emeralds
          row: 4
          column: 6

pay-to-open:
  enabled: false
  price: 5000
  type: coins

open-effects:
  - id: send_message
    args:
      message: "Good luck!"

finish-effects:
  - id: send_message
    args:
      message: "You won %reward%&f!"

rewards:
  - diamond_sword
  - stack_of_emeralds
```

## Understanding the Sections

#### The Crate Basics Section

```yaml
name: "Demo Crate" # The display name of the crate
roll: csgo # The opening style, check here: https://plugins.auxilor.io/ecocrates/animationsandrolls
can-reroll: true # If once you win a reward, you can choose to reroll

key: demo_crate # The ID of the key for this crate (configure in /keys/demo_crate.yml)
                # Multiple crates can share the same key by using the same key ID here.
```

#### The Preview GUI Section

```yaml
preview:
  title: Demo Crate # The title of the preview GUI
  rows: 6 # The amount of rows for the gui, between 1 and 6
  pages:
    - page: 1
      mask: # Filler items for decoration
        items: # Add as many items as you want
          - gray_stained_glass_pane # Item 1
          - black_stained_glass_pane # Item 2
      rewards:
        - id: diamond_sword # The reward ID
          row: 3 # The row
          column: 4 # The column
```

#### The Pay to Open Section

```yaml
pay-to-open:
  enabled: false # If it should be allowed
  price: 5000 # The price to buy the crate
  type: coins # The type of currency to use
```

#### The Open and Finish Effects Section

```yaml
open-effects:
  - id: broadcast
    args:
      message: "%player%&f is opening the %crate%&f!"

finish-effects:
  - id: broadcast
    args:
      message: "%player%&f won %reward%&f from the %crate%&f!"
```

You can configure effects, conditions, filters, to run when the crate is opened or when the crate is finished rolling.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

#### The Rewards List Section

```yaml
# The rewards to give, configure in /rewards/ folder
# This is separate to the reward locations so that you could have secret rewards that don't show up in the preview GUI
rewards:
  - diamond_sword
  - stack_of_emeralds
  - 1000_coins
```

## Internal Placeholders

| Placeholder | Value |
| ----------- | ----- |
| `%player%`  | The player's name. |
| `%crate%`   | The crate display name. |
| `%reward%`  | The reward display name. |

<hr/>

## Default Configs
The default configs can be found [here](https://github.com/Auxilor/EcoCrates/tree/master/eco-core/core-plugin/src/main/resources/crates).


