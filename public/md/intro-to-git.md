Date: 13 Mar. 2019
## Intro to git

Version control is important.
Not only when working in a team, but also when working solo, git can be a useful tool to keep your work ordered.
Since the learning curve of git is quite steep initially, this document contains a section to help those who just want to get started quickly. 
Once the basics of git have been learnt, working with a branching workflow can still cause confusion. 
Therefore this document has been structured as follows.

If you have never used git, you can read the first section and get started fast. 
If you are just beginning to use git but get stuck in e.g. merging, you can read further sections below. 

##### Just get me started quickly: downloading as a zip folder
Git is version control software, shining at keeping track of text-based files. 
These files are ordered in a folder called a repository. 
These repositories are commonly hosted on websites such as GitHub or Bitbucket.
Users can download the repository to their computer, make changes and upload the changes, while keeping track about who-did-what-when. 
Working with git requires familiarity with many terms such as "commits," "branches" and "pull requests." 
Fortunately, if you just want to download a repository, you don't have to install git. 
On most webpages of a repository, there is a button to download the repository as a zip file. 
If you want to do more than just downloading the files, such as sharing your edits with the rest of the world, you will have to learn git. 
Keep reading. 

##### What are all these terms: repository, commits and branches
Git is version control software. 
It tracks changes in all files in the repository, except those that you explicitly tell it not to in a `.gitignore` file. 
Git keeps a history of all previous changes, so don't upload unnecessarily big files such as images or datasets: git will never free up the space again, even if the files are deleted! 

###### Commits
After you have made changes to the repository, you can make a "commit" that describes what you have done.
Commits are checkpoints in the history of the repository. 
How to do this will be described below, but it is good to get familiar with the concepts first. 
Commits are identified by a SHA1 hash, like this: `c52c3ac41d78cbc6e73cc3d45d0d8a710ca4b7b5`.
It is common to provide only the first few (`c52`...) or last few (...`7b5`) characters in discussions when referring to a commit.
A commit contains a "diff", which describes the difference with the previous commit.
A single commit hash is enough to point to a specific version of all the code in the repository: including code that has not been edited in that commit.
Since commits uniquely identify a version of the complete repository, two commits that have the same diff do not need to have the same commit hash.

###### Branches
The history of all commits before a specific commit, is called a branch.
A repository can have any number of branches.
The basic idea is usually that there is a single main branch, and developers each work on their own feature branches, which will eventually get merged into the main branch again.
But more on that later.

The entire history of a repository can be looked at as a tree: there is an initial commit which is the stem of the tree, and all branches of the tree represent different historical versions of the code. 
Unlike a tree however, usually it is desired that two branches come together at some point in time again, so that other people can use the work you have done. 
This process of branches coming together again is called merging and it can get complicated when two branches both have changes in the same lines of code. 
Most of the git workflows are based around the idea of making the merging as simple as possible, while keeping oversight in what changes have been made. 

Git provides tools such as `git cherry-pick` and `git rebase` to apply the same changes of a commit ("diff") from one branch to another branch.
Applying a commit from a branch to another branch will be easy if the lines that have been edited in the commit, were the same on both branches.
In that sense, commits can be thought of as Lego blocks: as long as the basis of two Lego structures is the same, you can put the same Lego block on top of it.
If the basis of two structures is different, you cannot simply apply the same block on top of it: in that case, you will get a conflict.
Even though commits can be thought of as Lego blocks with respect to differences in the code: remember that a single commit is a pointer to a specific version of the _entire_ repository.
So: when you apply a commit from one branch to another, the resulting commit will get a different commit hash.

### Workflows
The the most common way organizing branches, is as follows.
There is a main branch consisting of the most recent version of the repository, and all features get merged into this main branch.
The main branch is often called the master branch.
There are several possible workflows that build around this idea.

The most trivial workflow is to put all commits directly on top of the master branch.
The person who shares their code first, will have no issues.
The next person might get a conflict and he/she has to resolve it before being able to share his code.
In the trivial workflow, merge conflicts are put completely in the hands of the person who wants to contribute: there is no oversight. 
Since sharing your changes is done after the mind-numbing excercise of debugging your code and you just want to go home, it might not be given too much mental effort, with all consequences that follow. 
Therefore a more involved collaboration process is needed. 
In this document, the feature branch workflow will be described. 

