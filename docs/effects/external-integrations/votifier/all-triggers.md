---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect
is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID              | Description                                  | Value Provided |
| --------------- | -------------------------------------------- | -------------- |
| `register_vote` | Triggered when a player votes for the server | 1              |

