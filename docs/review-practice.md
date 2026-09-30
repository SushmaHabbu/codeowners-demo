# Try a Code Owner Review

Practice message: Hello from the CODEOWNERS demo.

## Before You Start

- Publish this repository with `.github/CODEOWNERS` on the `main` branch.
- The configured code owner is `@SushmaHabbu`, who has write access as the repository owner.
- Use a second person's GitHub account as the pull request author. GitHub does not request a review from the author of their own pull request, and authors cannot approve their own pull requests.

## Exercise 1: Automatic Review Request

1. Ask a second person to fork this public repository. They do not need write access to the original repository to submit a pull request from their fork.
2. In their fork, create a branch called `practice/update-message`.
3. Edit the practice message at the top of this document and commit the change.
4. Open a non-draft pull request targeting `SushmaHabbu/codeowners-demo`, base branch `main`.
5. Open the pull request's **Reviewers** section. GitHub should automatically request a review from `SushmaHabbu` because `/docs/` matches this file.
6. Sign in as `SushmaHabbu`, open **Files changed**, and choose **Review changes > Approve > Submit review**.

A draft pull request does not automatically request code-owner reviews until it is marked ready for review. The ownership rules come from the pull request's base branch, not the proposed version in the pull request.

## Exercise 2: Make Approval Required

The CODEOWNERS file alone requests reviews; it does not block merging or direct pushes. No branch protection or ruleset is enabled by these sample files.

As the repository owner:

1. Open **Settings > Branches > Add classic branch protection rule**.
2. Set **Branch name pattern** to `main`.
3. Enable **Require a pull request before merging** and require one approval.
4. Enable **Require review from Code Owners**.
5. Save the rule. Review administrator/bypass settings if you want the requirement to apply to administrators too.
6. Have the second person open another pull request changing this document. Before a code owner approves it, merging should be blocked for anyone without a bypass.

GitHub rulesets can enforce the same requirement. These features are available for public repositories on GitHub Free; private repositories require a supported paid plan.

## Exercise 3: Give Documentation to Another Owner

To use a different person as the documentation owner, first invite that person as a repository collaborator with write access and wait for them to accept. Then replace `@SushmaHabbu` on the `/docs/` line with their real GitHub username and merge the change into `main`.

After that, a documentation-only pull request authored by `SushmaHabbu` should request that person's review. The `/docs/` line overrides the earlier `*` rule for documentation; it does not add to it. Do not use an invented username in the live CODEOWNERS file.

## What to Check If No Review Appears

- Is the pull request ready for review rather than a draft?
- Is the code owner different from the pull request author?
- Is `.github/CODEOWNERS` already present on the base branch?
- Does the username exist and have write access?
- Does the case-sensitive path match the changed file?
- Does GitHub show any errors when you open `.github/CODEOWNERS`?