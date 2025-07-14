# `job_xp_multiplier`
:::infoPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies job xp gain

:::warningRequires:
EcoJobs
:::

# Example Config
```yaml
- id: job_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
      - miner
      - builder 
```
