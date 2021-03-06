---
title: 'Adding new content to your hugo website hosted on gh-pages'
image: /img/james-wainscoat-1451484-unsplash.jpg
description:
    'How to add new content to your hugo website that is hosted on Github
    gh-pages.'
date: '2017-06-03T01:22:22'
tags: ['hugo', 'gh-pages', 'toml']
categories: ['gh-pages']
author: 'Maria D. Campbell'
---

**Note 5.21.19:** This website is no longer hosted on **Github** gh-pages, and
**_no longer_** **created** with **Hugo**, but with another, and much better, in
my opinion, static site generator. It's called **Gatsbyjs** (version 2).
However, the information **_related to_** **gh-pages** is still pertinent to
those who want to follow the steps and use or continue to use **Hugo**. Lastly,
this site is now HTTPS and no longer HTTP.

As some of you might already know, I just recently switched
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com) from
**WordPress** to the **Hugo** `static website generator`. So I'm still fairly
new to it. And some of you might already know what a stickler I am for good
developer documentation.

So what does being a **Hugo** newbie have anything to do with developer docs?
Plenty! And here I will focus specifically on publishing new content to your
**Hugo** website hosted on the **Github** `gh-pages` branch. Because I have been
doing a lot of that lately, and I want it etched in stone!

I'm assuming you have already created your new **Hugo** site locally. Perhaps
you have even pushed it to your remote master branch on **Github**
(`origin master`). But now you want to host the site via the (free) `gh-pages`
branch as opposed to paying oodles for hosting services which you might never
need or use.

