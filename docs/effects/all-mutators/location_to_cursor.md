# `location_to_cursor`

Move the location to where you or the victim are looking

> [!example]
> ```yaml
> - id: location_to_cursor
>   args:
>     target: block # The target location (either block or entity)
>     start: player # Where to raytrace from (either player or victim)
> ```
