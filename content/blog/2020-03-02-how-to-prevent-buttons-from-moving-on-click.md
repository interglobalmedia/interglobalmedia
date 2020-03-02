---
title: How to prevent buttons from moving on click
date: 2020-03-02T21:37:47.020Z
description: >-
  In this episode, I talk about how I solved the issue of moving buttons on
  click, and what the side effects were of that move!
image: /img/olivier-miche-skva4bc_bsg-unsplash.jpg
tags:
  - geolocation
  - apis
  - cross-browser-compatibility
  - browse-scrollbars
categories:
  - cross-browser-compatibility
author: Maria D. Campbell
---
- Link to [How to prevent buttons from moving on click](https://anchor.fm/maria-campbell/episodes/How-to-prevent-buttons-from-moving-on-click-eb71ic) podcast on anchorfm

Recently I just finished a `geo ip api` ***application*** as a project for the `JavaScript` **course** I am teaching, and I ***couldn't*** get my **buttons** to ***stop moving*** when I **clicked** them. I quickly figured out that it was the ***disappearance*** of the **browser window scrollbar** that was ***causing*** the **buttons** to ***move***! When there was ***no data*** **rendered** to the ***page***, there was **no overflow** on the ***Y axis***, so ***by default***, there was **no scrollbar**. But when I clicked on the `"Find me"` button that ***triggered*** the `getGeoIp()` **function**, which resulted in the ***appearance*** of the **data** on the ***page***, the **scrollbar** ***appeared***. The **toggling** of the `appearance` and `disappearance` of the **browser window** ***scrollbar*** was what **caused** the **buttons** to ***move***.

Setting the body element to

```css
body {
    overflow-y: scroll;
}
```
took care of the ***moving buttons*** **issue**. 

Then I decided that I wanted to ***add*** the `overflow-y` **property** to the `div` with the `.wrapper` **class**, which contains the `api` **data** ***fetched*** from the `Free IP Geolocation API` I am ***using*** in my **application** called `free-geo-ip`, because I like the idea of making it ***easier*** for my **users** to ***scroll through*** a **smaller area**, thereby ***making*** the **actual height** of the `browser window` ***shorter***. I ***love*** using **inner scrollbars**, especially when ***rendering lists*** to a **page** in my ***applications***.

But ***setting*** the `body` to `overflow-y: scroll` created a ***new issue***! First of all, I **set** an ***inner*** `scrollbar` to my `div` with the `.wrapper` class with the `overflow-y` **property** set to `"auto"`. However, I ***also*** had the `overflow-y` **property** on my `body` **element** set to ***scroll***. This meant that ***initially***, even though I was ***hiding*** the `wrapper div` and ***everything*** **inside it**, the `scrollbar` of the `wrapper div` was NOT **hidden** in `Chrome`.

As a ***result*** of this **situation**, I had to **create** some ***extra conditions*** in my `JavaScript` based on my `CSS` ***styling*** in my **external stylesheet** AND the `CSS in JS` **styling** in my `main.js` file, to ***make sure*** that my `inner scrollbar` did not ***initially appear*** when there was ***no*** `data` **rendered** to the page. The `data` is ***only*** **rendered** to the page when the `Find me!` **button** is clicked.

At ***first***, when I **hid** my `div` with the `.wrapper` **class**, the `scrollbar` ***still*** **showed up** ***locally*** in `Safari` and `Chrome`. It did ***not*** **show up** in `Firefox`. In `Firefox`, the `scrollbar`, along with ***everything residing*** in the  `div` with the `.wrapper` **class**, was ***initially*** **hidden**.

This ***signaled*** **to me** that I would ***have*** to **do** some `cross-browser compatibility styling`. So I ***looked into*** the **issue** of ***initially hiding*** the `scrollbar` of the `div` with the `.wrapper` **class** when the page was supposed to be ***completely empty*** **except for** the `Find me!` **button**, the `Refresh me!` **button**, and the `site` **footer**. I found a great article on `CSS Tricks` about ***styling*** `scrollbars`, which I have included in the **Related Resources** ***section*** of this `podcast` **post**.

First I did the ***following*** in my `main.scss/main.css` **file(s)**:

```css
body {
/* So that there is always a browser window scrollbar to make sure that the find me and refresh me buttons do not move on click. */
overflow-y: scroll;
}

.wrapper {
	/* Set a height to .wrapper div that is shorter than the actual wrapper div height when the data is rendered to the page, to ensure that there will always be overflow on the Y axis when the data renders to the page. */
	height: 350px;
	/* This is to make sure that a scrollbar appears when there is overflow on the Y axis. */
	overflow-y: auto;
}

/* Scrollbar related styling */
/* Needed for scrollbar styling without -webkit pseudo-class to ensure that the scrollbar-thumb styling is applied to the .wrapper div */
.scrollbar-thumb {
	background-color: #16174b;
	outline: 1px solid slategrey;
	border-radius: 15px;
}

/* end scrollbar styling without -webkit pseudo-class*/
/* Default/starting state of -webkit-scrollbar styling when there is no data on the page - hides the scrollbar */
.wrapper::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}

/* .show-scrollbar class added when .backgroundSkyblue class added - shows the scrollbar for the .wrapper class */
.show-scrollbar::-webkit-scrollbar {
	width: 1rem;
	background: white;
}

/* ::-webkit-scrollbar-track-piece is the top-most layer of the progress bar not covered by the draggable scrolling element (thumb). */
.show-scrollbar::-webkit-scrollbar-track-piece {
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

/* The -webkit-scrollbar-track styling addressed the albeit small but empty apace below the scrollbar progress bar. */
.show-scrollbar::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.show-scrollbar::-webkit-scrollbar-thumb {
	background-color: #16174b;
	outline: 1px solid slategrey;
	border-radius: 15px;
}

/* the .backgroundSkyblue class added to div with .wrapper class in if/else statement if there is no .backgroundSkyblue class present. Causes switch from initial default orange background color to sky blue background color. And when the background is sky blue, the div.wrapper scrollbar appears. */
.backgroundSkyblue {
	background: #8bd3fb;
}
```

***All*** the **above** that I ***described*** **now** was ***created*** **after** ***figuring out*** which `classes` I needed to ***add*** with **which** `CSS` **selectors** in ***corresponding*** **conditions**, and **which** ***classes*** I **needed** to ***remove*** in **corresponding conditions** in my `JavaScript`. Once I figured ***those logistics*** **out**, then I could ***create*** the **necessary** `CSS` **styles** in my **external stylesheet**, `main.scss/main.css`. I used `node-sass` for this **project**!

I ***added*** the **following** `JavaScript` in my `main.js` file to make the `div` with the `.wrapper` **class** AND its `scrollbar` **toggle** from `visible` to `invisible` based on ***certain*** **conditions** which ***included*** `CSS in JS`:

```javascript
/* main.js Need to be able to query the body element, and the wrapper div with a class of ".wrapper". */

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
```
***Resulting*** `if/else if/else` **statement**:

```javascript
if (body.className !== "backgroundSkyblue") {
	body.classList.add("backgroundSkyblue");
	wrapper.classList.add("show-scrollbar");
} else if (body.className === "backgroundSkyblue") {
	body.classList.remove("backgroundSkyblue");
	body.style.backgroundColor = "#f08850";
	wrapper.style.display = "none";
	wrapper.classList.remove(".show-scrollbar");
} else {
	body.classList.add("backgroundSkyblue");
	wrapper.style.display = "block";
	wrapper.classList.add(".show-scrollbar");
}
```
The ***initial*** if statement states that if the `body` **element** does NOT ***initially*** have a `className` of `backgroundSkyblue` (which it does NOT), ***add*** the **class** `backgroundSkyblue` to the `body` **element**, and ***add*** the **class** `.show-scrollbar` to the `div` with the **class** `.wrapper`.

The ***following*** `else if` statement **states** that `if` the `body` **element** ***contains*** the `className` `backgroundSkyblue`, ***remove*** the `backgroundSkyblue` **class** from the `body` **element**. Then ***add back*** the **initial** `background-color` of the `body` **element** that is ***set*** **to** the `body` **element** in `main.scss/main.css`. ***Why*** can this be **done**? Because ***whenever*** you **add** `CSS` **styling** ***via*** `JavaScript`, it ***overrides*** the **values** of the ***corresponding*** `css selector(s)` **present** in the `external stylesheet`.

Since I wanted this condition to ***result*** **in** the **hiding** of the `div` with the `.wrapper` **class** and its `scrollbar`, I ***added*** the `display` **property** on the `div` with the `.wrapper` **class** ***dynamically*** **using** the `JavaScript` `style` **property**, and ***setting*** its **value** to `none`. ***However***, as **explained** ***earlier***, I also had to ***add*** `browser-compatibility` **styling** to my `CSS`. ***Therefore***, I had to **remove** the `.show-scrollbar` **class**.

The (final) `else` **statement** is what ***creates*** a `toggle` between ***initial*** `invisibility` of the `div` with the `.wrapper` **class** and the ***subsequent*** `visibility` of the `div` with the `.wrapper` **class**. ***Sometimes*** when you want to `toggle` between `one condition` and `another`, if the ***required*** **conditions** are ***more complex***,  an `if/else` statement ***won't necessarily*** **suffice**. You ***end up with*** an `if/else if/else` **statement** ***instead***. That way you are able to ***cover*** all your **bases** and create a `circular condition` that **persists** ***indefinitely***! In ***this case***, the `else` **statement** is ***saying***, otherwise, just ***add*** the `.backgroundSkyblue` **class** to the `div` with the `.wrapper` class, set the `display` **property** on the `div` with the `.wrapper` **class** to `block`, because in the `else/if` ***statement***, I set the `display` **property** of the `div` with the `.wrapper` **class**  to `none`. ***Lastly***, I needed to ***add back*** the `.show-scrollbar` **class** to the `div` with the `.wrapper` **class**, because I ***added back*** the **class** `.backgroundSkyblue` to ***it***, **signaling** that ***not only*** should the `div` with the `.wrapper` **class*** be `visible`,  but the `scrollbar` for the  `div` with the `.wrapper` **class** should be `visible` as ***well***.

To ***view*** this **application** in ***action***, please ***visit*** the `Free Geo IP` **application** on `Github gh-pages`. To ***view*** the `source code`, please ***visit*** the `geo-ip-app` **repository** on `Github`.

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

## Related Resources:

- [scrollba on CSS Tricks](https://css-tricks.com/almanac/properties/s/scrollbar/)

- [Geo Ip App Source Code on Github](https://github.com/interglobalmedia/geo-ip-app)

- [Geo Ip App Site on Github gh-pages](https://interglobalmedia.github.io/geo-ip-app/)










