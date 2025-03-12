# `jobs_money_multiplier`
#### Permanent Effect

Multiplies money gain from jobs

**Requires Jobs Reborn**

# Example Config
```yaml
- id: jobs_money_multiplier
  args:
    multiplier: 1.5 # The money multiplier
    jobs: # The list of jobs to multiply money for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```