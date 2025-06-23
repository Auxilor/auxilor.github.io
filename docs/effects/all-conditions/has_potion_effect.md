# `has_potion_effect`

Requires a player to have a [potion effect](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) active

# Example Config
```yaml
- id: has_potion_effect
  args:
	effect: blindness # The potion effect
    effects: # You can also specify a list of potion effects
      - haste
      - speed
      - blindness
```
