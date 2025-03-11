# `homing`

Makes projectiles hone in onto entities (homing arrows / tridents)

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: homing
>   args:
>       distance: 10 # The distance to hone in from
>       targets: # (Optional) The whitelist of entities to target
>         - zombie
>         - skeleton
>     ...other config (eg triggers, filters, mutators, etc)
> ```
