---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID                         | Description                                 | Value Provided        |
| -------------------------- | ------------------------------------------- | --------------------- |
| `claim_battlepass_reward`  | Triggered when claiming a battlepass reward | 1                     |
| `complete_battlepass_task` | Triggered when completing a battlepass task | 1                     |
| `gain_battlepass_xp`       | Triggered when gaining battlepass XP        | The experience gained |
| `tier_up_battlepass`       | Triggered when tiering up the battlepass    | The new level         |