##### The feature branch workflow
If you want to share your changes, you will have to install git. 
I recommend to always use git from the command line and never to use GUIs, since GUIs are not easier than the command line.
A GUI looks nice, but during complicated merges, it does not help you if you don't understand the concepts.
If you understand the concepts, using the command line is trivial.
In this section the "feature branch workflow" will be explained since it is often used and will explain most concepts. 

###### Cloning
Downloading a repository for the first time is called "cloning". 
Sites like GitHub and Bitbucket have a button that gives you the command for cloning: `git clone https://SOMETHING`. 
There are two ways of cloning: via SSH or HTTPS. 
HTTPS is recommended, since it is easier to set up. 

Now you can make changes to the repository by editing files and saving them. 
After you have made changes, you will need to make a commit: more on that later.
In the next section, some commands will be described that show the status of the repository.

###### Where am I: `git status`, `git diff` and `gitk`
`git status` shows you important information about the status of the repository: which files were changed? 
Which branch am I on? 
Have I created new files in the repository? 
Am I about to commit something I don't want to? 
`git status` is your friend. 
Beginning git users have a tendency of not using `git status` enough, either because of unawareness, laziness or because they don't understand the information being displayed. 
The best way to learn what information `git status` displays is by experience: so use it often. 

`git diff` shows you the difference between the current state of the repository and the most recent commit. 
While `git status` only shows you the names of the files that were modified, `git diff` shows you the contents. 
By default, differences between lines - not words - are shown. 
The option `--word-diff` allows you to see which words have changed: useful if you have a very long lines. 
You can use `git diff FILENAME` to display only changes in a specific file. 
`git diff` can also be used to display differences between other objects such as commits or branches, as follows: `git diff BRANCH_A BRANCH_B`.

By default, files that have been "added" but not yet "committed" - more on the terminology later - are not shown in the output of `git diff`.
This can be used to incrementally add small code changes before making a commit.
If you want to see what changes have been "added", you can use `git diff --cached`.

`gitk` is the only graphical git tool that I use. 
It is a clickable summary of the information that is given by `git status` and `git diff`. 
It is useful for looking at historic commits and I prefer it over `git log`. 
`gitk`, like `git diff`, also accepts the parameter `--word-diff` to inspect changes in words instead of lines. 
`gitk` is installed by default on git for Windows and readily available on Linux. 

###### Checking out branches and commits
Git keeps track of _all_ historic versions of the entire repository. 
By "checking out" a commit or branch, git adjusts the contents of the files in your local folder to reflect the version of a specific commit or branch. 
`git checkout BRANCH_OR_COMMIT` checks out some commit or branch: it adjusts the files in your local folder to the version in commit or branch. 
For example, to check out the most recent version on the master branch, use `git checkout master`. 
`git checkout` can best be used when your repository is "clean" i.e. there are no uncommitted changes in your repository. 
`git stash` - more on this command below - can be used to temporarily stash away uncommitted changes.

Note that `git checkout`, unlike `git reset`, does not permanently delete commits or files.
It merely adjusts the file contents to a previous version.
Remember that you can always go back to where you were previously by using `git checkout -`.

###### Branching
Suppose that you are on the master branch, you have made some changes, and want to make a commit. 
As mentioned before, in the trivial workflow you could place your commits directly on the master branch: but this is not recommended, and in most projects, these commits will be rejected.
In the "feature branch workflow", you must place your commits in a separate branch. 
`git branch` lists all available branches. 
`git checkout -b SOME_NEW_BRANCH` makes a new branch and checks it out.

###### Adding and committing
A commit shows the difference with the previous commit. 
The commit message describes the content of this commit.
Since all developers can see based on the code, _what_ was done, the commit message should also describe _why_ this had to be done.
This message should be descriptive, not something vague like "work in progress". 
I prefer making many small commits instead of throwing everything together into one big commit at the end of the day. 
This allows you to roll back more easily if you headed in the wrong direction: this happens more often than I wish to admit.
In an agile workflow, adding ticket numbers to commit messages is also good practice.

There is a difference between "adding" and "committing," and this difference is sometimes seen as inconvenient: however, it is powerful.
Before you can make a commit, you have to add files to be committed.
When you have a lot of changes, but only want to commit some of them, adding allows you to group related file changes into a single commit.
It also allows you to lock specific changes, before making a commit.
This can be used as follows: first code can be edited, then those changes can be added, subsequently unit tests can be written and finally a commit can be made.
Should you accidentally edit part of the code before you committed it - for example due to a cat on your keyboard - you will notice this, if you add these changes immediately after making them.

