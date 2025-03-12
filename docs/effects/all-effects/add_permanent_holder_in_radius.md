# `add_permanent_holder_in_radius`
#### Permanent Effect

Gives a custom holder to people within a certain radius of you.

A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc.

# Example Config
```yaml
- id: add_permanent_holder_in_radius
  args:
    effects: 
      - id: multiply_all_stats
        args:
          multiplier: 1.05
    conditions: []
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```
