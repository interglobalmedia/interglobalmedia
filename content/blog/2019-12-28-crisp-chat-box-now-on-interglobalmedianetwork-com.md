---
title: Crisp Chat Box now on interglobalmedianetwork.com
date: 2019-12-28T15:23:01.030Z
description: >+
    In this episode, I talk about why I decided to go with a chat box widget
    instead of creating a node chat app myself for interglobalmedianetwork.com.

image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - chat-widget
    - crisp
    - real-time-chat
    - gatsbyjs
categories:
    - gatsbyjs
author: Maria D. Campbell
---

-   Link to
    [Crisp Chat Box now on interglobalmedianetwork.com](https://anchor.fm/maria-campbell/episodes/Crisp-Chat-Box-now-on-interglobalmedianetwork-com-e9s85s)
    podcast on anchorfm

I finally have added a **\*chat widget** so people can talk to me about what I
might be able to do for them in real time. I'm very excited about this!

I was thinking of and then trying to implement a **node chat box** myself on the
site. But given the way I had **configured** my **_frontend_** with
**Gatsby/React**, it would not have been worth the time and effort when I could
simply add a chat widget with **Crisp**!

I came across it accidentally when I was looking into how I could add a node
chat box to my **Gatsby** site. I found the following doc on **Gatsby**:

-   [gatsby-plugin-crisp-chat](https://www.gatsbyjs.org/packages/gatsby-plugin-crisp-chat/)

I decided to give it a whirl. All you have to do is add a website on **Crisp**
after creating an account, and then add the code shown on the
`gatsby-plugin-crisp-chat` page.

It may take a bit to show up (make sure you do a refresh of the site). Just be a
pit patient. It will work. The other thing which will help make sure that
everything works is to set `enableDuringDevelop` to true. This way you will
immediately see locally whether everything works or not. My **options** are
**_setting_** to the following:

```js
options: {
    websiteId: 'fc478bdc-8e68-4068-b4c3-e810e0d7b378',
    enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    defer: false, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    enableImprovedAccessibility: true, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults  to true.
},
```

I would rather have asynchronous loading script than deferred. I also believe in
better accessibility, so I set it to true.

This is a huge move for me and for the website. This way people will feel more
like there really is someone (or someones) behind **Inter-Global Media
Network**. It makes me seem more accessible. It does make me accessible online!

**An aside:** Sharepoint for automating Office 365 workflows (and more) looks
mighty interesting…

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. I will be including the related
resource links mentioned in the podcast of course. Always do. Bye for now!

-   [gatsby-plugin-crisp-chat](https://www.gatsbyjs.org/packages/gatsby-plugin-crisp-chat/)

-   [Customer Messaging Platform For Startups & SMB's - Crisp](https://crisp.chat/en/)
