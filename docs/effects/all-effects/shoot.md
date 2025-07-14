# `shoot`
#### Triggered Effect

Shoots a [projectile](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/Projectile.html)

# Effect Syntax
```yaml
- id: shoot
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    projectile: arrow # The name of the projectile
    launch-at-location: false # If the projectile should be launched at the location of the trigger rather than the player (Default: false)
  ...other config (eg triggers, filters, mutators, etc)
```
