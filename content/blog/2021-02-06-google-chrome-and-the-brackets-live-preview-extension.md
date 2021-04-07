---
title: Google Chrome and the Brackets Live Preview extension
date: 2021-02-06T11:10:04.739Z
description: Google Chrome and the Brackets Live Preview extension
image: /img/clement-helardot-95yrwf6cnw8-unsplash.jpg
tags:
  - brackets
  - adobe
  - vscode
  - live-preview
  - extensions
  - google-chrome
  - security
  - code-editor
  - integrated-terminal
categories:
  - code-editor
author: Maria D. Campbell
---
+ Link to the [Google Chrome and the Brackets Live Preview extension](https://anchor.fm/maria-campbell/episodes/Google-Chrome-and-the-Brackets-Live-Preview-extension-eq12j5) podcast on anchorfm

I ***just started*** `using` ***Brackets*** recently for a `Web Design` ***class*** I am ***teaching***, and the ***other morning***, I woke up to ***find*** that *`“all my Google Chrome extensions”`* were ***wiped out***!   At ***first*** I thought that my `Mac Operating System` had ***something*** to ***do*** with it. I ***re-installed*** my ***main*** two `extensions` ***immediately*** in the `open instance` of `Chrome` I was ***in***.

Then I ***upgraded*** to `Big Sur` ***yesterday*** (it's ***great*** by the way), and ***all of a sudden*** all my `extensions` ***re-appeared***. I ***thought*** it was because I had ***upgraded*** to `Big Sur`. but ***later on*** in the ***day***, when I was ***using*** `Brackets` ***again***, I ***noticed*** for the ***first time*** that I ***only*** had two ***extensions*** `installed` in the ***active instance*** of `Google Chrome`. I ***also*** noticed that I had ***two instances*** of `Google Chrome` ***open***. I ***began*** to ***wonder*** what was ***going on***, but did at ***least*** find out that ***one*** of ***them*** `contained` ***all*** my ***extensions***!

I found out ***pretty quickly*** what was ***going on***. `Brackets` ***launches*** its ***own*** `Google Chrome profile` for its `Live Preview` ***extension***, which has the `Chrome Remote Debugging API` ***enabled***.

***Why*** does `Brackets` ***use*** a ***separate*** `Google Chrome profile` for ***this***?

***According*** to the `thread` I ***found*** entitled [Why does Brackets (code editor) open a new instance of Chrome when using Live Editor?](https://stackoverflow.com/questions/29089422/why-does-brackets-code-editor-open-a-new-instance-of-chrome-when-using-live-ed) on `stackoverflow`,

> Remote debugging Is off by default in Brackets, and enabling it requires re-launching Chrome( I probably had re-launched Chrome, enabling this feature without even realizing it). Using a separate profile means your existing browsing session doesn’t have to be restarted, which would be disruptive if you have lots of tabs open (which I invariably do when creating coursework or developing).
It reduces security slightly - other processes on your local machine could use the Remote Debugging API to monitor/interfere with other browsing you do in the Google Chrome window (it happened with me). The API is not exposed to the network, so if you trust your computer to be malware free, this is less of a concern.
But if you don’t like having a separate Chrome instance open (I don’t), you can check File > Enable Experimental Live Preview to try out a new Live Preview implementation that does not require the Remote Debugging API, and so a new copy of Chrome is not launched. You just can’t use this option if your project has a custom server URL set. I have found ways of getting around that issue.

There are ***two things*** that I ***really*** don’t like about `Brackets`. One was ***launching*** the ***more insecure*** `copy` of `Chrome` when I ***launch*** `Live Preview` (it was ***confusing*** and I ***didn’t know*** what was ***going on*** at ***first***!). The ***other*** is that I ***have*** to ***work*** in `iTerm2` ***itself*** in ***order*** to be ***able*** to ***use*** `Terminal` with `Brackets`. ***Unlike*** `VS Code` or `Atom`, it ***does not*** have an `integrated Terminal`. They are ***purportedly*** working on it, but I ***think*** that ***feature*** is a ***long way*** off. ***Not having*** an `integrated Terminal` in one’s ***editor*** (my `WebStorm integrated IDE` ***also*** has one!) ***makes working*** with it ***much harder***. It ***slows*** one’s `workflow` ***down*** and can ***also*** `create confusion`!
There are ***good things*** about `Brackets` as ***well***. They ***do*** have some nice `editor themes` with ***great*** `syntax highlighting`. They ***do*** have an ***equivalent*** of the `VS Code HTML5 template shortcut` when one ***uses*** their `HTML Skeleton extension` (which I ***love***). They have a ***whole bunch*** of ***other*** `cool extensions` I ***like***. I ***would like*** `Brackets` ***even more*** if there was an `integrated Terminal`. I ***find myself*** constantly ***opening up*** `VS Code` and ***working*** with it ***along*** with `Brackets` ***just because*** of its `integrated Terminal` (it ***also*** happens to be a ***wonderful*** `code editor`).  They (Brackets) ***also*** have the ***coolest*** `syntax highlighting theme` ***called*** `CodePen Panda Theme`. It is a ***dream***, and ***great*** for my ***eyes***. The `user experience` (`UX`) in ***that*** regard ***sometimes*** is ***not*** the ***best*** for ***me*** in `VS Code`.

I will be ***writing more*** about `Brackets` as I `use` ***more*** and ***more*** of its `features` over the ***coming months***.

I will be **embedding** this **episode** of **Plugging in The Holes** along with a **transcript** in the ***form*** of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

## Related Resources

+ [Why does Brackets (code editor) open a new instance of Chrome when using Live Editor?
](https://stackoverflow.com/questions/29089422/why-does-brackets-code-editor-open-a-new-instance-of-chrome-when-using-live-ed#:~:text=1%20Answer&text=The%20Chrome%20profile%20that%20Brackets,it%20requires%20re%2Dlaunching%20Chrome)


