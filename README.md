# Single-File CODEOWNERS Demo

This demo assigns `@SushmaHabbu` as the code owner of exactly one file: `docs/review-practice.md`.

## Sample Files

| File | Purpose | Code owner |
| --- | --- | --- |
| `src/greeting.mjs` | Small JavaScript function | None |
| `tests/greeting.test.mjs` | Two runnable sample tests | None |
| `docs/review-practice.md` | Hands-on pull request exercises | `@SushmaHabbu` |
| `.github/CODEOWNERS` | Ownership configuration | None |
| `README.md` | This guide | None |

All other files, including any other files under `docs/`, have no assigned code owner. Your repository-owner permissions remain unchanged.

## Ownership Rule

The configuration lives in [`.github/CODEOWNERS`](.github/CODEOWNERS):

```text
/docs/review-practice.md @SushmaHabbu
```

- The leading `/` anchors the path at the repository root.
- This exact path matches only `docs/review-practice.md`.
- There is no `*` or directory-wide rule assigning ownership to other files.
- Code owners must have write access. `SushmaHabbu` already has this access as the repository owner.

For this single-file demo, the CODEOWNERS file itself is intentionally unowned. In a real project, also assign ownership to the configuration and enforce reviews to protect changes to the ownership rules.

## What Code Ownership Means

Code ownership is a review responsibility, not a separate repository permission role. Adding a name here does not grant access, prevent others from editing a file, or require approval by itself.

When another person opens a non-draft pull request that changes an owned file, GitHub automatically requests its owner's review using the rules on the base branch. To make that approval mandatory, configure branch protection or a ruleset with **Require review from Code Owners**.

GitHub does not request self-reviews. If `SushmaHabbu` authors the pull request while also being its only code owner, this will not demonstrate an automatic review request to `SushmaHabbu`.

No branch protection or ruleset is configured by this repository's files. See the [practice guide](docs/review-practice.md) for the setup steps and a two-person walkthrough.

## Run the Sample Tests

With Node.js 18 or newer installed, run this from the repository folder:

```sh
node --test tests/greeting.test.mjs
```

No package installation is needed.

## Learn More

- [GitHub: About code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub: About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)