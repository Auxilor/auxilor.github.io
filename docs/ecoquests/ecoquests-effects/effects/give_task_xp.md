# `give_task_xp`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Gives experience points for a task in a quest, excluding multipliers.

:::dangerRequires:
EcoQuests
:::

# Example Config

```yaml
- id: give_task_xp
  args:
    quest: magic_miner # The quest ID
    task: mine_gold # The task ID
    xp: 100 # The amount of xp to give
  ...other config (eg triggers, filters, mutators, etc)
```
