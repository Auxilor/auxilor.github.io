# `random_player`

Runs effects for a random player on the server

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: random_player
>   args:
>     effects: # The effects to run for the player
>       - id: kick
>   ...other config (eg triggers, filters, mutators, etc)
> ```
