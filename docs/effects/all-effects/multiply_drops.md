# `multiply_drops`

Multiplies drops (**requires a drop trigger**)

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: multiply_drops
>   args:
>     on_items: # (Optional) The drops to multiply
>       - diamond
>       - emerald
>     fortune: 3 # The level of fortune to mimic (Option 1)
>     multiplier: 2 # The drop multiplier (Option 2)
>   ...other config (eg triggers, filters, mutators, etc)
> ```

> [!help] Anti-Duplication
> If you're experiencing drops not being multiplied, you may need to change the anti-duplication settings in [config.yml](https://github.com/Auxilor/libreforge/blob/master/core/common/src/main/resources/config.yml) and add blocks to the whitelist.
