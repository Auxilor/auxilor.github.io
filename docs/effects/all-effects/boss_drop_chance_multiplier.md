# `boss_drop_chance_multiplier`
#### Permanent Effect

Multiplies the chance for bosses to drop items

**Requires EcoBosses**

# Example Config
```yaml
- id: boss_drop_chance_multiplier
  args:
    multiplier: 1.5 # The chance multiplier
    bosses: # The list of bosses to multiply chances for. If removed, it will multiply all bosses.
      - steel_golem
      - rapid_world
```
