# `regen_multiplier`
#### Permanent Effect

Multiplies regen speed

# Example Config
```yaml
- id: regen_multiplier
  args:
    multiplier: 2 # The multiplier for regeneration speed
    reason: # Optional: The types of regen to multiply, list is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html
      - magic
      - magic_regen
```