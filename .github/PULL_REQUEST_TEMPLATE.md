# Vulnerability fixed

Hardcoded secret

## Where was it?

I found the vulnerability in config.js.

## Why is it dangerous?

Anyone with access to the repository could use it to access sensitive information or act as me.

## How did you fix it?

I fixed it by creating a .env file and moving the keys there and confirming the .env file was in .gitignore.

## Screenshots (optional)

<!-- Before/after screenshots showing the vulnerability and fix -->
<!-- Tip: Take a screenshot, then paste (Ctrl+V / Cmd+V) directly here -->

## Checklist

- [ X ] Tested the fix locally with `npm run dev`
- [ X ] Commit message clearly describes the security fix
