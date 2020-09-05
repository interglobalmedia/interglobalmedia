---
title: 'Crisp chat, GatsbyJS and dotenv (update)'
date: 2019-12-31T13:42:25.594Z
description: >-
    In this episode, I discuss the update I made to Crisp chat, GatsbyJS, and
    dotenv issue and what it all means.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - gatsbyjs
    - dotenv
    - crisp
    - client-side-javascript
categories:
    - gatsbyjs
    - crisp
    - client-side-javascript
author: Maria D. Campbell
---

-   Link to the
    [Crisp chat, GatsbyJS and dotenv (update)](https://anchor.fm/maria-campbell/episodes/Crisp-chat--GatsbyJS-and-dotenv-update-e9tviq)
    podcast on anchorfm

Yesterday, I updated my post GatsbyJS and dotenv to include
[ryanditjia](https://github.com/ryanditjia)'s response to my issue on the
[gatsby-plugin-crisp-chat](https://github.com/ryanditjia/gatsby-plugin-crisp-chat)
**Github** repository.

In order that it is not overlooked or missed by those that listened to the
podcast and/or read the post before I added the update, I thought I would create
an **_update podcast_** to this **Crisp chat**, **GatsbyJS**, and **dotenv**
issue.

According to [ryanditjia](https://github.com/ryanditjia) in response to my issue
on the
[gatsby-plugin-crisp-chat](https://github.com/ryanditjia/gatsby-plugin-crisp-chat)
**Github** repository,

```html
Last note: what Crisp says is true, your Crisp website ID is always there on the
final rendered HTML, so it likely won’t matter much to hide it behind (a) .env
file.
```

This means in **_Gatsby_** speak that trying to use `environment variables` with
**Crisp**, whose **real values** would **_render_** **client-side** anyway, in
the final analysis, would not work! Why?

Because, as [ryanditjia](https://github.com/ryanditjia) states,

```html
... your Crisp website ID is always there on the final rendered HTML, so it
likely won’t matter much to hide it behind (a) .env file.
```

That means all the solutions I came across would not have worked anyway, even if
the `websiteId` environment variable did not return `undefined`, because the
`websiteId`, or some relation to it (as I later discovered), renders in the
`html` **client side** anyway.

In **_addition_**, in the end, we **can't** add the **environment variable** to
**client side** code, **_aka_** `Gatsby React`, because there is **_no_**
**Crisp** `React component element` one can add to the **JSX**, as an
[example](https://www.gatsbyjs.org/docs/environment-variables/) shown in the
**GatsbyJS** docs:

```js
// In any frontend code
render() {
    return (
        <div>
            <img src={`${process.env.GATSBY_API_URL}/logo.png`} alt="Logo" />
        </div>
    )
}
```

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. I will be including the related
resource links mentioned in the podcast of course. Always do. Bye for now!

## Related Resources

-   [Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/)

-   [GatsbyJS and dotenv](https://www.interglobalmedianetwork.com/blog/2019-12-30-gatsbyjs-and-dotenv/)
