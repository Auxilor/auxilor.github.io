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

| ID                     | Description                                    | Value(s)                                                     |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `join_land`            | Triggered when joining a Land                  | `value: 1`                                                   |
| `lands_bank_deposit`   | Triggered when depositing into the Lands bank  | `value: The value deposited`<br/>`alt-value: The new balance` |
| `lands_bank_withdraw`  | Triggered when withdrawing from the Lands bank | `value: The value withdrawn`<br/>`alt-value: The new balance` |
| `lands_spawn_teleport` | Triggered when teleporting to Lands spawn      | `value: 1`                                                   |
| `claim`                | Triggered when claiming an area                | `value: 1`                                                   |
| `exit_claim`           | Triggered when exiting a claimed area          | `value: 1`                                                   |
| `unclaim`              | Triggered when unclaiming an area              | `value: 1`                                                   |