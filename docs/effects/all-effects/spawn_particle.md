# `spawn_particle`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Spawns a [particle](https://plugins.auxilor.io/all-plugins/the-particle-lookup-system)

# Effect Syntax
```yaml
- id: spawn_particle
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn
  ...other config (eg triggers, filters, mutators, etc)
```