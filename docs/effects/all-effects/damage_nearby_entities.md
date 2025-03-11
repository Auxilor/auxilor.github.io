# `damage_nearby_entities`

Damage entities near a location

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: damage_nearby_entities
>   args:
>     damage: 2 # The amount of damage to deal
>     radius: 5 # The radius to scan for entities
>     entities: # The whitelist of entities to damage
>       - spider
>       - cave_spider
>     damage_as_player: false # If the player should be marked as the damager
>     damage_self: false # If the effect can damage the player
>   ...other config (eg triggers, filters, mutators, etc)
> ```
