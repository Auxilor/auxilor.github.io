# `permanent_potion_effect`
:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Gives a permanent [potion effect](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)

# Effect Syntax
```yaml
- id: permanent_potion_effect
  args:
    effect: blindness # The effect to give
    level: 2 # The effect level to give
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
```