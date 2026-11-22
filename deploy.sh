#!/usr/bin/env bash
# Copies the static site to the droplet (exam.kevinhale.page). Run from the repo root: bash deploy.sh
set -euo pipefail
HOST=${DROPLET:-claude@167.172.201.85}
KEY=${DROPLET_KEY:-$HOME/.ssh/kevinhale_droplet_ed25519}
cd "$(dirname "$0")"
TGZ=$(mktemp -t examprep.XXXXXX).tgz
tar czf "$TGZ" index.html exam.html practice.html results.html glossary.html admin.html css js
scp -q -i "$KEY" -o IdentitiesOnly=yes "$TGZ" "$HOST:/home/claude/examprep.tgz"
ssh -i "$KEY" -o IdentitiesOnly=yes "$HOST" 'set -e
  sudo rm -rf /var/www/examprep.new && sudo mkdir -p /var/www/examprep.new
  sudo tar xzf /home/claude/examprep.tgz -C /var/www/examprep.new --no-same-owner
  rm -f /home/claude/examprep.tgz
  sudo chown -R root:root /var/www/examprep.new && sudo chmod -R a+rX,go-w /var/www/examprep.new
  sudo rm -rf /var/www/examprep.old
  [ -d /var/www/examprep ] && sudo mv /var/www/examprep /var/www/examprep.old
  sudo mv /var/www/examprep.new /var/www/examprep && sudo rm -rf /var/www/examprep.old
  ls -l /var/www/examprep'
rm -f "$TGZ"
