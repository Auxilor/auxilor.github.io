# `give_item_points`

Add / subtract item points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: give_item_points
>   args:
>     type: point_name # The point to add/subtract
>     amount: 1 # The amount to add/subtract
>   ...other config (eg triggers, filters, mutators, etc)
> ```
