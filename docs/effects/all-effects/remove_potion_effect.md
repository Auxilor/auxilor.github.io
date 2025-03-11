# `remove_potion_effect`

Removes a potion effect

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: remove_potion_effect
>   args:
>     effect: hunger # The effect to remove (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
>     apply_to_player: true # True to remove the effect from the player, false to remove it from the victim
>   ...other config (eg triggers, filters, mutators, etc)
> ```
