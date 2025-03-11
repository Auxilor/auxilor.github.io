# `give_task_xp`

Gives experience points for a task in a quest, excluding multipliers.

> [!danger] Triggered Effect

> [!warning] Requires EcoQuests

> [!Example]
> ```yaml
> effects:
> - id: give_task_xp
>   args:
>     quest: magic_miner # The quest ID
>     task: mine_gold # The task ID
>     xp: 100 # The amount of xp to give
>   ...other config (eg triggers, filters, mutators, etc)
> ```
