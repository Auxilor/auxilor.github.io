# `envoy_type`

The list of envoy types that the effect should activate against

:::dangerRequires:
AxEnvoy
:::

# Example Config
```yaml
filters:
  envoy_type:
    - common # The ID of the crate type (axenvoy/crates/<id>.yml)
```
