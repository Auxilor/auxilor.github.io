# `quest_xp_multiplier`
#### Permanent Effect

Multiplies quest xp gain

**Requires EcoQuests**

# Example Config
```yaml
- id: quest_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    quests: # The list of quests to multiply xp for. If removed, it will multiply all quests.
      - daily_1
      - weekly_1 
```
