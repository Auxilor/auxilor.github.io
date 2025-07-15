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

| ID               | Description                                    | Value(s)                       |
| ---------------- | ---------------------------------------------- | ------------------------------ |
| `gain_skill_xp`  | Triggered when gaining skill experience points | `value: The experience gained` |
| `level_up_skill` | Triggered when levelling up                    | `value: The new level`         |
| `regen_magic`    | Triggered when regenerating magic              | `value: 1`                     |
