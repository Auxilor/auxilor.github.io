# `add_holder_to_victim`
#### Triggered Effect

Gives a custom holder temporarily to your victim (they must be a player) for a given period of time

A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc.

You can create custom holders temporarily and give them on a trigger, for example to give permanent effects for a period of time.

# Effect Syntax
```yaml
- id: add_holder_to_victim
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
  ...other config (eg triggers, filters, mutators, etc)
```