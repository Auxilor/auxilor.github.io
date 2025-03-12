# `update_boss_bar`

Updates a boss bar

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: update_boss_bar
>   args:
>     id: my_boss_bar # The ID of the boss bar to update
>     name: "Updated Boss Bar" # (Optional) The new name of the boss bar
>     color: pink # (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white)
>     style: notched_6 # (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
>     progress: "%libreforge_boss_bar_my_boss_bar_progress% + 10" # (Optional) The new percentage completion of the boss bar
>   ...other config (eg triggers, filters, mutators, etc)
> ```

