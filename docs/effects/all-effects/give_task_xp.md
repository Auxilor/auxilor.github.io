# `give_task_xp`

#### Triggered Effect

Gives experience points for a task in a quest, excluding multipliers.

**Requires EcoQuests**

# Effect Syntax

```yaml
- id: give_task_xp
  args:
    quest: magic_miner # The quest ID
    task: mine_gold # The task ID
    xp: 100 # The amount of xp to give
  ...other config (eg triggers, filters, mutators, etc)
```
