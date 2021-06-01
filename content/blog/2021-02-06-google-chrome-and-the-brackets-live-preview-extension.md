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

-   Link to the
    [Google Chrome and the Brackets Live Preview extension](https://anchor.fm/maria-campbell/episodes/Google-Chrome-and-the-Brackets-Live-Preview-extension-eq12j5)
    podcast on anchorfm

I **_just started_** `using` **_Brackets_** recently for a `Web Design`
**_class_** I am **_teaching_**, and the **_other morning_**, I woke up to
**_find_** that _`“all my Google Chrome extensions”`_ were **_wiped out_**!   At
**_first_** I thought that my `Mac Operating System` had **_something_** to
**_do_** with it. I **_re-installed_** my **_main_** two `extensions`
**_immediately_** in the `open instance` of `Chrome` I was **_in_**.

Then I **_upgraded_** to `Big Sur` **_yesterday_** (it's **_great_** by the
way), and **_all of a sudden_** all my `extensions` **_re-appeared_**. I
**_thought_** it was because I had **_upgraded_** to `Big Sur`. but **_later
on_** in the **_day_**, when I was **_using_** `Brackets` **_again_**, I
**_noticed_** for the **_first time_** that I **_only_** had two
**_extensions_** `installed` in the **_active instance_** of `Google Chrome`. I
**_also_** noticed that I had **_two instances_** of `Google Chrome` **_open_**.
I **_began_** to **_wonder_** what was **_going on_**, but did at **_least_**
find out that **_one_** of **_them_** `contained` **_all_** my **_extensions_**!

I found out **_pretty quickly_** what was **_going on_**. `Brackets`
**_launches_** its **_own_** `Google Chrome profile` for its `Live Preview`
**_extension_**, which has the `Chrome Remote Debugging API` **_enabled_**.

**_Why_** does `Brackets` **_use_** a **_separate_** `Google Chrome profile` for
**_this_**?

**_According_** to the `thread` I **_found_** entitled
[Why does Brackets (code editor) open a new instance of Chrome when using Live Editor?](https://stackoverflow.com/questions/29089422/why-does-brackets-code-editor-open-a-new-instance-of-chrome-when-using-live-ed)
on `stackoverflow`,

> Remote debugging Is off by default in Brackets, and enabling it requires
> re-launching Chrome( I probably had re-launched Chrome, enabling this feature
> without even realizing it). Using a separate profile means your existing
> browsing session doesn’t have to be restarted, which would be disruptive if
> you have lots of tabs open (which I invariably do when creating coursework or
> developing). It reduces security slightly - other processes on your local
> machine could use the Remote Debugging API to monitor/interfere with other
> browsing you do in the Google Chrome window (it happened with me). The API is
> not exposed to the network, so if you trust your computer to be malware free,
> this is less of a concern. But if you don’t like having a separate Chrome
> instance open (I don’t), you can check File > Enable Experimental Live Preview
> to try out a new Live Preview implementation that does not require the Remote
> Debugging API, and so a new copy of Chrome is not launched. You just can’t use
> this option if your project has a custom server URL set. I have found ways of
> getting around that issue.

There are **_two things_** that I **_really_** don’t like about `Brackets`. One
was **_launching_** the **_more insecure_** `copy` of `Chrome` when I
**_launch_** `Live Preview` (it was **_confusing_** and I **_didn’t know_** what
was **_going on_** at **_first_**!). The **_other_** is that I **_have_** to
**_work_** in `iTerm2` **_itself_** in **_order_** to be **_able_** to **_use_**
`Terminal` with `Brackets`. **_Unlike_** `VS Code` or `Atom`, it **_does not_**
have an `integrated Terminal`. They are **_purportedly_** working on it, but I
**_think_** that **_feature_** is a **_long way_** off. **_Not having_** an
`integrated Terminal` in one’s **_editor_** (my `WebStorm integrated IDE`
**_also_** has one!) **_makes working_** with it **_much harder_**. It
**_slows_** one’s `workflow` **_down_** and can **_also_** `create confusion`!
There are **_good things_** about `Brackets` as **_well_**. They **_do_** have
some nice `editor themes` with **_great_** `syntax highlighting`. They **_do_**
have an **_equivalent_** of the `VS Code HTML5 template shortcut` when one
**_uses_** their `HTML Skeleton extension` (which I **_love_**). They have a
**_whole bunch_** of **_other_** `cool extensions` I **_like_**. I **_would
like_** `Brackets` **_even more_** if there was an `integrated Terminal`. I
**_find myself_** constantly **_opening up_** `VS Code` and **_working_** with
it **_along_** with `Brackets` **_just because_** of its `integrated Terminal`
(it **_also_** happens to be a **_wonderful_** `code editor`).  They (Brackets)
**_also_** have the **_coolest_** `syntax highlighting theme` **_called_**
`CodePen Panda Theme`. It is a **_dream_**, and **_great_** for my **_eyes_**.
The `user experience` (`UX`) in **_that_** regard **_sometimes_** is **_not_**
the **_best_** for **_me_** in `VS Code`.

I will be **_writing more_** about `Brackets` as I `use` **_more_** and
**_more_** of its `features` over the **_coming months_**.

I will be **embedding** this **episode** of **Plugging in The Holes** along with
a **transcript** in the **_form_** of
a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for
your **_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [Why does Brackets (code editor) open a new instance of Chrome when using Live Editor? ](https://stackoverflow.com/questions/29089422/why-does-brackets-code-editor-open-a-new-instance-of-chrome-when-using-live-ed#:~:text=1%20Answer&text=The%20Chrome%20profile%20that%20Brackets,it%20requires%20re%2Dlaunching%20Chrome)
