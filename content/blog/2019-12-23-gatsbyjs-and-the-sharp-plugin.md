---
title: GatsbyJS and the Sharp plugin
date: 2019-12-23T11:10:04.983Z
description: >-
  In this episode, I describe how I finally was able to add back the
  gatsby-plugin-manifest and gatsby-plugin-offline plugins to my
  interglobalmedianetwork.com site and subsequently successfully deploy to
  Netlify.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - gatsbyjs
  - sharp-plugin
  - deduping
categories:
  - gatsbyjs
  - sharp-plugin
author: Maria D. Campbell
---
- Link to my [GatsbyJS and the Sharp plugin](https://anchor.fm/maria-campbell/episodes/GatsbyJS-and-the-Sharp-plugin-e9oc23) podcast on anchorfm

Yesterday I updated my **GatsbyJS** site to 2.18.16 and **Node.js** to 12.14.0, but I had to remove the `gatsby-plugin-manifest` and the `gatsby-plugin-offline` due to ***deduping*** of the `sharp` plugin dependency.

This morning I did some further research on `sharp` and` gatsby`. I found the following section in the **GatsbyJS** docs:

- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)

Here, I learned (and possibly it was a re-learn that I forgot) that when plugins that depend on the sharp plugin have been updated, all the other plugins that depend on sharp have to be updated as well:

```
you’ll need to update all Gatsby plugins in the current project that depend on the sharp package. Here’s a list of official plugins that you might need to update in case your projects uses them:

- gatsby-plugin-sharp
- gatsby-plugin-manifest
- gatsby-remark-images-contentful
- gatsby-source-contentful
- gatsby-transformer-sharp
- gatsby-transformer-sqip
```

It turns out that I had to update `gatsby-plugin-sharp` and `gatsby-transformer-sharp` since I had updated `gatsby-plugin-manifest`! That's why ***deduping*** was occurring. Not all plugins that depended on `sharp` in my **GatsbyJS** repo had been updated. 

I updated the **two sharp dependent plugins** and ran

```
npx gatsby build
```

My build was successful locally. There was no deduping of sharp.

Then  I deployed the changes to Netlify. My deploy to remote was successful.

I will be embedding this episode of Plugging in The Holes along with a transcript in the form of a post on interglobalmedianetwork.com for your hearing and reading pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)

- [interglobalmedianetwork.com repo](https://github.com/interglobalmedia/interglobalmedia)



