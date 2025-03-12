# `total_damage_multiplier`

Multiplies all incoming or outgoing damage from any damage trigger

This effect **always** runs at the **end** of the run-order. This allows you to multiply other damage effects, such as damage added by the `add_damage` effect, as well as damage added by other plugins.

> [!danger] Triggered Effect

> [!warning]
> This effect can lead to dealing big damage, in most cases you probably only want to use [`damage_multiplier`](https://plugins.auxilor.io/effects/all-effects/damage_multiplier)

> [!Example]
> ```yaml
> effects:
> - id: total_damage_multiplier
>   args:
>     multiplier: 0.5 # The multiplier
>   ...other config (eg triggers, filters, mutators, etc)
> ```

> [!example] Real-Use Example:
> 
> ```yaml
> effects:
>   - triggers:
>       - melee_attack # The base damage is 5 for this example
>     effects:
>       - id: damage_multiplier
>         args:
>           multiplier: 1.2
>       - id: add_damage
>         args:
>           damage: 2
>       - id: total_damage_multiplier
>         args:
>           multiplier: 2
> ```
> In this example, the math is as below:
> 
> `((<base_damage> * <damage_multiplier>) + <add_damage>) * <total_damage_multiplier>` or `(( 5 * 1.2 ) + 2 ) * 2` = 16 damage
