# `replace_near`

Replaces nearby blocks with other blocks

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: replace_near
>   args:
>     radius: 5 # The horizontal radius to replace
>     radius_y: 5 # The vertical radius to replace
>     replace_to: obsidian # The block to replace to
>     duration: 40 # (Optional) The duration to replace for before returning back to the original state
>     whitelist: # (Optional) A list of blocks to replace
>       - lava
>     exposed_only: true # (Optional) If only blocks with air above them should be replaced
>     source_only: true # (Optional) If only source blocks should be replaced (for liquids)
>     disable_on_sneak: true # If the effect should not activate while sneaking
>   ...other config (eg triggers, filters, mutators, etc)
> ```

> [!Example]
> ```yaml
> effects:
> - id: replace_near
>   args:
>     radius: 5 # The horizontal radius to replace
>     radius_y: 5 # The vertical radius to replace
>     replace_to: gold_block # The block to replace to
>     blacklist: # (Optional) A list of blocks to not replace
>       - gold_ore
>   ...other config (eg triggers, filters, mutators, etc)
> ```
