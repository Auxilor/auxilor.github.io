# `run_chain`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Execute an effect chain

# Effect Syntax
```yaml
- id: run_chain
  args:
    run-type: normal # Optional, sets how the chain is ran, see the 'configuring an effect' page
    chain: blind_and_pop # The ID of the chain to run
  ...other config (eg triggers, filters, mutators, etc)
```
