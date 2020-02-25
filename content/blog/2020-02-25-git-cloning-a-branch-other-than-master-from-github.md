---
title: Git cloning a branch other than master from Github
date: 2020-02-25T14:24:30.445Z
description: >-
  In this episode, I talk about how to git clone a branch other than the master
  branch from a Github repository.
image: /img/tim-johnson-chv5d04_gwk-unsplash.jpg
tags:
  - git
  - git-clone
  - git-branching
categories:
  - git
author: Maria D. Campbell
---
- Link to the [Git cloning a branch other than master from Github](https://anchor.fm/maria-campbell/episodes/Git-cloning-a-branch-other-than-master-from-Github-eb2d0n) podcast on anchorfm

Today I had to check a student's work that resided on a branch other than master. I have always been used to just `git cloning` a repository's `master branch`, as usually that is what we all push to **Github** because it is the **production branch**. And everything is usually `merged` **locally**. But sometimes, for whatever reason, perhaps a `patch`, ***another branch*** is `pushed` to **Github**, which then, if the `code` is ***acceptable***, is `merged` into the `master branch`. Sometimes ***courses*** have many **different branches** that represent ***sections*** of the **course**. Those ***never*** get `merged` into the `master branch`.

Anyhoo, I wanted to ***download*** this student's `patch branch`, but knew that the **regular way** of `git cloning` a **Github** repository was ***not*** going to **work**. It would just download the master branch.

I found out how to `git clone` a `specific branch` from a **Github** repository (which actually ***resides*** on the `remote Github repository`) on `stackoverflow`. This is what I did, and it works like a charm:

```shell
git clone <url> --branch <branch> --single-branch
```
And if you want to download only a specific folder from that branch, you would do:

```shell
git clone <url> --branch <branch> --single-branch [<folder>]
```
I went with the former. I wanted to git clone the entire branch. And that is it!

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [Download a specific branch of a github project](https://stackoverflow.com/questions/32340337/download-a-specific-branch-of-a-github-project)



