# `add_holder_in_radius`

Gives a custom holder temporarily for a given period of time

A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc.

You can create custom holders temporarily and give them on a trigger, for example to give permanent effects for a period of time to people around you.

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: add_holder_in_radius
>   args:
>     effects: 
>       - id: movement_speed_multiplier
>         args:
>           multiplier: 1.25
>     conditions: []
>     duration: 300 # The duration, in ticks
>     radius: 5.3 # The radius, in blocks
>     apply-to-self: false # If the player should also get the holder (Defaults to false)
>   ...other config (eg triggers, filters, mutators, etc)
> ```
