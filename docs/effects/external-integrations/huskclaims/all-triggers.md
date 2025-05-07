---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect
is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID             | Description                          | Value Provided |
| -------------- | ------------------------------------ | -------------- |
| `claim_land`   | Triggered when claiming land         | 1              |
| `enter_claim`  | Triggered when entering claimed land | 1              |
| `leave_claim`  | Triggered when leaving claimed land  | 1              |
| `unclaim_land` | Triggered when unclaiming land       | 1              |
