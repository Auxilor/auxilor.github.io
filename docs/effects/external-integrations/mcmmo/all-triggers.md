---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect
is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID                         | Description                                    | Value Provided |
| -------------------------- | ---------------------------------------------- | -------------- |
| `gain_mcmmo_xp`            | Triggered when gaining McMMO xp                | The xp gained  |
| `level_down_mcmmo`         | Triggered when levelling down McMMO skill      | The new level  |
| `level_up_mcmmo`           | Triggered when levelling up McMMO skill        | The new level  |
| `mcmmo_ability_activate`   | Triggered when an McMMO ability is activated   | 1              |
| `mcmmo_ability_deactivate` | Triggered when an McMMO ability is deactivated | 1              |

