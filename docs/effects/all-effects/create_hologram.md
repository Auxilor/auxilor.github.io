# `create_hologram`

Creates a hologram temporarily (Requires a hologram plugin to be installed)

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: create_hologram
>   args:
>       text: # The text in the hologram
>           - "&FThis is a hologram!"
>           - "&cThis is a second line."
>       duration: 40 # The duration (in ticks)
>     ...other config (eg triggers, filters, mutators, etc)
> ```
