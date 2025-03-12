# `item_points_equal`

Requires an item to have exactly a certain amount of points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

> [!example]
> ```yaml
> conditions:
> - id: item_points_equal
>   args:
>     type: point_name # The type of point
>     amount: 10 # The amount of points to equal
> ```
