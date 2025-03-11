# `aoe`

Runs effects for all entities within an area of effect (aoe)

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: aoe
>   args:
>       effects: # The effects to run for each entity
>           - id: damage_victim
>             args:
>                 damage: 2
>                 true-damage: true
>       shape: cone # The shape of the AOE area (see above)
>       radius: 3 # The radius of the cone (see above)
>       angle: 120 # The angle of the cone (see above)
>     ...other config (eg triggers, filters, mutators, etc)
> ```

> [!question] List of Shapes
> | ID              | Description                                                                        | Args                                                                                                                                                                                                     |
> |-----------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `cone`          | A cone in front of the location (think sweeping edge)                              | `radius` The radius of the cone (distance in front) <br /> `angle` The angle of the cone                                                                                                                 |
> | `circle`        | A circle around the location                                                       | `radius` The radius of the circle                                                                                                                                                                        |
> | `offset_circle` | A circle around a point in front of the location                                   | `radius` The radius of the circle <br /> `offset` The amount of blocks in front                                                                                                                          |
> | `scan_in_front` | Scan for entities in the direction you're looking, and affect the first ones found | `radius` The radius of the scan <br /> `max_distance` The maximum distance to scan                                                                                                                       |
> | `beam`          | A beam in the direction you're looking                                             | `radius` The radius of the beam <br /> `distance` The length of the beam <br /> `pierce_blocks` If the beam should pass through blocks <br /> `pierce_entities` If the beam should pass through entities |
> 

