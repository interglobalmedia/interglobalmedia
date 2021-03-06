---
title: Enabling the auto-complete feature in Git with Z-shell
date: 2020-05-30T03:09:37.453Z
description:
    'In this episode, I discuss how to enable the auto-complete feature in Git.'
image: /img/jean-philippe-delberghe-wec3m4dy_le-unsplash.jpg
tags:
    - git
    - auto-completion
categories:
    - git
author: Maria D. Campbell
---

-   Link to
    [Enabling the auto-complete feature in Git with Z-shell](https://anchor.fm/maria-campbell/episodes/Enabling-the-auto-complete-feature-in-Git-with-Z-shell-eeoq39)
    podcast on anchorfm

Not only can you `auto-complete` **command line** `commands` in `Zsh`, for
**_example_**, but you can auto-complete commands in `Git` as well! And it is
quite simple.

**_First_**, go to the `Git` **_repository_** on `Github` and to the
**_following_** link:

-   [https://github.com/git/git/master/contrib/completion/](https://github.com/git/git/master/contrib/completion/)

**_There_**, you will see a number of files for **_different_** `Git` shell
environments. `Bash`, `Zsh`, `Prompt` (for Windows), to name a couple. I use
`Zsh`, so I **_downloaded_** the `git-completion.zsh` file to my desktop and
then moved it into my `~` (Home) directory. After **_that_**, I added the
**_following_** to my `.zshrc` file (also located in my home directory):

```shell
source ~/git-completion.zsh
```

I placed this line **_right above_** my `PATH` exports.

I made sure to **_quit_** `Terminal` and then open a **_new_** `Terminal` window
instance **_before_** testing out my new `Git` auto-complete **_feature_**. And
it works! For example, if I type `che` **_followed_** by the `tab` key, I get
the **_following_** in `Terminal`:

![Git auto-complete feature in action](/img/screenshot-2020-05-29-22.26.43.png)

There are **_other_** ways of getting the `git-completion.zsh` file onto your
desktop from Github such as with `git pull`, but I will get into that in another
podcast (post).

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [Git repository on Github: Completion](https://github.com/git/git/tree/master/contrib/completion)

-   [Git in Other Environments - Git in Zsh](https://git-scm.com/book/id/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh)
