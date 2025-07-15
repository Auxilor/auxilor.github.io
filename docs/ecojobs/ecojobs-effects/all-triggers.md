---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, and some product an alt-value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders), and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID             | Description                                                       | Value                 | Alt-Value |
| -------------- | ----------------------------------------------------------------- | --------------------- | --------- |
| `gain_job_xp`  | Triggered when gaining job experience points **Requires EcoJobs** | The experience gained | -         |
| `join_job`     | Triggered when joining a job **Requires EcoJobs**                 | The job level         | -         |
| `leave_job`    | Triggered when leaving a job **Requires EcoJobs**                 | The job level         | -         |
| `level_up_job` | Triggered when levelling up a job **Requires EcoJobs**            | The new level         | -         |

