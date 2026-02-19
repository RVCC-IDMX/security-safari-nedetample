## Vulnerability fixed

Outdated dependecy

## Where was it?

I found the vulnerability in the terminal but it was located in package-lock.json at lines 2021-2028

## Why is it dangerous?

This vulnerability would allow an attacker to make requests to the local esbuild dev server and then read the responses.

## How did you fix it?

I fixed it by running npm audit fix --force. This is secure becasue it has now updated esbuild to a version where that vulnerability has been found and fixed.

## Screenshots (optional)

<!-- Before/after screenshots showing the vulnerability and fix -->
<!-- Tip: Take a screenshot, then paste (Ctrl+V / Cmd+V) directly here -->

## Checklist

- [ X ] Tested the fix locally with `npm run dev`
- [ X ] Commit message clearly describes the security fix
