# Vulnerability fixed

Secret in History

## Where was it?

Agent helped me find it in github history.

## Why is it dangerous?

Anyone could access it by calling up git show "commit that added it" and then have access to the .env file that was supposed to be deleted.

## How did you fix it?

To fix this I would have to either or both invalidate the exposed data, in this case the API key and rotate the project.

## Screenshots (optional)

<!-- Before/after screenshots showing the vulnerability and fix -->
<!-- Tip: Take a screenshot, then paste (Ctrl+V / Cmd+V) directly here -->

## Checklist

- [  ] Tested the fix locally with `npm run dev`
- [  ] Commit message clearly describes the security fix
