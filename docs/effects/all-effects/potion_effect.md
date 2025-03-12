# `potion_effect`

Gives a [potion](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) effect

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: potion_effect
>   args:
>     effect: blindness # The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
>     level: 1 # The level to give
>     duration: 40 # The duration of the effect (in ticks)
>     apply_to_player: false # True to apply to the player, false to apply to the victim
>   ...other config (eg triggers, filters, mutators, etc)
> ```
