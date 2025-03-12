# `all_players`

Runs effects for all players on the server

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: all_players
>   args:
>     effects: # The effects to run for each player
>       - id: damage_victim
>         args:
>           damage: 2
>           true-damage: true
>   ...other config (eg triggers, filters, mutators, etc)
> ```
