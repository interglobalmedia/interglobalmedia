---
title: APIs for Developers and what pitfalls to watch out for
date: 2020-01-14T11:42:56.432Z
description: >-
  In this episode, I discuss resources I have come across providing information
  about APIs for developers. I also discuss what pitfalls to watch out for when
  working with APIs.
image: /img/michael-dziedzic-1bjsasjhfke-unsplash.jpg
tags:
  - apis
  - environment-variables
  - dotenv
  - javascript
  - frontend-development
categories:
  - apis
  - frontend-development
author: Maria D. Campbell
---
- Link to [APIs for Developers and what pitfalls to watch out for](https://anchor.fm/maria-campbell/episodes/APIs-for-Developers-and-what-pitfalls-to-watch-out-for-ea5vup) podcast on anchorfm

Yesterday I was thinking about what I wanted to ***build*** with **React**, and I couldn't come up with any ideas off the top of my head. But I knew there had to be some ***free*** **API**s out there other than the ones I already knew that would be available to developers to use in their projects. 

After a bit of research and a miss or two, I came across a website called [apilist.fun](https://apilist.fun/). It is a list of apis for developers to use in their projects. Some are ***free*** **without** API keys, some are ***free*** **with** API keys, and some are ***premium*** with API keys.

As I started browsing through the list, I immediately came up with ideas. ***But*** the API Key business got me bugged. You ***can't*** **use** API keys in the frontend. Even if you use a package like `dotenv`, the API key WILL render in the client (browser).

In order to create live projects with **React** using an `API` ***with*** `API` keys, you have to have some kind of backend so that you can hide your keys there.

I remember working on client side applications some years ago, and unwittingly **adding** ***free*** but **restricted** `API` keys in the script. One time my key was revoked because someone else found the key and used it for themselves. The number of requests to the API exceeded the limit, and the key was disabled. That's when I learned that one should not expose one's API keys, then I learned about packages like `dotenv` or creating my own env files. But these were all scenarios including a backend server.

This is what I found on stackoverflow:

```
Question: Doesn't the API key still end up in the bundle?

Answer: Even when you have your key (MY_KEY) as an environment variable in the script tag, it will get rendered on the page and will be visible. Generally, these are browser keys and are intended to be used on the client side. These can be restricted by providing Http Referer header in your request. More on the efficacy of securing these keys here. However API keys (like MY_OTHER_KEY) are not supposed to be used on the client side and should not be rendered in the script tag or stored in the client side JS.

Question: Is there a canonic way of using API keys in a react app? Or is it up to the individual developer?

Answer: The canonical way to use a third party API key is for your client side app to send a request to your backend API. Your backend API then formats the request as per the third-party API, adds the key and makes the call to the third-party API. Once it receives the response, it can either unpack it and translate it into domain objects which your front-end app would understand or send the raw response back to the front-end app. In this way, the API key stays at the backend and is never sent to the client-side.
```

Even if you are just a **frontend developer**, for cases like this, you need to have some kind of **backend** as well. In my opinion, unless you are working on a team with defined roles in which both frontend and backend are clearly defined but available to each other, it is important to know at least the ***fundamentals*** of creating a **backend** that would serve your `API` key ***needs***.

Today I came across a **Github** repository with a list of ***free*** APIs developers can use. Some of them ***require*** `API` keys, some of them use `0Auth`, but there is a fair number that require neither. I don't know how up to date the list is, but it is worth checking out.

Another one I came across on **Github** is a gist from Aidan Feldman, one of the organizers of [Hacker Hours](https://hackerhours.org/). To view his list, which was updated very recently, please visit his gist on Github. It's a list of data APIs that require no server-side auth or private credentials, and are thus good for small browser-only JS projects.

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your hearing and reading pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [apilist.fun](https://apilist.fun/)

- [Using API keys in a react app](https://stackoverflow.com/questions/46838015/using-api-keys-in-a-react-app/46839021#46839021)

- [public-apis](https://github.com/public-apis/public-apis)

- [gist:4952991](https://gist.github.com/afeld/4952991)

- [dotenv](https://www.npmjs.com/package/dotenv)


