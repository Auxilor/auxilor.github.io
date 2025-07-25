# `animation`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Plays an animation

## List of Animations

| ID          | Description                 | Args                                                                                                                                                                                    |
| ----------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spin_item` | Spin items around in a ring | `item` The item <br/> `amount` The amount of items <br/> `duration` The duration of the animation <br/> `radius` The radius of the ring <br/> `speed` The speed at which the items spin |

# Effect Syntax

```yaml
- id: animation
  args:
    animation: spin_item # The ID of the animation
    animation_args: # Arguments for the animation
      item: "ecoitems:hardened_diamond_sword finishing:5"
      amount: 4
      duration: 100
      radius: 2
      speed: 1
  ...other config (eg triggers, filters, mutators, etc)
```
