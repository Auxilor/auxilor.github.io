---
title: Triggers
sidebar_position: 4
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect
is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID                     | Description                                      | Value Provided |
| ---------------------- | ------------------------------------------------ | -------------- |
| `bonemeal_custom_crop` | Triggered when applying bonemeal to custom crops | 1              |
| `harvest_custom_crop`  | Triggered when harvesting a custom crop          | 1              |
| `plant_custom_crop`    | Triggered when planting a custom crop            | 1              |
| `use_fertilizer`       | Triggered when using fertilizer                  | 1              |
| `use_watering_can`     | Triggered when using a watering can              | 1              |
