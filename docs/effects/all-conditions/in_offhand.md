# `in_offhand`

Requires a player to have an item in their offhand

> [!example]
> ```yaml
> conditions:
> - id: in_offhand
>   args:
>     items: # The list of allowed items
>       - diamond_sword sharpness:4
>       - netherite_sword sharpness:3 
> ```
