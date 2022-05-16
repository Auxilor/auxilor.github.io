# `placeholder_contains`

Requires a placeholder to contain a certain value

# Example Config
```yaml
- id: placeholder_contains
  args:
    placeholder: '%ecocrates_ancient_opens%' # The permission, including %
    value: "test" # The value the placeholder should contain
    ignore_case: true # If the case should be ignored (optional)
```
