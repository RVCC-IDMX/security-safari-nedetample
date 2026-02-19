# Vulnerability fixed

XSS vulnerability

## Where was it?

It was in index.js at line 5.

## Why is it dangerous?

Any attackers can execute malicous code entered into the poll.

## How did you fix it?

I fixed this by changing innerHTML to textContent.

## Screenshots (optional)

<!-- Before/after screenshots showing the vulnerability and fix -->
<!-- Tip: Take a screenshot, then paste (Ctrl+V / Cmd+V) directly here -->

## Checklist

- [  ] Tested the fix locally with `npm run dev`
- [  ] Commit message clearly describes the security fix
