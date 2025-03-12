# `consume_held_item`

Consume items held in the player's main hand

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: consume_held_item
>   args:
>     amount: 1 # The amount of items to remove (i.e. 1 apple, 2 apples, etc)
>   ...other config (eg triggers, filters, mutators, etc)
> ```
