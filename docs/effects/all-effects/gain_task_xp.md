# `gain_task_xp`

Gains experience points for a task in a quest, including multipliers.

> [!danger] Triggered Effect

> [!warning] Requires EcoQuests

> [!Example]
> ```yaml
> effects:
> - id: gain_task_xp
>   args:
>     quest: magic_miner # The quest ID
>     task: mine_gold # The task ID
>     xp: 100 # The amount of xp to gain
>   ...other config (eg triggers, filters, mutators, etc)
> ```
