# `give_skill_xp`
#### Triggered Effect

Gives experience points for a certain skill

**Requires EcoSkills**

# Effect Syntax
```yaml
- id: give_skill_xp
  args:
    amount: 100 # The amount of xp to give
    skill: exploration # The skill to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```