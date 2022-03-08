---
title: Configuring an Effect
sidebar_position: 1
---

## Example Effect Config
```yaml
id: spawn_particle
args:
  amount: 10
  chance: 25
  particle: soul
triggers: 
  - mine_block
filters:
  blocks:
    - diamond_ore
    - ancient_debris
conditions: []
mutators:
  - id: translate_location
    args:
      add_x: 0.5
      add_y: 0.5
      add_z: 0.5
```

This is an effect that gives you a 10% chance to spawn 10 soul particles in the middle of a block of diamond ore or ancient debris when it's mined

**Any numeric value (integer, decimal) can be a mathematical expression involving placeholders!**

For example, you can specify the chance to be dependent on your y level: as in `chance: 100 -%player_y%` - permanent effects will evaluate the expression on activation, and triggered effects will evaluate it on each trigger. Make sure you only use placeholders with numeric values, as you will get an error otherwise.

## The sections