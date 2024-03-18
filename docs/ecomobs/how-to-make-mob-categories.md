---
title: "Mob Categories"
sidebar_position: 3
---

## What are categories?

In EcoMobs, each mob belongs to a category, which control things like spawning behavior.

For example, you might have a category for common mobs, one for rare mobs, one for nether bosses, etc.

## How to add categories
Each category is its own config file, placed in the `/categories/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the category is the file name. This is what you use when [creating a mob](https://plugins.auxilor.io/ecomobs/how-to-make-a-custom-mob).
ID's must be lowercase letters, numbers, and underscores only.

## Example Category Config

```yaml
# If the mob is persistent, then it will not despawn naturally.
persistent: false

spawning:
  # Available methods:

  # replace
  # Uses the vanilla spawning system to spawn the mob, by replacing
  # the vanilla mob with the custom mob when it spawns.

  # custom
  # Uses the EcoMobs spawning system.

  # none
  # Disables natural spawning

  type: custom

  # Options for replace spawning
  replace:
    # The vanilla mobs to replace
    replace:
      - zombie
      - skeleton

  # Options for custom spawning
  custom:
    # Spawn types (choose from land, water)
    spawn-types:
      - land

    # Conditions that the location must match in order for the mob to spawn
    # Read here: https://plugins.auxilor.io/effects/configuring-a-condition
    conditions: [ ]

    # The chance for the mob to spawn if a valid spawn point is found (as a percentage)
    chance: 1.5
```

## Understanding all the sections

**persistent:** If the mob should **not** despawn (True/False).
### Spawning

| Type    | Behavior                                                                                |
| ------- | --------------------------------------------------------------------------------------- |
| replace | Uses the vanilla spawning system by replacing the vanilla mob. (supports `chance:` arg) |
| custom  | Uses the EcoMobs spawning system.                                                       |
| none    | Disables natural spawning.                                                              |
**type:** The spawning method

#### Replace
The vanilla mobs to replace, supports `chance` args:
```yaml
  replace:
    replace:
      - zombie
      - skeleton
    chance: 100
```
#### Custom

**spawn-types:** Where to spawn (land/water).

**conditions:** Conditions to be met for the mob to spawn, read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).

**chance:** The chance of the mob spawning once conditions are met.