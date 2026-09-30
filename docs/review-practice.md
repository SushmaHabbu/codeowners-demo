# Try a Code Owner Review

Practice message: Hello from the CODEOWNERS demo.

## Before You Start

- Publish this repository with `.github/CODEOWNERS` on the `main` branch.
- Only this file, `docs/review-practice.md`, has a code owner: `@SushmaHabbu`, who has write access as the repository owner.
- Use a second person's GitHub account as the pull request author. GitHub does not request a review from the author of their own pull request, and authors cannot approve their own pull requests.

## Exercise 1: Automatic Review Request

1. Ask a second person to fork this public repository. They do not need write access to the original repository to submit a pull request from their fork.
2. In their fork, create a branch called `practice/update-message`.
3. Edit the practice message at the top of this document and commit the change.
4. Open a non-draft pull request targeting `SushmaHabbu/codeowners-demo`, base branch `main`.
5. Open the pull request's **Reviewers** section. GitHub should automatically request a review from `SushmaHabbu` because `/docs/review-practice.md` matches this exact file.
6. Sign in as `SushmaHabbu`, open **Files changed**, and choose **Review changes > Approve > Submit review**.

A draft pull request does not automatically request code-owner reviews until it is marked ready for review. The ownership rules come from the pull request's base branch, not the proposed version in the pull request.

## Exercise 2: Compare an Unowned File

1. Have the second person create a separate branch from `main`, not from the branch used in Exercise 1.
2. Change only a sentence in `README.md` and commit the change. Do not change `docs/review-practice.md` in this branch.
3. Open another non-draft pull request targeting `SushmaHabbu/codeowners-demo`, base branch `main`.
4. Check **Reviewers**. CODEOWNERS should not automatically request a review from `SushmaHabbu`, because `README.md` has no matching ownership rule.

You can still review either pull request manually. Repository notifications are separate from code-owner review requests. A pull request changing both files still requests your review because it includes the owned document.

## Exercise 3: Make Approval Required

The CODEOWNERS file alone requests reviews; it does not block merging or direct pushes. No branch protection or ruleset is enabled by these sample files.

As the repository owner:

1. Open **Settings > Branches > Add classic branch protection rule**.
2. Set **Branch name pattern** to `main`.
3. Enable **Require a pull request before merging** and require one approval.
4. Enable **Require review from Code Owners**.
5. Save the rule. Review administrator/bypass settings if you want the requirement to apply to administrators too.
6. Have the second person open another pull request changing this document. Before a code owner approves it, merging should be blocked for anyone without a bypass.

GitHub rulesets can enforce the same requirement. These features are available for public repositories on GitHub Free; private repositories require a supported paid plan.

The one-approval requirement applies to pull requests changing unowned files too, but they do not specifically need a code owner's approval. A pull request changing `docs/review-practice.md` needs approval from `SushmaHabbu`, unless an allowed bypass is used.

## What to Check If No Review Appears

- Is the pull request ready for review rather than a draft?
- Is the code owner different from the pull request author?
- Is `.github/CODEOWNERS` already present on the base branch?
- Does the username exist and have write access?
- Does the case-sensitive path match the changed file?
- Does GitHub show any errors when you open `.github/CODEOWNERS`?