# `any_of`

Requires any of a certain list of conditions to be matched

# Example Config
```yaml
- id: any_of
  args:
    conditions: # The list of conditions
      - id: is_sprinting
      - id: is_gliding
```
