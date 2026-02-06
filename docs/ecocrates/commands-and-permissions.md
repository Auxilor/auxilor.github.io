---
title: "Commands and Permissions"
sidebar_position: 5
---

## General Information
All crates commands can be either `/crates`, `/crate`, or `/ecocrates`

| Command                                                         | Description                                   | Permission                           |
|-----------------------------------------------------------------|-----------------------------------------------|--------------------------------------|
| `/ecocrates reload`                                             | Reloads the plugin                            | `ecocrates.command.reload`           |
| `/ecocrates set <crate>`                                        | Set the block you're looking at to be a crate | `ecocrates.command.set`              |
| `/ecocrates give <player> <crate> [physical/physical] [amount]` | Gives a player a key                          | `ecocrates.command.give`             |
| `/ecocrates giveall <crate> [physical/physical] [amount]`       | Give all online players a key                 | `ecocrates.command.giveall`          |
| `/ecocrates take <player> <crate> [physical/physical] [amount]` | Takes a key from a player                     | `ecocrates.command.take`             |
| `/ecocrates keys`                                               | View your keys                                | `ecocrates.command.keys`             |
| `/ecocrates preview <crate>`                                    | Open the preview for a crate                  | `ecocrates.command.preview`          |
| `/ecocrates open <crate> [player]`                                 | Opens a crate virtually                       | `ecocrates.command.open`             |
| `/ecocrates forceopen <crate>`                                     | Force-opens a crate without a key             | `ecocrates.command.forceopen`        |
| `/ecocrates forceopen <crate> [player]`                            | Force-opens a crate for another player        | `ecocrates.command.forceopen.others` |
| `/ecocrates resetwins <player/all>`                                | Resets the wins for a reward                  | `ecocrates.command.resetwins`        |

### Additional Permissions

| Permission                 | Description                                                                                                  |
|----------------------------|--------------------------------------------------------------------------------------------------------------|
| `ecocrates.reroll.<crate>` | Permission to re-roll the crate reward (if enabled). Given by default, negate permission to prevent re-rolls |

#### Chance multiplier permissions

You can create permissions to give players a chance multiplier for specific rewards in `config.yml`

```yaml
permission-multipliers:
  - permission: ecocrates.mutliplier.vip # The permission node
    multiplier: 1.5 # The chance multiplier
    priority: 1 # The priority of the multiplier, higher priority multipliers override lower ones, 2 > 1
```