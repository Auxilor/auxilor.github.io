# `lands_balance_above`

Requires the Land's bank balance to be above a value

:::warningRequires:
Lands
:::
# Condition Syntax
```yaml
- id: lands_balance_above
  args:
    amount: 10000 # The minimum balance
```

:::note  
  
Since players can be members of multiple Lands simultaneously with different roles, this Condition applies only to the Land where the player is currently located.

:::