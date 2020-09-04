---
title: Rewording a pushed git commit message
date: 2020-09-04T14:17:38.651Z
description: >-
  Sometimes we are in a rush and we push our git commits to remote with messages
  that might contain typos, or we find later on that we could have simply made a
  better commit message.
image: /img/sydney-rae-gem5lzdj4iw-unsplash.jpg
tags:
  - git
  - rewording-commit-messages
categories:
  - git
author: Maria D. Campbell
---
**Sometimes** we **are** in a **rush** and we **push** our `commits` to `remote` with **messages** that ***might*** **contain** `typos`, or we **find** ***later on*** that we **could have** simply **made** a ***better*** `commit message`.

If you **find** that you **made** a `typo` in a ***pushed*** `commit message` or **wanted** to `amend` the `message` in **some way**, you **can do** the ***following***:

```shell
git rebase -i HEAD~n
```

which **displays** the `git rebase -i HEAD~n` **last** `n` **commits** of the ***current*** **branch** you are in. So if you are ***not*** actually in the **branch** which **contains** the `commit message` you want to **change**, you **have** to `checkout` into that **branch** ***first*** with the **command** `git checkout branchname`. In my recent case, for instance, it was the `master` branch, so the command would be `git checkout master`. 

Be **sure**, **however**, to ***first*** **commit** all **changes** you have **made** in ***that*** **branch** ***before*** **checking out** into the ***other*** **branch**.

**Once** you have **checked out** into the **branch** in **question**, `run`

```shell
git rebase -i HEAD~n
```

and it will `return` **something** ***like*** the **following**:

```shell
pick e499d89 Delete CNAME
pick 0c39034 Better README
pick f7fde4a Change the commit message but push the same commit.
# Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

**First** ***press*** the `i` **key** so that you **go** into `insert` **mode**.

**Replace** `pick` with `reword` ***before*** each `commit message` you **want** to **change**. **Something** like **this**:

```shell
pick e499d89 Delete CNAME
reword 0c39034 Better README
reword f7fde4a Change the commit message but push the same commit.
```

**Save** and **close** the `commit` **file**. **Then** you will be **taken** to a **screen** that **looks** something ***like*** **this**:

```shell
reword 06ea4e4 dd new dist build

"~/Development/comd3663/javascript-teaching-folders/monsters-api/.git/COMMIT_EDI
TMSG" 18L, 591C
Press ENTER or type command to continue
```

**When** you **press** `enter`, the `Terminal` **window** will **look** something like **this**:

```shell
reword 06ea4e4 dd new dist build

dd new dist build

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Thu May 7 11:02:21 2020 -0400
#
# interactive rebase in progress; onto bac4a55
# Last command done (1 command done):
#    reword 06ea4e4 dd new dist build
# Next commands to do (4 remaining commands):
#    pick 0545c78 Add load event
#    pick fe1dada Add new dist build
# You are currently editing a commit while rebasing branch 'master' on 'bac4a55'.
#
# Changes to be committed:
#       modified:   dist/scripts/js/main.js
#
~
~
~
~
~
```

**Press** the `i` **key** ***again*** to **go** into `insert` **mode**, **make** the **change** you **want** to the `message`, and then **press** the `esc` **key** ***again*** **followed by** `:x` and then **finally** ***press*** the `return` **key** to be **taken back** to the `Terminal` **window**.

**Finally**, **run** the `command`

```shell
git push --force
```

to **force-push** the ***amended*** `commits`.

And if you ***don't*** **quite remember** the ***first*** `command` to **redo** these **steps** to `reword` ***another*** **pushed** `commit message` you **want** to **change**, you **can run** the

```shell
history
```

**command** in `Terminal`, and it will **show** ***all*** the **commands** you **ran** in ***that*** **instance** of the `Terminal` **window**.

## Related Resources

- [Changing a  Git commit message](https://docs.github.com/en/enterprise/2.13/user/articles/changing-a-commit-message)
