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

| ID               | Description                                                                             | Value(s)                                                       |
|------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `beacon_effect`  | Triggered when a player gains effects from a beacon                                     | `value: 1`                                                     |
| `compost_item`   | Triggered when a player uses a composter                                                | `value: 1`<br/>`alt-value: 1 (If the composter level increases)` |
| `elytra_boost`   | Triggered when a player boosts an elytra                                                | `value: 1`                                                     |
| `rename_entity`  | Triggered when a player renames an entity using a name tag **Requires Paper**           | `value: 1`                                                     |
| `swing`          | Triggered when swinging an item, hand or weapon                                         | `value: 1`                                                     |
| `trident_attack` | Triggered on injuring an entity with a thrown trident                                   | `value: The damage dealt`                                      |
| `use_flower_pot` | Triggered when a player insets or extracts a plant from a flower pot **Requires Paper** | `value: 1`                                                     |
| `villager_trade` | Triggered when trading with a villager                                                  | `value: The experience the villager gains`                     |
