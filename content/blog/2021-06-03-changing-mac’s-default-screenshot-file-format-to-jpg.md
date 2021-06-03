---
title: Changing Macs default screenshot file format to jpg
date: 2021-06-03T21:55:11.869Z
description: How to change the default format for screenshots created on your Mac.
image: /img/mathew-schwartz-sb7rurrmac4-unsplash.jpg
tags:
  - osx
  - screenshots
  - screen-capture
  - image-formats
  - command-line
  - gatsbyjs
  - compatibility-issues
categories:
  - gatsbyjs
  - image-formats
  - command-line
author: Maria D. Campbell
---
In case if you don’t already know, `OS X` screenshots ***created*** with the `Shift + Command + 5` **keys** are `pngs` by ***default***. However, `pngs` are ***not compatible*** with `GatsbyJS`! And I ***wanted*** to have the `option` of **creating screenshots** for use on `GatsbyJS` **sites**. I thought, there has to be a way of ***changing*** the **default** `screenshot` **format**! And guess what! There is.

If you **want** to ***change*** the `default format` for `screenshots` ***created*** with the `Shift + Command + 5` **keys** on `Big Sur` (or even earlier), ***run*** the following `command` in `Terminal` (`iTerm2` for me) and then ***press*** the `return` **key**:

```shell
defaults write com.apple.screencapture type jpg;killall SystemUIServer
```

It is ***required*** that you **run** this `command` in `Terminal` in order to ***implement*** the **change**. Yet ***another reason*** why it is ***so important*** to learn how to use the `Command Line Interface` (`Terminal` program).

I ***found*** this `information` in the post ***entitled*** [How to Change the Screenshot File Format to JPG on Mac](https://www.maketecheasier.com/change-screenshot-file-format-mac/) on the website [maketecheasier.com](https://www.maketecheasier.com/). It ***also covers*** changing the ***default*** `png` **format** to `GIF`, `TIFF`, `PDF`, and ***reverting back*** to the ***original*** `screenshot file format` (`png`). Don’t freak out if you see mention of using the `Command + Shift + 3` **keys** as the `keyboard shortcut`. When you use the `3` **key**, it ***captures*** your ***entire screen***, which you probably don’t want. The `5` **key** allows you to ***select*** the **part** of your `screen` you ***want*** to ***capture***, especially if you ***only want*** to ***capture*** the `exact dimensions` of a `browser` **tab/window**. You can also make a `screen recording` with the ***same*** `keyboard shortcut`. ***Instead*** of ***selecting*** `screen capture`, you would ***select*** `screen recording`. I wrote a post ***exactly*** about that ***entitled*** [How to take a screenshot on your Mac (Mojave or later)](https://www.interglobalmedianetwork.com/blog/2020-01-12-how-to-take-a-screenshot-on-your-mac-mojave-or-later/). It ***covers*** how to make `screen recordings` as well.

Happy screen capture!

## Related Resources

- [How to Change the Screenshot File Format to JPG on Mac](https://www.maketecheasier.com/change-screenshot-file-format-mac/)

- [How to take a screenshot on your Mac (Mojave or later)](https://www.interglobalmedianetwork.com/blog/2020-01-12-how-to-take-a-screenshot-on-your-mac-mojave-or-later/)

- [Techopedia Explains Command Line Interface (CLI)](https://www.techopedia.com/definition/3337/command-line-interface-cli)