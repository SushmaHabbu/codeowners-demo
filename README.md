# CODEOWNERS Demo

A small learning repository that assigns `@SushmaHabbu` as the code owner of sample files.

## Sample Files

| File | Purpose | Matching ownership rule |
| --- | --- | --- |
| `src/greeting.mjs` | Small JavaScript function | `/src/` |
| `tests/greeting.test.mjs` | Two runnable sample tests | `/tests/` |
| `docs/review-practice.md` | Hands-on pull request exercises | `/docs/` |
| `.github/CODEOWNERS` | Ownership configuration | `/.github/CODEOWNERS` |
| `README.md` | This guide | `*` |

All rules currently assign the same real owner. The separate directory rules show where you can assign other collaborators later.

## Ownership Rules

The configuration lives in [`.github/CODEOWNERS`](.github/CODEOWNERS):

```text
* @SushmaHabbu
/src/ @SushmaHabbu
/tests/ @SushmaHabbu
/docs/ @SushmaHabbu
/.github/CODEOWNERS @SushmaHabbu
```

- `*` is the default for every file.
- `/src/`, `/tests/`, and `/docs/` match those root directories and their contents, including nested files.
- `/.github/CODEOWNERS` explicitly assigns the ownership configuration itself.
- The last matching line wins. Directory rules here are intentionally redundant until you assign a different owner.
- Owners must be real GitHub users with write access. Organization repositories can also use visible teams with explicit write access, in the form `@organization/team`.
- To assign multiple owners to one pattern, put their usernames on the same line. For the code-owner requirement covering those files, approval from any one of those owners is enough, not necessarily all of them.

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