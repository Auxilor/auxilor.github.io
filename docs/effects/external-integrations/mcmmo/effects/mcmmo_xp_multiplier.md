# `mcmmo_xp_multiplier`
#### Permanent Effect

Multiplies mcMMO skill xp gain

**Requires mcMMO**

# Example Config
```yaml
- id: mcmmo_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.
      - mining
      - combat 
```
