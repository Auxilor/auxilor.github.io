---
title: Triggers
sidebar_position: 4
---
Triggered effects require a trigger, these are the events/actions that cause the effects to run.

Triggers can also produce a `value`, and some produce an `alt-value`, you can reference these using their to scale multipliers, level up EcoSkills/Jobs/Pets, or send messages in chat.

| Placeholder           | Value                               | Aliases                                                                    |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| `%trigger_value%`     | The value passed by the trigger     | `%triggervalue%`, `%trigger%`, `%value%`, `%tv%`, `%v%`, `%t%`             |
| `%alt_trigger_value%` | The alt-value passed by the trigger | `%alttriggervalue%`, `%alttrigger%`, `%altvalue%`, `%atv%`, `%av%`, `%at%` |
## Triggers

| ID                         | Description                                    | Value(s)               |
| -------------------------- | ---------------------------------------------- | ---------------------- |
| `gain_mcmmo_xp`            | Triggered when gaining McMMO xp                | `value: The xp gained` |
| `level_down_mcmmo`         | Triggered when levelling down McMMO skill      | `value: The new level` |
| `level_up_mcmmo`           | Triggered when levelling up McMMO skill        | `value: The new level` |
| `mcmmo_ability_activate`   | Triggered when an McMMO ability is activated   | `value: 1`             |
| `mcmmo_ability_deactivate` | Triggered when an McMMO ability is deactivated | `value: 1`             |