`git add FILENAME1 FILENAME2` etc. adds files, staging them to be committed. 
`git add --all` adds all new files and files that have changes, but use this command with caution: you might add undesired files. 

`git commit -m "what was done and why"` commits the changes you have added. 
`git commit -am` is a shorthand for the following:
 1. `git add` all files that have been committed in the history of the repository, and
 1. commit those changes.
 
Note that files that have never been committed before, will not be included when you run `git commit -am`.

###### Pushing
So you have made commits: it is time to share your work. 
This process is called pushing and the command is `git push`. 
The first time that you push a branch, you will need to specify the upstream: luckily git helps you with the command. 
Just run `git push` and git will give you a hint with what command to type: copy it and you're done. 
I recommend pushing often, even if you don't intend to make a pull request. 
Pushing your commits allows the rest of the team to find your branch if they search for it. 
This makes it easier for your team to follow what you are doing. 
It also allows you to recover your work, should your laptop be bricked.

###### Pull request
You have pushed your work, tested your code (!) and it is time to merge your changes into the master branch: an exciting moment. 
The process of merging your branch into another branch is called a pull request. 
Usually, the master branch has moved forward while you were working. 
This might or might not be a problem. 
If it is a problem, you will get a merge conflict: more on this in the next section. 
You can make a pull request for your branch from GitHub or Bitbucket - not from the command line. 
This will allow your work to be discussed. 
After enough approval - how much depends on the team - your branch will be merged: congratulations! 

###### Pulling
`git pull` pulls/downloads the last changes and applies them to the branch that you are currently on. 
It is recommended to pull multiple times a day, since it keeps you up-to-date.

###### Solving a merge conflict
Merge conflicts are a necessary evil of version control. 
Merge conflicts are for example caused by changing the same line in the two branches that are being merged: git has no way to tell which version to use. 
Be happy about merge conflicts: they prevent race conditions in the versioning. 
Merge conflicts are not always simple: sometimes you want to keep both versions, sometimes one of the two, sometimes the changes are incompatible and you need to perform a lot of work to merge your changes. 

In the feature branch workflow, a merge conflict can arise when trying to merge a pull request. 
In that case, someone has edited a piece of code that you also edited, and those changes are incompatible.
You will need to adjust your branch so that it is more up-to-date with the master branch. 
There are two ways to resolve a merge conflict: by rebasing (adjusting the commit history) or by merging the master branch into your branch. 
Merging the master branch into your branch is the easiest.

Make sure that you have pulled the latest changes on the master branch: git only updates the current branch when you use `git pull`. 
`git merge master` while on your feature branch, merges master into your branch.
A merge conflict might occur: suppose that this is the case.
Use `git status` and `git diff` every time to inspect which files are causing the conflict. 
In those files, git will have put both versions of the conflicting lines, indicated by markings like `>>>>>>` and `<<<<<<`. 
Edit the files causing the conflict carefully to obtain the desired result and remove the markings. 
Add them using `git add FILENAME`. 
Finish the merge by using `git commit`. 
You can abort the merge completely with `git merge --abort`. 

Finally, push your changes to the remote using `git push`. 
Alternatively, it is worth to mention that Pycharm contains a useful interface for resolving merge conflicts.

###### Stashing
Until now, the core of the feature branch workflow has been discussed. 
Now it is time to mention some specialized git features. 
Stashing is convenient if you have some changes; you are not ready to commit them yet, but you want to do other things like checking out older commits. 
Stashing is like taking the changes that you made and putting them all in a drawer, to be taken out when you continue working with them. 

`git stash` takes your current changes and puts them on a FILO stack. 
The stash can be inspected using `git stash list`. 
You can see what is on the stash using `git stash show`, which accepts the same formats as `git diff`. 
Get the changes back again using `git stash pop`. 
You can stash multiple times. 
Popping from the stash can cause merge conflicts if you've changed lines that the pop conflicts with. 

###### Resetting
It happens to the best of us: you committed something that you shouldn't have. 
Resetting allows you to undo commits and comes in two flavors: `git reset`, which does not adjust your local changes, and `git reset --hard`, which deletes your local changes. 
Hopefully you found this out before you pushed your commits: otherwise you need to force push using `git push -f` afterwards.
Resetting alters the commit history: this is discouraged if other people are building on top of your commits. 
The two flavors of resetting will be discussed in the next paragraphs.

