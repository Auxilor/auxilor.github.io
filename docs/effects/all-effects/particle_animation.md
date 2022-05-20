# `particle_animation`
#### Triggered Effect

Plays a particle animation

## List of Animations
| ID | Description |Args |
| --- | --- | --- |
| `trace` | Draw a line from the location to the player | No specific options |
| `ground_spiral` | Create a spiral of particles on the ground | `scalar` The x/y scalar <br/> `distance-scalar` The distance scalar <br/> `duration` The duration of the animation, in ticks |


# Example Config
```yaml
- id: particle_animation
  args:
    particle: soul # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    particle-amount: 1 # The amount of particles to spawn on each point
    tick-multiplier: 1 # (Optional) increases the speed of the animation by some multiplier
    victim-as-entity: false # (Optional) instead of the player location, use the victim location
    animation: ground_spiral # The ID of the animation
    particle_args: # Arguments for the animation
      scalar: 1.618
      distance-scalar: 0.5
      duration: 20
  ...other config (eg triggers, filters, mutators, etc)
```
