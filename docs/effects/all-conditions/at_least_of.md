# `at_least_of`

Requires a leat a certain mount of a certain list of conditions to be met

# Example Config
```yaml
- id: at_least_of
  args:
    conditions: # The list of conditions
      - id: is_sprinting
      - id: is_gliding
    amount: 1 # The amount of conditions
```
