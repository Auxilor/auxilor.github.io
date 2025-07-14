# `mcmmo_xp_multiplier`
:::infoPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies mcMMO skill xp gain

:::warningRequires:
McMMO
:::

# Example Config
```yaml
- id: mcmmo_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.
      - mining
      - combat 
```
