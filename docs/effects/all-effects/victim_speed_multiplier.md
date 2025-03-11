# `victim_speed_multiplier`

Temporarily multiplies victim movement speed

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: victim_speed_multiplier
>   args:
>     multiplier: 1.5 # The multiplier for movement speed
>     duration: 50 # The duration (in ticks)
>   ...other config (eg triggers, filters, mutators, etc)
> ```