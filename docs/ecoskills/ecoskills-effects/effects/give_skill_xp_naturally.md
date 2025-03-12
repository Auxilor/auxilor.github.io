# `give_skill_xp_naturally`

Gives naturally-gained experience points for a certain skill
This will send a message to a player and will include multipliers.

> [!danger] Triggered Effect

> [!warning] Requires EcoSkills

> [!Example]
> ```yaml
> effects:
> - id: give_skill_xp_naturally
>   args:
>     amount: 100 # The amount of xp to give
>     skill: exploration # The skill to give the xp for
>   ...other config (eg triggers, filters, mutators, etc)
> ```
