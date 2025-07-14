# `regen_multiplier`
:::infoPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies regen speed

# Effect Syntax
```yaml
- id: regen_multiplier
  args:
    multiplier: 2 # The multiplier for regeneration speed
    reason: # Optional: The types of regen to multiply, list is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html
      - magic
      - magic_regen
```