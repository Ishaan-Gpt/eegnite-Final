# Deploying eegnite.com

Pushing to GitHub deploys the site. `.github/workflows/deploy.yml` builds the static export and uploads `out/`
to Hostinger over SSH, so FileZilla is no longer needed.

| Push to   | Goes to                    | Indexing                                   |
|-----------|----------------------------|--------------------------------------------|
| `main`    | www.eegnite.com            | indexed                                    |
| `staging` | the staging subdomain      | `noindex`, `robots.txt` disallows all, empty sitemap |

Every deploy writes `/version.json` on the site with the commit it came from. Each run is listed in the repo's
**Actions** tab with its log.

## Everyday use

1. Work on the `staging` branch and push. Check the staging subdomain.
2. When it looks right, merge `staging` into `main` and push. The live site updates in a few minutes.
3. Something wrong live? `git revert <commit>` and push, or open an older successful run in **Actions** and click
   **Re-run all jobs** to redeploy that version.

A deploy only uploads after the build succeeds, so a broken build never reaches the server.

## One-time setup

### 1. SSH key for GitHub

Run this on your PC (no passphrase, so GitHub can use it):

```bash
ssh-keygen -t ed25519 -C "github-deploy-eegnite" -f ~/.ssh/eegnite_deploy -N ""
```

- hPanel → **Advanced → SSH Access**: turn SSH on, then add the contents of `~/.ssh/eegnite_deploy.pub` under
  **SSH keys**. The same page shows the **IP/host**, **port** (usually `65002`) and **username** (`u123456789`).
- Test it: `ssh -i ~/.ssh/eegnite_deploy -p 65002 u123456789@<host>`, then run `pwd` and `ls domains` to find
  the folders for step 3.

### 2. Repository secrets

GitHub repo → **Settings → Secrets and variables → Actions → Secrets → New repository secret**:

| Secret | Value |
|---|---|
| `SSH_HOST` | host or IP from hPanel |
| `SSH_PORT` | port from hPanel, e.g. `65002` |
| `SSH_USER` | username from hPanel, e.g. `u123456789` |
| `SSH_PRIVATE_KEY` | the whole of `~/.ssh/eegnite_deploy` (the file without `.pub`) |
| `NEXT_PUBLIC_FIREBASE_*` (7 of them) | the same values as in `.env.local` |

### 3. Environments (where each branch uploads)

**Settings → Environments → New environment**, create `production` and `staging`. In each, add two
**Environment variables**:

| Variable | `production` | `staging` |
|---|---|---|
| `REMOTE_PATH` | full path of the main site's folder, e.g. `/home/u123456789/domains/eegnite.com/public_html` | the staging subdomain's folder, e.g. `/home/u123456789/domains/staging.eegnite.com/public_html` |
| `SITE_URL` | `https://www.eegnite.com` | `https://staging.eegnite.com` |

The upload refuses to run if `REMOTE_PATH` isn't inside a `public_html` folder.

Optional: in the `production` environment, add yourself under **Required reviewers**. Each live deploy then
waits for a click on **Approve** in the Actions tab.

### 4. First deploy

Push to `staging` first and check the subdomain and `/version.json`. Then push to `main`.

## Files on the server

The upload adds and overwrites files but **never deletes** anything on the server. Files you placed by hand
(`.htaccess`, a staging folder nested inside the main `public_html`) are safe. The cost: a page removed from the
site stays reachable on the server until you delete it there. To make the server an exact mirror, add `--delete`
to the `rsync` line in `deploy.yml`. Only do that once each `REMOTE_PATH` holds nothing but this site, because it
deletes everything there the build doesn't produce.
