---
title: Git Large File Storage
date: 2020-02-24T22:51:59.869Z
description: >-
  In this episode, I discuss how I finally took the plunge and started using Git
  Large File Storage in my repositories.
image: /img/robert-v-ruggiero-sspxcjdjb9s-unsplash.jpg
tags:
  - git-large-file-storage
  - git
categories:
  - git
author: Maria D. Campbell
---
- Link to [Git Large File Storage](https://anchor.fm/maria-campbell/episodes/Git-Large-File-Storage-eb1uog) on anchorfm

I finally have reached the stage of adding `.mov` files to my **Github** repositories, and was made aware of the need to use `Git Large File Storage`. I never thought I would have to download it (with `Homebrew` of course), but the other morning I finally had to take the plunge.

So what is `Git Large File Storage` (`LFS`)? It is an ***open source*** `Git` **extension** for ***versioning*** large files. It ***replaces*** **large files** such as `audio samples`, `videos`, `datasets`, and `graphics` with `text pointers` inside `Git`, while ***storing*** the **file contents** on a **remote server** like `Github.com` or `Github Enterprise`.

First I had to **install*8 the `Git command line` **extension**. I did this with `Homebrew` by ***typing*** the **following command** in `Terminal` followed by ***hitting*** the `enter/return` key:

```shell
brew install git-lfs
```
Then I ***executed*** the **following command** in `Terminal`:

```shell
git lfs install
```
I only need to run this once per user account.

In each repository where I want to use `Git LFS`, I select the `file types` I'd like `Git LFS` to ***manage***. Or I can ***directly*** edit my `.gitattributes` file. I have to ***track*** `.mov` files, so I did the following in the repository I was working on:

```shell
git lfs track "*.mov"
```
Then I make sure to add my .gitattributes to the staging area, and then commit it.

If you have ***pre-existing*** **files** that you need to ***convert*** to `Git LFS` ***within*** your **repository**, such as on **other branches** or in your ***prior*** **commit history** in your ***repository***, you have to use the `git lfs migrate[1]` **command**, which has options designed to suit various use cases.

After you have ***tracked*** the **files** you want to **track** and ***committed***  the `.gitattributes` file, then you can simply `commit` your **files** and `push` them to `origin master`. And that is it!

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

## Related Resources:

- [Git Large File Storage](https://git-lfs.github.com./)








