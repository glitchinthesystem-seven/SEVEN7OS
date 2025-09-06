## Plan
- Staging deploy, validate, then promote to prod.

## Checks
- [ ] CI green on main (lint, unit, e2e)
- [ ] Repo Rescue smoke workflow green
- [ ] Prisma migrate deploy (staging)
- [ ] Seed reference data (no test users)
- [ ] Secrets in SSM/Secrets Manager (prod)
- [ ] Grafana alerts active (lat, err %, CPU)
- [ ] OTLP traces visible in Jaeger/Tempo
- [ ] WAF/Cloudflare rules enabled
- [ ] Load test baseline captured

## Promotion
- [ ] Tag v0.1.0-repo-rescue
- [ ] Prod deploy completed
- [ ] OG/Twitter cards verified
- [ ] 72h post-launch monitoring active

Post-deploy:
- Hit /repo-rescue on prod; verify OG/Twitter cards (use Twitter card validator & any OG checker).
- Check dashboards & alerts for first 72 hours.