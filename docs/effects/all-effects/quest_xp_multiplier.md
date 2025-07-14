# `quest_xp_multiplier`
:::infoPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies quest xp gain

:::infoRequires:
EcoQuests
:::

# Effect Syntax
```yaml
- id: quest_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    quests: # The list of quests to multiply xp for. If removed, it will multiply all quests.
      - daily_1
      - weekly_1 
```
