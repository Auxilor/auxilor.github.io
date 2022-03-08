---
title: "All Effects"
sidebar_position: 2
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

| ID | Description | Config Options (args) | Triggered Or Permanent |
| --- | --- | --- | --- |
| `arrow_ring` | Spawns a ring of arrows around a location | **amount** - The amount of arrows to spawn <br/> **height** - The height at which to spawn the arrows <br/> **radius** - The radius of the ring <br/> **arrow_damage** - The damage per arrow <br/> **fire_ticks** - The amount of fire ticks the arrow should have | Triggered |
| `attack_speed_multiplier` | Multiplies attack speed | **multiplier** - The multiplier | Permanent |
| `bonus_health` | Gives extra hearts | **health** - The amount of health to give | Permanent |
| `crit_multiplier` | Multiplies crit (falling hit) damage | **multiplier** - The multiplier | Permanent |
| `damage_multiplier` | Multiplies incoming or outgoing damage | **multiplier** - The multiplier | Triggered |