`git reset` resets the commit tree to a specific commit. 
`git reset` leaves the file contents in your local repository intact, so the changes that the commit made will not be undone. 
This is useful if you've made a mistake in one of the last commits. 
To fix your mistake, proceed as follows. 
Reset to the last commit `git reset HEAD~1` and commit your changes again (`HEAD~1` means: the second-to-last commit on the current branch).
If the commits that you are resetting have already been pushed, you should probably use `git status` more: remember, `git status` is your friend. 
If you have to edit multiple commits, you can use `git rebase` instead: see below.

`git reset --hard` resets the commit tree like a normal reset, but also discards the changes of those commits. 
Be cautious when hard resetting, because you might lose changes. 
Hard resetting can be used if you made some commits but you found out that you need to restart from a specific commit, discarding the work that you have done in the process. 
Recall that resetting should not be used when you only want to see what the repository looked like at a specific commit: use `git checkout` in this case. 

###### Cherry picking
Cherry picking takes one or multiple commits from any other branch and applies it to your branch. 
Suppose that you and your teammate are working on separate feature branches. 
Your teammate has made a commit that you want to have on your branch and you don't want to wait until his feature branch is merged. 
You also don't want to merge his feature branch into your feature branch because your teammate has made a lot of changes that you don't need. 
You look up the commit `COMMIT_HASH` that you're interested in using for example `gitk` or `git log`. 
`git cherry-pick COMMIT_HASH` takes the changes of the commit `COMMIT_HASH` and applies them to your branch in a new commit. 
If you need to cherry-pick and entire branch, `git rebase` might be easier.

##### Rebasing
Besides cherry-picking, rebasing can also be used to apply commits from one branch to another.
Rebasing is like taking the root of your branch from the "tree" and applying it to the top of another branch.
The rebase tool contains additional features which make it useful for deleting or renaming a commit.

###### Rebasing as an alternative to cherry-picking
Suppose you are on branch `BRANCH_A` and you want to apply the commits of this branch onto another branch `BRANCH_B`.
`git rebase BRANCH_B` takes all the commits from `BRANCH_A` and applies them onto `BRANCH_B`.
The result is a branch `BRANCH_A` that looks as if you had applied the commits of `BRANCH_A` to the tip of `BRANCH_B` directly.
Rebasing can be used as an alternative to merging to keep your branches up to date.
Be aware that rebasing adjusts the commit history, and thus needs force pushing if the changes are already in the remote.
A good description of this process is given in the [rebase documentation](https://git-scm.com/docs/git-rebase#_description).

###### Rebasing for deleting or rewording commits
Rebasing can be used to remove a commit, or reword a commit message.
To do this, use `gitk` or `git log` to find the commit `COMMIT_HASH` before the commit that you want to remove/rename.
Then, perform an interactive rebase onto that commit: `git rebase -i COMMIT_HASH`.
A text editor will open, listing all the commits that are being rebased.
Find the commit you want to edit, and change the word `pick` to `d` for deletion or `r` for rewording a commit message.
Rebase has other options as well.
After rebasing, you will need to force push your changes to the remote.

##### Checking for non-merged commits
Determining the difference between two branches is easy: `git diff`. 
Sometimes, the question is not what the difference is between two branches, but what commits in a branch `BRANCH_A` have not been merged into another branch `BRANCH_B`.
There is a simple command for determining this: `git log --no-merges BRANCH_A ^BRANCH_B`.
This command is useful for determining which commits are new in a branch `BRANCH_A`, when the destination branch `BRANCH_B` is ahead.

##### Misconception: "don't make too many branches"
People tend to think that making new branches should be done sparingly.
But making branches can be very helpful to keep your work ordered.
For example, an extra branch can be used to place a local bookmark to quickly roll back to some version, without having to remember a commit hash.

It turns out that making a branch, costs almost no extra storage space.
Under the hood, a branch is a pointer to a specific commit hash.
That's it.
When pulling from a branch, this pointer is advanced to the most recent commit.
As such, making an extra branch only has the cost of making another pointer: almost nothing.

Even though making branches is cheap, it is good practice however, not to push too many random branches to the remote when working with other people.
Branches on the remote clutter the branch view, which doesn't look so nice.
