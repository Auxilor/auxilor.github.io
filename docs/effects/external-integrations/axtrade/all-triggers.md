---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, and some product an alt-value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID             | Description                          | Value                        | Alt-Value |
| -------------- | ------------------------------------ | ---------------------------- | --------- |
| `player_trade` | Triggered when trading with a player | Total number of items traded | -         |

