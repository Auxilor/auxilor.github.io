# `at_least_of`

Requires at least a certain mount of a certain list of conditions to be met

> [!example]
> ```yaml
> conditions:
> - id: at_least_of
>   args:
>     conditions: # The list of conditions
>       - id: is_sprinting
>       - id: is_gliding
>     amount: 1 # The amount of conditions
> ```
