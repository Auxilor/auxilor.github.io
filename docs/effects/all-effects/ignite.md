# `ignite`
#### Triggered Effect

Lights the victim on fire

# Example Config
```yaml
- id: play_sound
  args:
    damage_per_tick: 8 # The amount of damage to deal per fire tick
    ticks: 100 # The amount of time the victim should be on fire for
  ...other config (eg triggers, filters, mutators, etc)
```