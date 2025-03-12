# `piercing`

Makes projectiles pass through other entities (collaterals), like the Piercing enchantment.

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: piercing
>   args:
>       level: 3 # The piercing level, i.e. the amount of entities that the projectile should go through
>     ...other config (eg triggers, filters, mutators, etc)
> ```
