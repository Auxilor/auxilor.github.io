---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, and some product an alt-value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID               | Description                                                                             | Value                             | Alt-Value |
| ---------------- | --------------------------------------------------------------------------------------- | --------------------------------- | --------- |
| `beacon_effect`  | Triggered when a player gains effects from a beacon                                     | 1                                 | -         |
| `elytra_boost`   | Triggered when a player boosts an elytra                                                | 1                                 | -         |
| `rename_entity`  | Triggered when a player renames an entity using a name tag **Requires Paper**           | 1                                 | -         |
| `swing`          | Triggered when swinging an item, hand or weapon                                         | 1                                 | -         |
| `trident_attack` | Triggered on injuring an entity with a thrown trident                                   | The damage dealt                  | -         |
| `use_flower_pot` | Triggered when a player insets or extracts a plant from a flower pot **Requires Paper** | 1                                 | -         |
| `villager_trade` | Triggered when trading with a villager                                                  | The experience the villager gains | -         |

