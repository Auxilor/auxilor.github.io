# `mcmmo_xp_multiplier`

Multiplies mcMMO skill xp gain

> [!hint] Permanent Effect

> [!warning] Requires mcMMO

> [!Example]
> ```yaml
> effects:
> - id: mcmmo_xp_multiplier
>   args:
>     multiplier: 1.5 # The experience multiplier
>     skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.
>       - mining
>       - combat 
> ```
