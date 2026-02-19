# Security Safari checklist

Track your progress through the hunt.

## Setup

- [ X ] Cloned the repository
- [ X  ] Ran `npm install`
- [ X  ] Ran `npm run dev` and verified the app works
- [ X  ] Read through the docs in this folder

## The Big Five

Each vulnerability gets its own branch and PR. Use the PR template to document each fix.

- [ ] **Vulnerability 1:** Outdated dependency with CVE
  - [ ] Found it
  - [ ] Branch: `fix/outdated-dependency`
  - [ ] PR created (template filled out) and merged
  - [ ] Badge added: `![Dependencies](https://img.shields.io/badge/✓_Dependencies-Fixed-228B22)`

- [ ] **Vulnerability 2:** Hardcoded secret in source code
  - [ ] Found it
  - [ ] Branch: `fix/hardcoded-secret`
  - [ ] PR created (template filled out) and merged
  - [ ] Badge added: `![Secrets](https://img.shields.io/badge/✓_Secrets-Removed-228B22)`

- [ ] **Vulnerability 3:** Secret in git history
  - [ ] Found it
  - [ ] Branch: `fix/secret-in-history`
  - [ ] PR created (template filled out) and merged
  - [ ] Badge added: `![Git History](https://img.shields.io/badge/✓_Git_History-Cleaned-228B22)`

- [ ] **Vulnerability 4:** XSS vulnerability
  - [ ] Found it
  - [ ] Branch: `fix/xss-vulnerability`
  - [ ] PR created (template filled out) and merged
  - [ ] Badge added: `![XSS](https://img.shields.io/badge/✓_XSS-Patched-228B22)`

- [ ] **Vulnerability 5:** Code injection vulnerability
  - [ ] Found it
  - [ ] Branch: `fix/eval-injection`
  - [ ] PR created (template filled out) and merged
  - [ ] Badge added: `![Code Injection](https://img.shields.io/badge/✓_eval()-Secured-228B22)`

## Deliverables

- [ ] 5 pull requests created and merged (one per fix, template filled out)
- [ ] README.md rewritten as a real project README
- [ ] Achievement badges added to README (all 5 + trophy)
- [ ] REFLECTION.md completed (3 questions answered)
- [ ] Verified all PRs are merged
- [ ] Trophy badge added: `![Big Five](https://img.shields.io/badge/🏆_Big_Five-Complete!-gold)`
