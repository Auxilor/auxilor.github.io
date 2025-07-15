---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, and some product an alt-value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID                     | Description                                    | Value               | AltValue        |
| ---------------------- | ---------------------------------------------- | ------------------- | --------------- |
| `claim`                | Triggered when claiming an area                | 1                   | -               |
| `enter_claim`          | Triggered when entering a claimed area         | 1                   | -               |
| `exit_claim`           | Triggered when exiting a claimed area          | 1                   | -               |
| `join_land`            | Triggered when joining a Town                  | 1                   | -               |
| `lands_bank_deposit`   | Triggered when depositing into the Lands bank  | The value deposited | The new balance |
| `lands_bank_withdraw`  | Triggered when withdrawing from the Lands bank | The value withdrawn | The new balance |
| `lands_spawn_teleport` | Triggered when teleporting to Lands spawn      | 1                   | -               |
| `leave_land`           | Triggered when leaving a Town                  | 1                   | -               |
| `unclaim`              | Triggered when unclaiming an area              | 1                   | -               |
