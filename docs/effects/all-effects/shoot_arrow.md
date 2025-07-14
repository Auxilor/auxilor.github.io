# `shoot_arrow`
#### Triggered Effect

Shoots an arrow

# Effect Syntax
```yaml
- id: shoot_arrow
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    launch-at-location: false # If the arrow should be launched at the location of the trigger rather than the player (Default: false)
  ...other config (eg triggers, filters, mutators, etc)
```
