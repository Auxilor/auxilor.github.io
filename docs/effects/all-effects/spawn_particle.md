# `spawn_particle`
#### Triggered Effect

Spawns a [particle](https://plugins.auxilor.io/all-plugins/the-particle-lookup-system)

# Example Config
```yaml
- id: spawn_particle
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn
  ...other config (eg triggers, filters, mutators, etc)
```