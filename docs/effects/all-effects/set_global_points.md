# `set_global_points`

Set global points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: set_global_points
>   args:
>     type: global_stock # The point to set
>     amount: 0 # The amount to set it to
>   ...other config (eg triggers, filters, mutators, etc)
> ```
