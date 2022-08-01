# `trigger_custom`
#### Triggered Effect

Call a custom trigger

# Example Config
```yaml
- id: trigger_custom
  args:
    trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
    value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
  ...other config (eg triggers, filters, mutators, etc)
```

You then use the trigger like any other trigger:
```yaml
triggers:
  - custom_example
```
