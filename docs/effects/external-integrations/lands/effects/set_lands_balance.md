# `set_lands_balance`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Set the Land bank's balance

:::dangerRequires:
Lands
:::

# Example Config

```yaml
- id: set_lands_balance
  args:
      amount: 1000 # The amount to give, use negative values to take
      only_trusted: true # (Optional) If only trusted players can use this effect. Defaults to true.
    ...other config (eg triggers, filters, mutators, etc)
```

:::note  
  
Since players can be members of multiple Lands simultaneously with different roles, this Effect applies only to the Land where the player is currently located.

:::