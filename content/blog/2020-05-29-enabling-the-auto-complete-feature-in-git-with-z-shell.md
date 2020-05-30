---
title: Enabling the auto-complete feature in Git with Z-shell
date: 2020-05-30T03:09:37.453Z
description: 'In this episode, I discuss how to enable the auto-complete feature in Git.'
image: /img/jean-philippe-delberghe-wec3m4dy_le-unsplash.jpg
tags:
  - git
  - auto-completion
categories:
  - git
author: Maria D. Campbell
---
- Link to [Enabling the auto-complete feature in Git with Z-shell](https://anchor.fm/maria-campbell/episodes/Enabling-the-auto-complete-feature-in-Git-with-Z-shell-eeoq39) podcast on anchorfm

Not only can you `auto-complete` **command line** `commands` in `Zsh`, for ***example***, but you can auto-complete commands in `Git` as well! And it is quite simple.

***First***, go to the `Git` ***repository*** on `Github` and to the ***following*** link:

- [https://github.com/git/git/master/contrib/completion/](https://github.com/git/git/master/contrib/completion/)

***There***, you will see a number of files for ***different*** `Git` shell environments. `Bash`, `Zsh`, `Prompt` (for Windows), to name a couple. I use `Zsh`, so I ***downloaded*** the `git-completion.zsh` file to my desktop and then moved it into my `~` (Home) directory. After ***that***, I added the ***following*** to my `.zshrc` file (also located in my home directory):

```shell
source ~/git-completion.zsh
```
I placed this line ***right above*** my `PATH` exports.

I made sure to ***quit*** `Terminal` and then open a ***new*** `Terminal` window instance ***before*** testing out my new `Git` auto-complete ***feature***. And it works! For example, if I type `che` ***followed*** by the `tab` key, I get the ***following*** in `Terminal`:

There are ***other*** ways of getting the `git-completion.zsh` file onto your desktop from Github such as with `git pull`, but I will get into that in another podcast (post).

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

- [Git repository on Github: Completion](https://github.com/git/git/tree/master/contrib/completion)

- [Git in Other Environments - Git in Zsh](https://git-scm.com/book/id/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh)
