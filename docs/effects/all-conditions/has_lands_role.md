# `has_lands_role`
:::infoRequires:
Lands
:::

Requires a player to have a certain role in the Land
# Condition Syntax
```yaml
- id: has_lands_role
  args:
    roles: # The ID of the role
      - member
```

:::note  
  
Since players can be members of multiple Lands simultaneously with different roles, this Condition applies only to the Land where the player is currently located.

:::