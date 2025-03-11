# `give_global_points`

Add / subtract global points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: give_global_points
>   args:
>     type: item_stock # The point to add/subtract
>     amount: 1 # The amount to add/subtract
>   ...other config (eg triggers, filters, mutators, etc)
>   ```
