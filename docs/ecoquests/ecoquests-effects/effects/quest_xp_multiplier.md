# `quest_xp_multiplier`

Multiplies quest xp gain

> [!hint] Permanent Effect

> [!warning] Requires EcoQuests

> [!Example]
> ```yaml
> effects:
> - id: quest_xp_multiplier
>   args:
>     multiplier: 1.5 # The experience multiplier
>     quests: # The list of quests to multiply xp for. If removed, it will multiply all quests.
>       - daily_1
>       - weekly_1 
> ```
