---
title: Using VS Code's REST Client extension instead of Postman
date: 2020-09-08T16:00:35.568Z
description: >-
    In this episode, I discuss an alternative to the Postman Collaboration
    Platform for API Development. It is a VS Code extension called REST Client.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - vscode
    - rest-client
    - vscode-extensions
    - rest-api
    - full-stack-development
categories:
    - vscode
    - vscode-extensions
    - rest-api
author: Maria D. Campbell
---

-   Link to
    [Using VS Code's REST Client extension instead of Postman](https://anchor.fm/maria-campbell/episodes/Using-VS-Codes-REST-Client-extension-instead-of-Postman-ejarqv)
    podcast on anchorfm

_**These**_ **days**, I have found it **very difficult** if _**not**_
**impossible** to **work** with **Postman**. So I **decided** to **see** if
**there were** any **viable alternatives** in `VS Code`. And **there** _**is**_!
It is an **extension** I already had **installed** but had _**never**_
previously **used**. **Now** I had an **opportunity** to **do so**, so I
_**started**_ to _**acquaint**_ **myself** with **it**.

_**First**_ of **all**, in **order** to **be able** to **use** it, it **has** to
**be able** to _**recognize**_ `HTTP` **language**. So I **first created** a
`.txt` **file** and _**then**_ I **set** the **language** to `HTTP` by
**clicking** on `PLAIN TEXT` at the **bottom** of the `Editor` **window** and
**changing** it to `HTTP` in the `command palette` that _**subsequently**_
**appeared**.

**Next**, I **had** to **set** up some **variables** in the **extension
settings** so that I **could** _**get started**_ with **making** some `HTTP`
**requests**.

I **visited** the **extension settings** and **added** the _**following**_
inside the **Rest-client** `settings.json` under `Environment variables`:

```json
"rest-client.environmentVariables": {
	"local": {
		"host": "localhost",
		"token": "test token"
	},
	"production": {
		"host": "https://interglobalmedia-weather-app.herokuapp.com",
		"token": "product token"
	},
	"$shared": {}
}
```

The `"$shared": {}` **variable** is _**already**_ **there**, but I added the
`local` and `production` environment variables.

Then I **wanted** to **make** a `GET` **request** to the `production` **host**,
so I **took** the _**following**_ **steps**:

-   I **went back** to my `rest-client.txt` **file**, **navigated** _**down**_
    to the **bottom** of the `code editor` **window** where it **stated**
    `"No Environment"`, and **clicked** on it. _**That**_ **took** me to the
    `Code Editor Palette`, and **there** I **selected** the **production
    environment** I had _**just**_ **created** in the `dropdown` that
    **appeared**.

-   **Next**, I _**added**_ the `production` **url** I **used** as the `value`
    of the `production host` in `settings.json` **inside** `rest-client.txt`:

```shell
https://interglobalmedia-weather-app.herokuapp.com/weather?address=london
```

and **saved** the `file` **changes**. The _**following**_ `screenshot` is
**what** the `Code Editor` **window** for _**that**_ **file** looked like as a
**result** (**viewable** in the **transcript** of this **podcast** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/)):

![Send Request Link with Send Request text](/img/screen-shot-2020-09-08-at-10.10.30-am.png)

**Then**, when I **clicked** on the **ellipsis** `…`, the _**following**_
**appeared**:

![Send Request Link with GET Request](/img/screen-shot-2020-09-08-at-10.13.37-am.png)

**Then**, when I **clicked** on `"Send request"`, the **following**
_**happened**_ (**viewable** in the **transcript** of this **podcast** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/)):

![Send Request Response](/img/screen-shot-2020-09-08-at-10.16.05-am.png)

This `file` **appears** to the **right** of the `rest-client.txt` **file**
_**containing**_ the **response** to the `GET` **request** I **made** in
`rest-client.txt`. Very cool! And there was _**no need**_ to **leave** the
**code editor**, to _**boot**_!

The **response** also **appeared** in a **new** `browser` **window**:

![Response to Request in New Browser Window](/img/screen-shot-2020-09-08-at-11.30.31-am.png)

There is _**much**_ **more** to this **extension** than I **covered** right now
(and I will _**continue**_ to **discuss** it as I **use** it **more**), but this
is a **start** for **anyone** _**new**_ to it in the **right direction**.

I will be **embedding** this **episode** of **Plugging in The Holes** along with
a **transcript** in the **form** of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
_**hearing**_ and _**reading**_ pleasure. Bye for now!

**Name of extension**: REST Client

**Created by**: HuaChao Mao

## Related Resources

-   [REST Client for VS Code, an elegant alternative to Postman](https://josephwoodward.co.uk/2017/10/rest-%20client-for-vs-code-an-elegant-alternative-postman)
