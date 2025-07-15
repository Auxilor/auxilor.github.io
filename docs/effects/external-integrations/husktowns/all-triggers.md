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

| ID                 | Description                            | Value(s)   |
| ------------------ | -------------------------------------- | ---------- |
| `change_town_role` | Triggered when changing town role      | `value: 1` |
| `create_town`      | Triggered when creating a Town         | `value: 1` |
| `disband_town`     | Triggered when disbanding a Town       | `value: 1` |
| `join_town`        | Triggered when joining a Town          | `value: 1` |
| `leave_town`       | Triggered when leaving a Town          | `value: 1` |
| `enter_claim`      | Triggered when entering a claimed area | `value: 1` |
| `claim`            | Triggered when claiming an area        | `value: 1` |
| `exit_claim`       | Triggered when exiting a claimed area  | `value: 1` |
| `unclaim`          | Triggered when unclaiming an area      | `value: 1` |

