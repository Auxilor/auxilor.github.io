---
title: How to make a Task
sidebar_position: 3
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoQuests/tree/master/eco-core/core-plugin/src/main/resources/tasks).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add tasks
Each task is its own config file, placed in the `/tasks/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Task is the file name. This is what you use in quests and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

Tasks are the goals that players must complete in order to complete [[how-to-make-a-quest|quests]].

## Example Task Config

```yaml
description: "&fBreak stone blocks (&a%xp%&8/&a%required-xp%&f)" # The description of the task.

# An XP gain method takes a trigger, a multiplier, conditions, and filters.
# The 'multiplier' takes the value produced by the trigger and multiplies it
# Alternatively, you can use 'value' to count a specific number and not a multiplier
xp-gain-methods:
  - trigger: mine_block # See list of triggers: https://plugins.auxilor.io/effects/all-triggers
    multiplier: 1 # You can also use "value" here (see above comment)
    filters: # (Optional) Example of using filters in tasks
      blocks:
        - stone

# An optional list of effects to run when a player completes the task
# Read here: https://plugins.auxilor.io/effects/configuring-an-effect
on-complete:
  - id: send_message
    args:
      message: "Task Completed!"
```

## Understanding all the sections

**description:** The description of the quest. Shown in the quest lore in /quests

**xp-gain-methods:** The trigger, multiplier/value, conditions and filters that will award task XP

**on-complete:** Effects to be run when the task is completed (Supports triggered effects). See [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

### Effects

The task rewards uses the effects system. You can configure effects, conditions, filters, and mutators in this section to run when the quest is started or as rewards.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

### Internal Placeholders

`%xp%` The amount of XP the player has in this task
`%required-xp` The amount of XP required to complete this task