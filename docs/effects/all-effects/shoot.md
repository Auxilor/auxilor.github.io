# `shoot`
#### Triggered Effect

Shoots a projectile

# Example Config
```yaml
- id: shoot
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    projectile: arrow # The name of the projectile
  ...other config (eg triggers, filters, mutators, etc)
```
