---
title: Github Integration App Smart Commits on Jira
date: 2020-01-12T00:20:40.327Z
description: >-
    In this episode, I discuss how I reconnected a Github repository to the
    Github Integration app for Jira after discovering that my #resolve, #done,
    and #close commands were not working in my Smart Commits.
image: /img/sandy-millar-yejwdweizho-unsplash.jpg
tags:
    - jira
    - github-integration-app
    - jira-smart-commits
    - git
    - github
categories:
    - jira
author: Maria D. Campbell
---

-   Link to the
    [Github Integration App Smart Commits on Jira](https://anchor.fm/maria-campbell/episodes/Github-Integration-App-Smart-Commits-on-Jira-ea4f2m)
    on anchorfm

I had been away from working on my projects within **Jira** for quite a while,
and recently when I got going with various projects again, I started managing my
development work within there. But I noticed something very strange. The `#time`
command and the `#comment` command worked perfectly, but I couldn't resolve my
issues with the `#resolve`, `#done`, or `#close` commands.

I went crazy. I couldn't understand what was going on. Then, when I went in to
see what was connected to **Github** with the **Github Integration** app for
**Jira**, I saw that certain projects I thought I had connected there were not.
But that is not where it ended.

You should make sure that your repositories are all connected to **Jira**. If
you want to do that, then you have to make sure that you _**don't**_ **enable**
the restriction of your projects when connecting them to the **Github
Integration** app. However, if you already have repositories on **Github** that
had been created before making this move, you will have to add them manually.

Most important of all, you have to go into your **Git General Settings** in
**Jira** and make sure that you have _**enabled**_ **Send Development
Information to Jira Cloud**, otherwise only the _**default**_ **Jira Smart
Commits and Workflow Triggers** will work _**by default**_. This also means that
the `#resolve`, `#done`, and `#close` commands won't work. They are _**not**_
available in **Jira** `smart commits`. _**Only with**_ the **Github
Integration** app.

The following is a screenshot of what the **Jira Git General Settings page**
looks like for everyone's edification. I could not find this explanation
anywhere in the **Atlassian Docs**, and hopefully this will help those who are
just starting out.

![Screenshot of what the Jira Git General Settings page looks like.](/img/fireshot-capture-017-general-settings-jira-interglobalmedia.atlassian.net.png 'Jira Git General Settings Page')

Soon I will discuss how to _**add**_ `SSH` to your **Jira Github Integration**.
I will also get into **Jira Automated Workflow Triggers**.
