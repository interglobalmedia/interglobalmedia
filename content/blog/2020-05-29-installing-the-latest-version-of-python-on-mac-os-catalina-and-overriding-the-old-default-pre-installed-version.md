---
title: >-
    Installing the latest version of Python on Mac OS Catalina and overriding
    the old default pre-installed version
date: 2020-05-29T20:21:33.433Z
description: >-
    In this episode, I discuss how to replace the old pre-installed default
    version of Python on Mac OS with the latest version of Python via Homebrew.
image: /img/david-clode-6f9-eaybja-unsplash.jpg
tags:
    - python3
    - osx
    - catalina
categories:
    - osx
    - python3
    - catalina
author: Maria D. Campbell
---

-   Link to
    [Installing the latest version of Python on Mac OS Catalina and overriding the old default pre-installed version](https://anchor.fm/maria-campbell/episodes/Installing-the-latest-version-of-Python-on-Mac-OS-Catalina-and-overriding-the-old-default-pre-installed-version-eeodgp)
    podcast on anchorfm

I **_finally_** did it. I successfully installed `Python` version `3.7.7` via
`Homebrew` on my **Mac** **_laptop_** with `OS Catalina` **installed**.

For those of you that **_still_** might be trying to **figure out** **_how_** to
do **this**, I will **_walk you_** through.

The reason why I was **_eager_** to make sure that I had the **latest version**
**_installed_** was because I am **working** on **_publishing_** (open-source)
**teaching-related** `documentation` on `Read The Docs`, and I need to have
`Python` **_installed_** in order to be able to **_install_** the **programs**
**_necessary_** to `publish` **_there_**.

The **_default_** `2.7.17` version of `Python` was **_retired_** this past
`January 2020`. I had **_tried_** back then to **replace** it with `Python 3+`,
but was **_unsuccessful_** at the time. The following is what I did today:

**_First_** I updated `Homebrew`. Yes, I used `Homebrew` to (re)install
`Python`. It's really easy. It's just a matter of putting the pieces of the
puzzle together correctly!

I **_ran_** the `command`

```shell
brew update
```

To **_update_** `Homebrew`. Then I **_ran_** the `command`

```shell
brew install python
```

To (re)install `Python`. Then I **_ran_**

```shell
python --version
```

To see **_which version_** of `Python` my `Mac laptop` was **_recognizing_**. It
**_still_** recognized only `Python 2.7.17`. So I **_ran_** the following
`command`:

```shell
brew info python
```

It **_told_** me the `path` to my **_newly installed_** `Python 3.7.7`. I had to
**_change_** the `path` to `Python` in order for my `Mac` to **_recognize_** the
newly installed version. This is what the command `brew info python` returned to
me in Terminal:

```shell
Python has been installed as
  /usr/local/bin/python3
Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
  /usr/local/opt/python/libexec/bin
```

So I had to **_add_** the **following** at the **_bottom_** of my `.zshrc` file
to **_update_** the `path` to my **_newly installed_** version of `Python` via
`Homebrew`:

```shell
export PATH=/usr/local/opt/python/libexec/bin:$PATH
```

Then I made sure to **_quit_** `Terminal` and go back in so that the `path`
would **_actually_** be **updated** in a **_new_** `Terminal` window
**instance**.

Then I **_checked_** what `version` of `Python` was **_recognized_** now with

```shell
python --version
```

And **_this_** is what was **_returned_**:

```shell
Python 3.7.7
```

Success! It's as easy as that.

And **_BTW_**, if you don't know how to access your `.zshrc` file in `Catalina`,
you simply **_execute_** the following `command`:

```shell
open .zshrc
```

And your file will open in a new window. Then you can paste

```shell
export PATH=/usr/local/opt/python/libexec/bin:$PATH
```

At the bottom of the file.

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [Make python3 as my default python on Mac](https://stackoverflow.com/questions/49704364/make-python3-as-my-default-python-on-mac)

-   [Using node-sass instead of system Sass in OS X Catalina](https://www.interglobalmedianetwork.com/blog/2020-02-12-using-node-sass-instead-of-system-sass-in-os-x-catalina/)
