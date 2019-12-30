---
title: GatsbyJS and dotenv
date: 2019-12-30T17:51:10.019Z
description: >-
  In this episode, I discuss what happened when I tried to use the dotenv npm
  package with the Crisp chat box and GatsbyJS.
image: /img/spenser-OxJxV4qakx0-unsplash.jpg
tags:
  - gatsbyjs
  - crisp
  - dotenv
  - npm
  - environment-variables
categories:
  - gatsbyjs
  - crisp
  - dotenv
author: Maria D. Campbell
---
- Link to the [GatsbyJS and dotenv](https://anchor.fm/maria-campbell/episodes/GatsbyJS-and-dotenv-e9tiu4) podcast on anchorfm

**Update 12.30.19:** According to [ryanditjia](https://github.com/ryanditjia) in response to my [issue](https://github.com/ryanditjia/gatsby-plugin-crisp-chat/issues/5) on the `gatsby-plugin-crisp-chat` **Github** [repository](https://github.com/ryanditjia/gatsby-plugin-crisp-chat),

```
Last note: what Crisp says is true, your Crisp website ID is always there on the final rendered HTML, so it likely won’t matter much to hide it behind .env file.
```
This means in Gatsby speak that trying to use environment variables with Crisp whose real values would render client-side anyway  in the final analysis, would not work!

## Original Podcast Transcript

Friday I added a **Crisp chat box** to my site. I was happy to find such a great widget to enhance my website experience.

But today I realized that I had ***forgotten*** to add the `dotenv` **npm package** to my site so that I could avoid sharing my **Crisp** `websiteId` with the world on **Github**.

However, it was not a travesty. If the widget had been something I had built myself and included some kind of API key, it would have been somewhat of a travesty. I would have had to remove the whole repository from Github and then pushed it to remote again after adding the `dotenv` **npm package**, including the **Crisp** `websiteId` **environment variable** to the `.env` file and including the `.env` file to my `.gitignore`.

With ***Crisp***, all you need to do is delete your existing website configuration and re-add it. This way you receive a new `websiteId` which you can add to your `.env` file,

```
CRISP_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
and then add it to your `gatsby-config.js` file. 

However, I had problems `importing` the `environment variable` into `gatsby-config.js`. The `GatsbyJS` docs were very confusing. In addition, different sources cited different ways of configuring environment variables.

In the end, however, the **Crisp** widget only appeared if I placed the actual **Crisp** `websiteId` string as a value of the `websiteId` option in the **Crisp** `configuration` in `gatsby-config.js`. Just as shown in the `GatsbyJS` docs. I tried all the other solutions provided in the links I include in the post transcript of this podcast on[ interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/), but none worked for me.

Using environment variables only resulted in an `undefined` **Crisp** configuration, no matter which way I configured them.

The working configuration is demonstrated in my post [Crisp Chat Box now on interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/blog/2019-12-28-crisp-chat-box-now-on-interglobalmedianetwork-com/).

What's interesting, however, is that my new websiteId string in the html does not match the string in `gatsby-config.js`. Nor does it match the previous `websiteId` I had. Go figure.

According to **Crisp**, it is not a security risk to add the actual website id string in `gatsby-config.js`. It still would be nice to have the option of using a package like `dotenv`.

I will continue to research this issue, and I have actually created an issue regarding this problem on the [gatsby-plugin-crisp-chat[(https://github.com/ryanditjia/gatsby-plugin-crisp-chat/issues/5) **Github** repository.

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your hearing and reading pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [Why am I getting an "invalid chatbox code" error ?](https://help.crisp.chat/en/article/why-am-i-getting-an-invalid-chatbox-code-error-8j93zr/)

- [How is security managed on Crisp services?](https://help.crisp.chat/en/article/how-is-security-managed-on-crisp-services-1p8p1lm/)

- [Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/)

- [gatsby-plugin-crisp-chat](https://www.gatsbyjs.org/packages/gatsby-plugin-crisp-chat/)

- [Gatsby .env variables with Heroku #11559 (https://github.com/gatsbyjs/gatsby/issues/11559)

- [Environment Variables in gatsby-config.js not working #3896](https://github.com/gatsbyjs/gatsby/issues/3896)

- [dotenv on npm](https://www.npmjs.com/package/dotenv)

- [Setting Environment Variables in Gatsby](https://stackoverflow.com/questions/47086881/setting-environment-variables-in-gatsby)

- [Can't access gatsby environment variables on the client side](https://stackoverflow.com/questions/53741674/cant-access-gatsby-environment-variables-on-the-client-side)

- [Environments and Environment Variables](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/environment-variables.md)

- [gatsby-plugin-crisp-chat repository on Github[(https://github.com/ryanditjia/gatsby-plugin-crisp-chat/issues/5)

