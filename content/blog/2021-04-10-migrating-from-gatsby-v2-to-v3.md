---
title: Migrating from Gatsby v2 to v3
date: 2021-04-10T13:47:09.974Z
description: In this episode, I discuss the minimum required changes I had to
  make to my Gatsby site when migrating from version 2 to version 3.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - gatsbyjs-v2
  - gatsbyjs-v3
  - version-migrations
  - npm
  - yarn
  - css-modules
  - node-sass
  - peer-dependencies
categories:
  - gatsbyjs-v3
author: Maria D. Campbell
---
- Link to the [Migrating from Gatsby v2 to v3](https://anchor.fm/maria-campbell/episodes/Migrating-from-Gatsby-v2-to-v3-eukj32) podcast on anchorfm

This past week I had to migrate my `Gatsby` **site** from `version 2` to `version 3`. What ***motivated*** me to do this at this **particular time**? There were ***two things*** that ***triggered*** the **move**. ***First***, when I ran `npm audit`, I noticed that I my `npm packages` had a **high number** of `moderate` and `severe vulnerabilities`. When I tried to run `npm audit fix`, ***enough*** of ***them*** `required` **manual fixes** to make me ***want*** to `update` ***all*** my **packages**. 

***Because*** of the `npm update`, my `Gatsby` **version** went from `v 2.14.+` to `3.2.1`, which is the ***latest version*** right now.

The ***other*** (and ***first thing***) that I **noticed** on `my site` was that my `gatsby-remark-reading-time` **plugin** was ***not*** `functioning correctly`, and I **wanted** to ***fix*** it.

***However***, **after** I ran `npm update`, my `site` went ***bezerk***. That told me that `Gatsby version 3` must have been a `major update` that ***required*** some **major refactoring**. I ***pursued*** this to find that my **hunch** was ***correct***.

This `post` is ***not*** about the `details`, as I have ***much further*** `refactoring` to do **regarding** the `migration` from `version 2` to `version 3`, but to **talk about** `npm` vs `yarn` (among ***other things***) when **using** `Gatsby version 3`.

***First*** of all, **because** of `peer dependency` ***issues***, I had to `downgrade` to `Gatsby 3.0.3`, which was a **requirement** for ***just about*** all of the ***required*** `peer dependencies`. But that was ***not enough***.

***According*** to the `Gatsby` **documentation**, the `Gatsby version` to ***update*** to (this was **written** in `March 2021`, when the `major update` was ***released***), it is the ***following***:

```json
package.json
{
  "dependencies": {
    "gatsby": "^3.0.0"
  }
}
```

I **made it** `3.0.3` ***because*** of what was **printed out** to the `console` when I ***ran*** `npm update`.

***Next***, it **mentioned** that if you ***already*** had `npm 7`, you **could run** the ***following*** (command) in `Terminal`:

```shell
npm install gatsby@latest --legacy-peer-deps
```

This ***would have*** been **great** to do if I ***actually*** had `npm 7` (installed). ***However***, `npm 7` does ***not*** come with `Node.js 14.16.1`, which is the ***latest*** `stable version` of `Node.js`. And I ***don’t*** consider it **good practice** to do a ***separate*** `global install` of `npm` that is NOT **included** in the **version** of `Node.js` I am **using** on my ***computer***. So **this step** will **have** to ***wait***.

***Next***, the `Gatsby docs` ***suggested running*** the `npm outdated` **command** to **see** what `npm packages` ***didn’t*** have the `latest versions` ***installed***. I did that. And ***that’s when*** the `peer dependency issues` ***exploded***.

***First*** I **tried** to ***fix*** them via `npm` using a **package** called `install-peerdeps`. Did not help. It ***probably*** would have worked for `packages` ***other than*** `Gatsby`, but it did ***not*** work for `Gatsby`.

***Then***, after **a lot** of ***failed experimentation*** with `npm`, I ***figured*** that there **must be** a ***deeper*** `npm` vs `Gatsby v3` **compatibility issue**. So I ***went back*** into the `Gatsby` **post documentation** entitled [Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/) to ***dig deeper*** `beneath` the `surface` of this **issue**.

For example, I **found** the ***following*** regarding `“Handling version mismatches”` in `npm`:

```shell
When upgrading an already existing project (that has an existing node_modules folder and package-lock.json file) you might run into version mismatches for your packages as npm/yarn don’t resolve to the latest/correct version. An example would be a version mismatch of webpack@4 and webpack@5 that can throw an error like this:

Error: NormalModuleFactory.afterResolve (ReactRefreshPlugin) is no longer a waterfall hook, but a bailing hook instead.

An effective way to get around this issue is deleting node_modules and package-lock.json and then running npm install again. Alternatively, you can use npm dedupe.
```

I ***tried*** that **suggestion**. It did ***not*** `resolve` my `issues` ***completely***. 

What was **happening** with ***me*** when **using** `npm`, ***first*** `14.4.0`, which was what I was ***initially using***, and then when I ***updated*** to `14.16.1`, is that **when** I **ran** `gatsby build` or `gatsby develop`, ***both*** (`commands`) **broke**.

**Out** of ***desperation***, I decided to **try** the `yarn` **route**. I ***don’t like*** `installing` anything `globally` if I can ***help it***, so I **used** `npx yarn`. **Doing** it ***this way***, however, **meant** that `my packages` ***really*** had to be **updated** to **versions** that the ***latest version*** of `yarn` would **recognize**. Why? Because **using** `npx` **means** that you are **fetching** the ***latest version*** of the `package` from the `npm repository`. That ***means then***, that **all** your `dependencies` and `devDependencies` **must have** their ***latest versions*** (or **at least** `versions` that the ***latest version*** of `yarn` would **recognize**) ***installed***.

***According*** to the `Gatsby` **documentation** on their `post` entitled [Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/),

```shell
Depending on how the plugin authors have declared dependencies (e.g. marking a package as a dependency instead of a peerDependency) within those plugins, there could be a myriad of failures that arise. If you encounter any of these issues when migrating your project to Gatsby Version 3, we recommend that you use Yarn resolutions within your package.json.
```

***This*** is what `alerted` me to the ***possibility*** that `npm` was ***no longer*** the **way** to **go** with `Gatsby` ***moving forward***. So I ***removed*** my `package-lock.json` **altogether**, and **just have** a `yarn.lock` now. This ***ultimately*** `fixed` my `issues`.

In ***addition***, I had to ***add*** some `resolutions` to my `package.json`. I ***did this*** after ***much*** `trial` and `error` because of the ***following*** `stated` in the `Gatsby docs` as well:

```shell
If you rely on a plugin that is not found within the list of plugins within the Gatsby framework, you very well may need to use the following resolutions in the near term.
The specific resolutions we recommend at this time are found below:
```

And to **add** the ***following*** to one's `package.json` file:

```json
package.json
{
  "resolutions": {
    "graphql": "^15.4.0",
    "graphql-compose": "^7.25.0",
    "webpack": "^5.24.2"
  }
}
```

At ***one point***, these `versions` will **have** to be ***changed*** when the ***latest*** `package versions` ***change***.

After ***much experimentation*** and probably ***incorrect*** `sequence` of `steps`, I ***finally*** got my `gatsby develop` to ***not*** `break`. It ***only*** `hung`. And I ***think*** that was **because** I have a ***number*** of (new) `“warnings”` I ***need*** to **address**. I think ***after*** they are **addressed** (I say this from ***experience***), the `command` **should work**. ***However***, my `build command` ***was*** `successful`, and I was **able** to get ***everything*** on my `site` to ***work again***!

But to ***backtrack*** a **bit**, there were a ***few new*** `node-sass` **related** issues of which the ***purported solutions*** were ***extremely confusing*** and ***not*** `necessarily correct`. I ***believe*** the `solutions` people were ***providing*** were `temporary fixes`, and did ***not*** address what was ***really*** going on. In the `case` of ***my*** `workflow config` and `Site config`, I ***found*** the `culprit`! And it had ***everything*** to do with **how** I ***configured*** my `styles`, which was **fine** and **correct** for `Gatsby v2`, but ***no longer*** `worked` for `Gatsby v3`.

I think **a lot** of `developers`, ***including*** `myself` at first, did ***not*** `connect` the `dots` with various ***subtle*** and ***not*** so **subtle changes** that were **made** to ***approaching*** `CSS` in `Gatsby v3`.

***First*** of all, I **used** to **use** `CSS modules` in my `Gatsby site`. I had ***removed*** just about **all** of them ***previously*** and **placed them** in (my) `global scss`. And there were also a ***few*** `local css` files I **kept** but ***imported*** them as **regular** `local css` ***instead*** of **importing** them as `CSS modules`. Those **worked fine**.

But there was ONE ***lingering*** `file` I ***still*** was **importing** as a `CSS module`. I had ***forgotten*** about it (I ***created*** it ***so long ago***), and could ***not understand*** at first **why** the ***break*** in the `build` because of `CSS modules`, and that it was ***affecting*** my `css` and ***indirectly*** my `external` (`non-react`)`JavaScript`, until I ***removed*** the `local CSS module` for my `Search component` and **placed** it (the `CSS code`) inside my `scss`. This ***solved*** the `issue`. My `node-sass` **worked** as ***expected*** again. The `JavaScript` that was ***depending*** on the `scss` in ***order*** to **work**, was **working** as ***expected***, and my `Google Search component` was **working again** as ***expected***!

What was it about the CSS modules that broke my site? If we wanted to use CSS modules, there was some code refactoring involved, but the name of the file changed as well. So Search.css had to be changed to Search.module.css. This in of itself is not enough, but I was happy to place the CSS code needed for my Search component inside my scss code since nothing else on the site depended on those styles.

## Deploying my site to Netlify

And then there was ***one last*** `important thing` I **had** to ***add*** to the `root` of my `site` in **order** to ***make sure*** my `build` ***succeeded*** when I **deployed** my `site` to `Netlify`!

I ***inspected*** my `build process` on `Netlify` ***carefully*** after it had **crashed** on `remote`, but was **successful** `locally`. The ***reason*** for that was that the ***default version*** of `Node.js` that is **currently** being **used** on `Netlify` is `v 10+`. I was ***shocked*** to **find** this ***out***. But Gatsby v3 now only accepts Node.js v 12+. And I had ***no idea*** how to **make** `Netlify` use ***my version*** of `Node.js`!

I **went** onto the `Netlify forums` to ***find out***, and **one** of the **community managers** was ***very nice*** to **share** that **information** with me. ***Luckily***, it **involved** `nvm` (`Node Version Manager`), which I **use** on ***my computer***, so the **fix** was ***easy***! All I **had** to ***do*** was **add** an `.nvmrc` **file** at the `root` of my `site`, and then ***place*** the `version` (`number`) of `Node.js `I ***wanted*** `Netlify` to **use**, ***inside***. ***After*** I **did that**, I **had** to **run** the `nvm use 14.16.1` (`command`) in the `command line` at the `root` of my `site` so that `Netlify` would ***actually recognize*** that **version**. This step is ***crucial*** to **make** the ***addition*** of the `.nvmrc` file **work** on `Netlify` **during** the `build process`! To ***learn more*** about **adding** an `.nvmrc` **file** to your `Gatsby site `when **using** `Netlify` as a `hosting service`, **please visit** the **post** entitled [Manage build dependencies](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript) in the `Netlify docs`. 

***My*** `.nvmrc file` **contains** the ***following***:

```shell
14.16.1
```

**Hope** this ***helps*** those that ***might*** have been having ***similar issues***!

I will be **posting** about ***other changes*** I **had** to **make** to ***complete*** my **migration** from `Gatsby v2` to `v3` as I find the time to implement them, but **these** are the ***bare minimum*** `changes` I **had** to **make** in ***order*** for **everything** on the `site` to **work** as ***expected***!

I will be **embedding** this **episode** of **Plugging in The Holes** along with a **transcript** in the ***form*** of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

## Related Resources

- [Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/)







