# `break_block`

Breaks a block instantly

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: break_block
>   args:
>     prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
>   ...other config (eg triggers, filters, mutators, etc)
> ```
