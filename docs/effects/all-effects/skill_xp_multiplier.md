# `skill_xp_multiplier`
:::infoRequires:
EcoSkills || AuraSkills
:::

:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies skill xp gain
# Effect Syntax
```yaml
- id: skill_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.
      - mining
      - combat 
```
