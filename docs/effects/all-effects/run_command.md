# `run_command`

Runs a command from console

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: run_command
>   args:
>     command: "tempban %victim% 24h Hardcore Mode Ban, killed by %player%" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
>   ...other config (eg triggers, filters, mutators, etc)
> ```
