---
title: How to make a Quest
sidebar_position: 2
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoQuests/tree/master/eco-core/core-plugin/src/main/resources/quests).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add quests
Each quest is its own config file, placed in the `/quests/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Quest is the file name. This is what you use in commands and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

Quests are made up of specific [[how-to-make-a-task|tasks]], and when all tasks are completed the quest will complete, giving the player rewards!

## Example Quest Config

```yaml
name: "Traveller" # The name of the task
description: "&7Stretch your legs! Walk around Lumoria and find new places to explore."

# How many minutes between this quest being reset (set to -1 to disable)
# 1 Day: 1440
# 1 Week: 10080
# 1 Month: 43200
reset-time: -1

# A list of tasks and their XP requirements to complete this quest.
# If the task is one action, set XP to 1.
# XP requirements can use placeholder math, for example %ecoskills_combat% * 100
tasks:
  - task: move
    xp: 1000

# (For resettable tasks) The amount of tasks to select from the list above.
# Set to -1 to use all tasks.
task-amount: -1

# The messages for the %rewards% placeholder in icons, messages, etc.
reward-messages:
  - " &8» &r&f+2 %ecoskills_defense_name%"

# A list of effects to run when the quest is completed.
# Read https://plugins.auxilor.io/effects/configuring-an-effect
rewards: []

# If the player should be told when they have started the quest.
announce-start: false

# A list of effects to run when the quest is started.
# Read https://plugins.auxilor.io/effects/configuring-an-effect
start-effects: []

# A list of conditions required to start the quest.
# The quest will be automatically started when these conditions are met.
# Read https://plugins.auxilor.io/conditions/configuring-a-condition
# If gui.always is true, then not-met-lines will show up on the GUI icon!
start-conditions: []

# If the quest should auto start when all conditions are met
# If this is set to false, the quest can only be started with /ecoquests start
auto-start: true

# Options for the /quests GUI
gui:
  enabled: true # If the quest should be shown in the GUI
  always: false # If the quest should always be in the GUI, even if it's not started
  # The item to show in the GUI, read https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  item: paper
```

## Understanding all the sections

**name**: The item name in-game.

**description**: The item lore shown in-game. Set to `description: []` to remove all lore lines.

**reset-time:** The time (in ticks) between being reset

**tasks:** The list of tasks and their XP requirements.
```yaml
tasks:
  - task: move # The ID of the task (from /ecoquests/tasks/id.yml)
    xp: 1000 # The amount of XP required to complete the task
```

**task-amount:** The amount of tasks to be completed. These are selected from the list at random. Set to `-1` to use all tasks.

**reward-messages:** The message for the `%rewards%` placeholder in icons, messages, etc.

**rewards:** Effects to be run when the quest is completed (Supports triggered effects). See [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

**announce-start:** If the player should be told the quest has started (true/false)

**start-effects:** Effects to be run when the quest is started (Supports triggered effects). See [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

**start-conditions:** Conditions that must be met for the quest to start. See [[configuring-a-condition|Configuring a Condition]].

**auto-start:** If the quest should start automatically when the conditions are met.

### GUI

**enabled:** If the quest should appear in /quests

**always:** If the quest should always appear in /quests, even when not started

**item:** The item to show in /quests, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system)

### Effects & Conditions

The quest rewards uses the effects system. You can configure effects, conditions, filters, and mutators in this section to run when the quest is started or as rewards.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.