---
title: "Mob Categories"
sidebar_position: 3
---

## What are categories?

In EcoMobs, each mob belongs to a category, which control things like spawning behaviour.

For example, you might have a category for common mobs, one for rare mobs, one for nether bosses,
etc.

## How to add categories
Categories are each config files placed in the `/categories/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Example Mob Config

```yaml
# The ID of the category is the name of the .yml file,
# for example bosses.yml has the ID of bosses
# You can place categories anywhere in this folder,
# including in subfolders if you want to organize your category configs
# _example.yml is not loaded.

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


# If the mob is persistent, then it will not despawn naturally.
persistent: false

```
