# `add_stat_temporarily`

Adds a value to a specific stat

> [!danger] Triggered Effect

> [!warning] Requires EcoSkills

> [!Example]
> ```yaml
> effects:
> - id: add_stat_temporarily
>   args:
>     stat: strength # The name of the stat
>     amount: 10 # The amount to add (or subtract, allows negative values)
>     duration: 20 # The duration (in ticks)
>   ...other config (eg triggers, filters, mutators, etc)
> ```
