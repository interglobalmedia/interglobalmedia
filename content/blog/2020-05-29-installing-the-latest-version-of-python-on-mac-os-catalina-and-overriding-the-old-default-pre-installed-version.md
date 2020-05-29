---
title: >-
  Installing the latest version of Python on Mac OS Catalina and overriding the
  old default pre-installed version
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
- Link to [Installing the latest version of Python on Mac OS Catalina and overriding the old default pre-installed version](https://anchor.fm/maria-campbell/episodes/Installing-the-latest-version-of-Python-on-Mac-OS-Catalina-and-overriding-the-old-default-pre-installed-version-eeodgp) podcast on anchorfm

I ***finally*** did it. I successfully installed `Python` version `3.7.7` via `Homebrew` on my **Mac** ***laptop*** with `OS Catalina` **installed**.

For those of you that ***still*** might be trying to **figure out** ***how*** to do **this**, I will ***walk you*** through.

The reason why I was ***eager*** to make sure that I had the **latest version** ***installed*** was because I am **working** on ***publishing*** (open-source) **teaching-related** `documentation` on `Read The Docs`, and I need to have `Python` ***installed*** in order to be able to ***install*** the **programs** ***necessary*** to `publish` ***there***.

The ***default*** `2.7.17` version of `Python` was ***retired*** this past `January 2020`. I had ***tried*** back then to **replace** it with `Python 3+`, but was ***unsuccessful*** at the time.  The following is what I did today:

***First*** I updated `Homebrew`. Yes, I used `Homebrew` to (re)install `Python`. It's really easy. It's just a matter of putting the pieces of the puzzle together correctly!

I ***ran*** the `command`

```shell
brew update
```
To ***update*** `Homebrew`. Then I ***ran*** the `command`

```shell
brew install python
```
To (re)install `Python`.  Then I ***ran*** 

```shell
python --version
```
To see ***which version*** of `Python` my `Mac laptop` was ***recognizing***. It ***still*** recognized only `Python 2.7.17`. So I ***ran*** the following `command`:

```shell
brew info python
```
It ***told*** me the `path` to my ***newly installed*** `Python 3.7.7`. I had to ***change*** the `path` to `Python` in order for my `Mac` to ***recognize*** the newly installed version. This is what the command `brew info python` returned to me in Terminal:

```shell
Python has been installed as  /usr/local/bin/python3
Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to`python3`, `python3-config`, `pip3` etc., respectively, have been installed into  /usr/local/opt/python/libexec/bin
```
So I had to ***add*** the **following** at the ***bottom*** of my `.zshrc` file to ***update*** the `path` to my ***newly installed*** version of `Python` via `Homebrew`:

```shell
export PATH=/usr/local/opt/python/libexec/bin:$PATH
```
Then I made sure to ***quit*** `Terminal` and go back in so that the `path` would ***actually*** be **updated** in a ***new*** `Terminal` window **instance**.

Then I ***checked*** what `version` of `Python` was ***recognized*** now with

```shell
python --version
```
And ***this*** is what was ***returned***:

```shell
Python 3.7.7
```
Success! It's as easy as that.

And ***BTW***, if you don't know how to access your `.zshrc` file in `Catalina`, you simply ***execute*** the following `command`:

```shell
open .zshrc
```
And your file will open in a new window. Then you can paste

```shell
export PATH=/usr/local/opt/python/libexec/bin:$PATH
```
At the bottom of the file.

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

## Related Resources:

- [Make python3 as my default python on Mac](https://stackoverflow.com/questions/49704364/make-python3-as-my-default-python-on-mac)

- [Using node-sass instead of system Sass in OS X Catalina](https://www.interglobalmedianetwork.com/blog/2020-02-12-using-node-sass-instead-of-system-sass-in-os-x-catalina/)

