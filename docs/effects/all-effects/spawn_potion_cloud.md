# `spawn_potion_cloud`
#### Triggered Effect

Spawns a [potion](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) cloud

# Effect Syntax
```yaml
- id: spawn_potion_cloud
  args:
    effect: blindness # The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    level: 1 # The level to give
    duration: 80 # The duration of the effect (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```
