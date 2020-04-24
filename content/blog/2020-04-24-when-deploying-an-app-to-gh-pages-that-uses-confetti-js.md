---
title: When deploying an app to gh-pages that uses confetti-js
date: 2020-04-24T15:52:07.277Z
description: >-
  In this episode, I talk about how to add the confetti-js npm package to an
  application you are hosting on Github gh-pages.
image: /img/hugo-ruiz-e2pvre1pyzs-unsplash.jpg
tags:
  - confetti-js
  - npm-packages
  - gh-pages
  - javascript
categories:
  - gh-pages
  - npm-packages
author: Maria D. Campbell
---
- Link to [When deploying an app to gh-pages that uses confetti-js](https://anchor.fm/maria-campbell/episodes/When-deploying-an-app-to-gh-pages-that-uses-confetti-js-ed6sg9) podcast on anchorfm

Recently I created an `audio-visual` **app** that uses the `confetti-js` library.

I was using `npm` in my **application** ***already***, so I **decided** to ***use*** `confetti-js` via `npm`. I checked to see whether there was a `confetti-js` **npm package**, and there ***was***!

I checked the `npm package` **documentation** to see how I had to add `confetti-js` to my **application**. I was using it `"the classic way"` (`vanilla JavaScript`), as I did ***not*** have any `babel-related` and `webpack-related` **workflow**, which would have ***permitted me*** to use `ES6 modules`. This is what was ***suggested***:

```html
<script src="node_modules/confetti-js/dist/index.min.js"></script>
```
I wasn't ***thinking*** in terms of `gh-pages`, and ***added*** the **package** via ***this*** `script`.

Then I was **told** to do the ***following*** in my ( `main`)`.js` **file**:

```js
const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
```
But ***of course***, since I was `deploying` to `gh-pages`, I ***added*** my `node_modules/` **directory** to my `.gitignore` file. Which ***meant*** that my application would ***not*** **have** any `node_modules` to **access** on ***remote***.

When I ***deployed*** the **application** to `gh-pages`, I got the ***following error*** in the `Chrome Developer Tools Console`:

```shell
TypeError: ConfettiGenerator is not a constructor
```
Of ***course not***, because the application ***could not access*** the `confetti-js` code **inside** the `node_modules/` ***directory***!

I ***immediately*** **realized** what was ***going on***, and **searched** `Google` to see whether there was a `CDNJS` that I could ***use***. And there was!

I ***added*** the `confetti-js` `CDNJS` to my `script` **tag**, removed the `confetti-js` `npm package`, and `re-deployed` to `gh-pages`. This time everything **worked** as ***expected***.

This is what my `script` **tags** ***look like*** now in my `index.html` file:

```html
<script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"></script>
<script src="scripts/js/main.js"></script>
```
On the ***other*** **hand**, if I had **deployed** to a ***remote hosting service*** such as `Netlify`, for example, or `zeit.co`, the **instructions** on the `confetti-js` **npm package page** would **work beautifully**, as they ***both*** **build** the **application** using `node_modules`, ***even though*** we **ignore them** in our `.gitignore` files. They go by what we have ***listed*** in our `package.json` **files**.

So ***if*** you are **using** an `npm package` such as `confetti-js`, but are **hosting** your **front-end** ***application*** on `gh-pages`, ***go with*** a `CDNJS` instead of a **reference** to **code** ***residing*** in your `node_modules/` **directory**. It will ***also*** work like a charm! That ***also means*** that you **wouldn't** even **need** to ***install*** the `confetti-js` **package** to ***begin with***!

On a ***side note***, now that `Microsoft` **owns** ***both*** `Github` ***and*** `npm`, there **should** ***also*** be a **reference** to **how** to ***add*** an `npm package` to an **application** that is ***hosted*** on `Github gh-pages`, if **applicable**! ***Not everyone*** knows, **out of the box**, about the `CDNJS` ***alternative***!

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

## Related Resources:

- [TypeError: ConfettiGenerator is not a constructor](https://github.com/Agezao/confetti-js/issues/8)

- [Confetti Generator on npmjs](https://www.npmjs.com/package/confetti-js) 

- [confetti-js on jsdelivr.com](https://www.jsdelivr.com/package/npm/confetti-js) 






