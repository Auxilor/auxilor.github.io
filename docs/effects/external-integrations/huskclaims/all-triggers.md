---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect
is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID            | Description                            | Value Provided |
| ------------- | -------------------------------------- | -------------- |
| `claim`       | Triggered when claiming an area        | 1              |
| `enter_claim` | Triggered when entering a claimed area | 1              |
| `exit_claim`  | Triggered when exiting a claimed area  | 1              |
| `unclaim`     | Triggered when unclaiming an area      | 1              |
