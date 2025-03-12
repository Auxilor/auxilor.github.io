# `multiply_stat_temporarily`

Multiplies a stat by a specific value

> [!danger] Triggered Effect

> [!warning] Requires EcoSkills

> [!Example]
> ```yaml
> effects:
> - id: multiply_stat_temporarily
>   args:
>     stat: strength # The name of the stat
>     multiplier: 1.1 # The amount to multiply the stat by
>     duration: 20 # The duration (in ticks)
>   ...other config (eg triggers, filters, mutators, etc)
> ```
