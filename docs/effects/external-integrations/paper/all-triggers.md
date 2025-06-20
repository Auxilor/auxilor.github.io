---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID               | Description                                           | Value Provided                    |
| ---------------- | ----------------------------------------------------- | --------------------------------- |
| `beacon_effect`  | Triggered when a player gains effects from a beacon   | 1                                 |
| `elytra_boost`   | Triggered when a player boosts an elytra              | 1                                 |
| `swing`          | Triggered when swinging an item, hand or weapon       | 1                                 |
| `trident_attack` | Triggered on injuring an entity with a thrown trident | The damage dealt                  |
| `villager_trade` | Triggered when trading with a villager                | The experience the villager gains |

