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

| ID                         | Description                                 | Value(s)                       |
| -------------------------- | ------------------------------------------- | ------------------------------ |
| `claim_battlepass_reward`  | Triggered when claiming a battlepass reward | `value: 1`                     |
| `complete_battlepass_task` | Triggered when completing a battlepass task | `value: 1`                     |
| `gain_battlepass_xp`       | Triggered when gaining battlepass XP        | `value: The experience gained` |
| `tier_up_battlepass`       | Triggered when tiering up the battlepass    | `value: The new level`         |
