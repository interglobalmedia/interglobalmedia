---
title: Using node-sass instead of system Sass in OS X Catalina
date: 2020-02-12T22:01:15.716Z
description: >-
  In this episode, I describe how I circumvented my inability to use my old Sass
  installation on my Macbook Pro which I recently upgraded to OS Catalina, by
  installing node-sass locally in some of my smaller vanilla JavaScript
  applications.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - osx-catalina
  - sass
  - node-sass
  - npm
categories:
  - osx-catalina
  - node-sass
author: Maria D. Campbell
---
- Link to [Using node-sass instead of system Sass in OS X Catalina](https://anchor.fm/maria-campbell/episodes/Using-node-sass-instead-of-system-Sass-in-OS-X-Catalina-eaq2cd) on anchorfm

Recently I upgraded to **Catalina OS** on my late 2015 15" **Macbook Pro**. As a result, I was not able to access my ***old*** **Sass** installation, and was not able to install **Dart Sass** for the same reason. In ***addition***, according to the **developer.apple.com** documentation:

>
Scripting language runtimes such as Python, Ruby, and Perl are included in macOS for compatibility with legacy software. Future versions of macOS won’t include scripting language runtimes by default, and might require you to install additional packages. If your software depends on scripting languages, it’s recommended that you bundle the runtime within the app. (49764202)
Use of Python 2.7 isn’t recommended as this version is included in macOS for compatibility with legacy software. Future versions of macOS won’t include Python 2.7. Instead, it’s recommended that you run python3 from within Terminal. (51097165)

One deprecation which did not come as a surprise to me, was

>
Xcode
Deprecations
	- Command line tool support for Subversion — including svn, git-svn, and related commands — is no longer provided by Xcode. If you need Subversion or related command line tools, install the Command Line Tools package by running xcode-select --install. (50266910)

Not that I ***ever*** used **Subversion** or had the ***desire*** to use it!

Since I had installed **Ruby** and **Sass** eons ago, no surprise that it is no longer working. Especially since it ***resides*** in a **path** that ***no longer*** **exists** in ***Catalina***. In ***addition***, I had used **rbenv** to install various **versions** of the ***old*** **Sass**, and that ***no longer*** **works** either. I had installed it via **Homebrew**, and I don't care what the core team says, but **Homebrew** is ***not*** completely compatible with **Catalina** when it comes to ***older software***. But then, the **older software** is ***being tossed*** out the **window**, so getting rid of it is advisable. I did ***just that*** with **rbenv** (which is still stuck in my computer where I can't seem to reach it). I will revisit that issue when I have a moment.

**Git** ***works well*** on my machine. I was a bit confused by what version I should have been on, and thought my version was old. I later found out from the **Homebrew** team that I was on the latest, and I was. Sometimes it is difficult to find that kind of information because so much documentation out there is "outdated", and with ***no publication date***! It doesn't help when you are ***searching*** for such **information** at ***3am***!

But you know what? That is totally fine by me. I decided to just use **node-sass** in my projects ***locally***. I don't even need to use **npx** in order to make it work! I am currently on `node --version 12.14.0`, and my `npm --version` is `6.13.4`.

I immediately came across a very helpful article on how to add node-sass to your JavaScript projects, and made my own adjustments.

Anyhoo, this is what I did to ***add*** `Sass` to my `local` **JavaScript** projects:

First I `npm init` in the root of the project directory. Then I `npm node-sass -S`, making sure that I create a package-lock.json file so that anyone who wants to `git-clone` my repo and then simply run `npm i` to obtain the packages I use in it with no fuss. Without the `-S`, a `package-lock.json` is not created. Then I created a **styles** directory in which I ***added*** a `css directory` and an `scss directory`. Inside the `css directory`, I added a `main.css` file, and in the `scss directory`, I added a `main.scss` file. So the ***directory structure*** of `styles` looks like this:

styles
	- css
		○ main.css
	- scss
		○ main.scss

Then, in `package.json`, I added the following `script`:

```json
"scss": "node-sass --watch styles/scss -o styles/css"
```
In case if you don't know,  `-o` is shorthand for `--output` flag. The `script` is taking what is being ***input*** into the `main.scss` file and printing it out the the `main.css` file. This goes back to the **command line** basics of `stdin stdout`. In the case of `node-sass`, **output** is either represented by `-o` or `--output`. To learn more about `node-sass command line options`, please visit [node-sass on npmjs.com](https://www.npmjs.com/package/node-sass).

***And***, since I use `VS Code`, I can run the `Live Server` **extension** on my project while `watching` my `scss` files at the ***same time***. No fuss no muss! Basically, I use the ***equivalent*** of `Webpack hot-module-replacement`. Very cool! This was especially helpful (and ***quickly implemented***) when setting up a whole bunch of repositories for a `JavaScript` course I am teaching.

To view how I set up `node-sass` in a ***small***, purely `JavaScript` application, please visit [Toggle Can](https://github.com/interglobalmedia/toggle-can) on **Github**.

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [How to use node-sass to compile Sass files in an npm script (2019 Update)](https://sunlightmedia.org/using-node-sass-to-compile-sass-files-in-an-npm-script/)
		
- [macOS Catalina 10.15 Release Notes](https://developer.apple.com/documentation/macos_release_notes/macos_catalina_10_15_release_notes)