Navigate to
[Hosting on Github Pages](https://gohugo.io/tutorials/github-pages-blog#using-a-custom-domain)
to read the **_official_** **Hugo** documentation, but refer to this article for
explicit clarification.

First off, I chose the `deployment via gh-pages branch` route. The setup and
functionality is analagous to the `gulp-gh-pages` npm package setup and
functionality. What I love about `gulp-gh-pages` is that once I have the
**Gulp** task set up, I can publish to `gh-pages` from my master branch. I don't
have to worry about committing changes before checking out to the `gh-pages`
branch so as not to add unwanted content to it from the master branch, or
merging/rebasing branches to keep them in sync. It can get very messy.
`gulp-gh-pages` ensures that you keep branch histories separate. Deploying your
Hugo site via the Hugo `gh-pages branch` method ensures that you keep branch
histories separate as well.

First make sure that you add your `public` folder, the folder which is created
when **Hugo** generates your site for publication, is added to your `.gitignore`
file. You can do this through **Terminal** with the command
`echo "public" >> .gitignore`. To double check that the command was successful,
open up your `.gitignore` file to make sure the `public` directory was added.
You are adding the `public` directory to your `.gitignore` file so that it's
ignored on the master branch.

Next you want to initialize your `gh-pages` branch as an `empty orphan branch`.
Why? You don't want to simply create a `gh-pages` branch and then checkout out
to it, because that would mean **1.** an invalid `gh-pages` directory structure
and **2.** unneeded files and directories in `gh-pages` you would have to end up
deleting anyway. **_In addition_**, creating an `orphan branch` with the
`git checkout --orphan gh-pages` command means that the first commit made on
this new branch will have no parents and will be the `root` of a `NEW` history
totally `DISCONNECTED` from all other branches and commits. And that's exactly
what we want, right?

All the commands/steps necessary for successfully initializing the `gh-pages`
branch as an `empty orphan branch` are the following:

```shell
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout master
```

`git reset --hard` deletes any files that might have crept into the `gh-pages`
branch from `master`.

`git commit --allow-empty` permits you to initialize an empty branch. By
default, you cannot.

`git push origin gh-pages` pushes the local `gh-pages` branch to the remote
`gh-pages` branch.

`git checkout master` returns you to the `master` branch.

Now you want to checkout your `gh-pages` branch into your `public` folder,
because it is the contents of the `public` folder which will populate `gh-pages`
and render the contents of your site there. You will do this using **git's**
`worktree` feature. Why? Because the `worktree` feature allows you to checkout
more than one branch at a time from your main working tree initialized by the
command `git init` or `git clone`. **_Usually_** that means the `master` branch.
The `worktree` feature, however, initializes a `linked working tree` using the
`git worktree add` command. A repository has `one main working tree` (if it is
not a bare repository) and 0 or more `linked working trees`. A linked working
tree permits you to push content from your main working tree to the linked
working tree, which is what is needed when `deploying` your **Hugo** site to
`gh-pages` from your `master` branch. The complete set of commands to check out
the `gh-pages` branch into your `public` folder using git’s `worktree feature`
is:

```shell
rm -rf public

git worktree add -B gh-pages public origin/gh-pages
```

`rm -rf public` removes the `public` folder so you can add your
`linked gh-pages working tree` with a clean slate.

`git worktree add -B gh-pages public origin/gh-pages` makes the `gh-pages`
branch (-B) a `linked working tree` (git worktree add). `public` recreates the
`public folder,` and `origin/gh-pages` links it to the remote `gh-pages` branch.

Since you now have an empty `public` folder, you have to **_regenerate_** your
**Hugo** site with the `hugo` command in **Terminal**. The complete set of
commands to **_regenerate_** your **Hugo** site and commit the generated files
on the `gh-pages` branch is the following:

```shell
hugo
cd public

git add --all
git commit -m "Publishing to gh-pages"
cd ..
```

The `hugo` command regenerates your site by creating a new public folder with
all necessary files and directories within it.

`cd public` takes you into the `public` directory.

`git add --all` adds all the files and directories in `public` to your staging
area so that they are ready to be committed.

`git commit -m "Publishing to gh-pages"` commits the files you added to the
staging area with the `git add --all` command.

`cd ..` takes you back up one level into your `root` directory.

Go into your `public` folder via your text editor to make sure that your site
was generated as expected. If you like what you see, you are ready to push your
commit to the remote `gh-pages` branch:

```shell
git push origin gh-pages
```

Now comes the part you all have been waiting for. You may be asking yourself,

> But what do I do when I add new content, i.e., a new page or post, or ANY
> other changes to the site, and I want to push them to the remote branch
> without encountering MERGE CONFLICTS?

The complete set of commands for doing just that is the following:

```shell
echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/
```

The `echo` command and `""` message string is if you want to output
`status text` in **Terminal**, letting you know at what stage of the set of
comands you are on. I haven't done that yet, but I think I will start
implementing the `echo` command as well.

`rm -rf public` should be pretty familiar by now! It removes your `public`
directory.

`mkdir public` creates a new, empty **public directory**.

`git worktree prune` allows you to prune, or remove a `linked working tree.`
This is so that you don't have any merge conflicts between your **_local_**
`gh-pages` branch and your **_remote_** `gh-pages` branch.

`rm -rf .git/worktrees/public/` removes the `public gh-pages working tree`.

Next we **_repeat_** checking out the `gh-pages` branch into the `public` folder
using the `git worktree` feature:

```shell
echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages
echo "Removing existing files"
rm -rf public/*
echo "Generating site"
hugo
echo "Updating gh-pages branch"
cd public
git add --all
git commit -m "Publishing to gh-pages (publish.sh)"
```

`git worktree add -B gh-pages public origin/gh-pages` repeats the
`checking out gh-pages branch into the public directory` using the
`git worktree feature` set of commands which you executed when you first
**_initialized_** the `gh-pages` branch.

**Recap:** this step allows you to have multiple branches of the same local repo
to be checked out into different directories.

`rm -rf public/*` removes absolutely everything from `public`.

Again, you have to **regenerate** your site with the `hugo` command. This
recreates a new public directory with all updated production site files and
directories.

`cd public` takes you back into the `public` directory.

`git add --all` adds all public content to the staging area preparing for
`git commit`.

`git commit -m "Publishing to gh-pages (publish.sh)"` commits your staged
content.

Last, but not least (and not re-mentioned in the **Hugo** docs), is the
`git push origin gh-pages` command. **_Committing_** is not enough!
**_Pushing_** to the remote `gh-pages` branch is what completes the
`site update` for the world to see.

And that's it! Happy publishing!

## Related Resource

-   [Hosting (Hugo) on Github Pages]("https://gohugo.io/tutorials/github-pages-blog#using-a-custom-domain")
