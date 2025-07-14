# `gain_task_xp`

#### Triggered Effect

Gains experience points for a task in a quest, including multipliers.

**Requires EcoQuests**

# Effect Syntax

```yaml
- id: gain_task_xp
  args:
    quest: magic_miner # The quest ID
    task: mine_gold # The task ID
    xp: 100 # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```
