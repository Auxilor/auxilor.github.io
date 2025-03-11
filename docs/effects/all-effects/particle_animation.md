# `particle_animation`

Plays a particle animation

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: particle_animation
>   args:
>       particle: soul # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
>       particle-amount: 1 # The amount of particles to spawn on each point
>       animation: ground_spiral # The ID of the animation
>       tick-multiplier: 1 # (Optional) increases the speed of the animation by some multiplier
>       entity: player # (Optional) specifies the entity to have the animation activate around (player, victim, projectile)
>       use-eye-location: true # (Optional) Sets the entity location to be at eye level rather than ground level
>       particle_args: # Arguments for the animation
>           scalar: 1.618
>           distance-scalar: 0.5
>           duration: 20
>     ...other config (eg triggers, filters, mutators, etc)
> ```

> [!help] List of Animations
> | ID              | Description                                 | Args                                                                                                                                                                                                                                                     |
> |-----------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `trace`         | Draw a line from the location to the player | `spacing` The spacing between particles                                                                                                                                                                                                                  |
> | `ground_spiral` | Create a spiral of particles on the ground  | `scalar` The x/y scalar <br/> `distance-scalar` The distance scalar <br/> `duration` The duration of the animation, in ticks                                                                                                                             |
> | `circle`        | Draw a circle of particles                  | `radius` The circle's radius <br/> `duration` The time taken to draw the circle, in ticks <br/> `height` The height above the location to draw the circle <br/> `pitch` The circle's pitch (in degrees) <br/> `roll` The roll of the circle (in degrees) |
> | `helix`         | Draw a helix of particles                   | `height` The height to draw the helix <br/> `duration` The time taken to draw the helix, in ticks <br/> `speed` The speed at which to draw the helix <br/> `radius` The radius of the helix                                                              |
> | `double_helix`  | Draw a double helix of particles            | `height` The height to draw the helix <br/> `duration` The time taken to draw the helix, in ticks <br/> `speed` The speed at which to draw the helix <br/> `radius` The radius of the helix                                                              |
> | `twirl`         | Twirl particles (double expanding spiral)   | `small-radius` The small radius <br/> `large-radius` The large radius <br/> `duration` The animation duration, in ticks <br/> `start-height` The start height <br/> `end-height` The end height <br/> `speed` The speed at which to draw the animation   |
