# `lands_balance_equal`

Requires the Land's bank balance to be equal to a value

**Requires Lands**
# Example Config
```yaml
- id: lands_balance_equal
  args:
    amount: 10000 # The required balance
```

:::note  
  
Since players can be members of multiple Lands simultaneously with different roles, this Condition applies only to the Land where the player is currently located.

:::