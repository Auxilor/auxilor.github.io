# `villager_trade_multiplier`
:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

:::dangerExperimental
This effect is experimental, please report any bugs via Discord.
:::

Multiplies the cost of villager trades

# Effect Syntax
```yaml
- id: villager_trade_multiplier
  args:
    multiplier: 0.5 # The multiplier for villager trade costs
```

:::tip

When the effect is active, the villager's name, profession, and level will not show.
The villager will continue to level correctly.

Costs are limited to 64 items, costs cannot exceed this stack.

:::