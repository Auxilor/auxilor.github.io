# `shoot_arrow`
#### Triggered Effect

Shoots an arrow

# Example Config
```yaml
- id: shoot_arrow
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
  ...other config (eg triggers, filters, mutators, etc)
```
