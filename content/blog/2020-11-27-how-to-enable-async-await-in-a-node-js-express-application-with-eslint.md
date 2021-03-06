---
title: How to enable async await in a Node.js/Express application with ESLint
date: 2020-11-27T15:45:34.616Z
description:
    In this first episode of Season 2,  I discuss how to configure ESLint to
    recognize async/await in a Node.js/Express.js application.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - linters
    - eslint
    - async-await
    - nodejs
    - expressjs
categories:
    - linters
author: Maria D. Campbell
---

-   Link to
    [How to enable async await in a Node.js/Express application with ESLint](https://anchor.fm/maria-campbell/episodes/How-to-enable-async-await-in-a-Node-jsExpress-application-with-ESLint-emfskf)

I was going through the **final project** for the **course** I am **teaching**
at **CityTech** called **Dynamic Web 1** which **includes** **_covering_**
`Modern Javascript` and **introduces** `Node.js`, `environment` **variables**,
`.dotenv`, `ESLint` **rules**, `APIs`, `API keys`, and **_how_** to **protect**
them, the **creation** of `local` **scripts** in `package.json`, the `EJS`
**templating engine** for `Express.js`, and `async/await`.

As I was **writing** the **documentation** for **building** the **application**,
I **_noticed_** that there was an `ESLint` **error** **_regarding_** a couple of
`arrow` **functions** I was **using**. I **_couldn’t_** **understand** at
**first** **_how_** that **could be** the **case**, but **_after_** **further
investigation**, I **realized** it was **_not_** the `arrow` **function** that
was **causing** the **error**, but **implementation** of `async/await` itself.

`async/await` was **introduced** to `JavaScript` in `ES2017`. **Since** I did
**_not_** **include** that in my `ESLint` **config**, the **use** of
`async/await` **using** `ESLint` **threw&& an **error\*\*.

I **_had_** to **add** the **_following_** **property** to the `"parserOptions"`
**object** within in my `eslintrc.json` **file** in **order** to **make** that
`error` **go away**:

```json
"parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "script"
},
```

And **_that_** was **it**!

I will be **embedding** this **episode** of **Plugging in The
Holes** **_along_** **with** a **transcript** in the **form** of
a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for
your **_hearing_** and **_reading_** **pleasure**. Bye for now!

## Related Resources

-   [need a correct eslintrc for async/await - using 7.6+ nodejs](https://stackoverflow.com/questions/44170348/need-a-correct-eslintrc-for-async-await-using-7-6-nodejs)
