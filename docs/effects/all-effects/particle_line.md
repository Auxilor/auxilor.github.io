# `particle_line`
#### Triggered Effect

Spawns a line of particles between you and the target location

# Example Config
```yaml
- id: particle_line
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn on each point
    spacing: 1.5 # The spacing between each particle in the line
  ...other config (eg triggers, filters, mutators, etc)
```
