---
title: >-
  Sticky Footers in the age of coronavirus: It always comes down to FlexBox,
  just the implementation may vary
date: 2020-04-09T18:04:41.066Z
description: >-
  In this episode, I talk about a new way that I implemented Flexbox to achieve
  a sticky footer in the new application I created for my students called
  "Storage Fun With Forms". I also give some advice on how to approach your work
  during these times of the coronavirus. And yes, this comes from personal
  experience!
image: /img/markus-winkler-zew4bp2gwva-unsplash.jpg
tags:
  - css
  - viewport
  - flexbox
  - sticky-footer
  - vh
  - javascript
  - local-storage
  - web-storage-api
categories:
  - sticky-footer
  - flexbox
  - javascript
  - web-storage-api
author: Maria D. Campbell
---
- link to [Sticky Footers in the age of coronavirus: It always comes down to FlexBox, just the implementation may vary](https://anchor.fm/maria-campbell/episodes/Sticky-Footers-in-the-age-of-coronavirus-It-always-comes-down-to-FlexBox--just-the-implementation-may-vary-ecj6ubb) podcast on anchorfm

I just ***completed*** a little `local storage form` **application** for ***my students***. I felt we **needed** something ***fun*** and ***silly*** to **uplift** our **spirits**, so I ***created*** an **application** called `"Storage Fun With Forms"`.

I ***initially*** built it **without** a ***footer***. I did something a bit ***unorthodox*** with my `image`, which I knew would ***break*** the `sticky footer` **styling** I ***normally*** **add** to my **applications**. In fact, when I **applied** it with ***no*** **adjustments**, it did ***not*** **result** in a `sticky footer`. It ***resulted in*** a `horizontal layout` ***instead*** **of** the `vertical` one I ***began with***, and my `footer` ***ended up*** **above** the **image**. Why? Because I ***set*** the `position` of the **image** to `absolute`.

I realized pretty quickly that I would have to ***remove*** my **usual** `sticky footer` **css**, and ***create*** **new** `css`, **emulating** the ***effects*** of my **default** `sticky footer` **css**.

Below is the `sticky footer` **styling** I would ***normally*** **implement** in my ***applications***:

```css
// Sticky Footer Styling
:root {
  --space: 1.5em 0;
  --space: 2em 0;
}

.Site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.Site-content {
  flex: 1 0 auto;
  padding: var(--space) var(--space) 0;
  width: 100%;
}

.Site-content:after {
  content: "\00a0";
  display: block;
  margin-top: var(--space);
  height: 0;
  visibility: hidden;
}
```
The following is what ***typical*** `html` **markup** would ***look like*** in application's `index.html` when implementing the `sticky footer` **css**:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note App: LocalStorage vs SessionsStorage</title>
    <link href="https://fonts.googleapis.com/css2?family=Arimo&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/css/main.css">
</head>

<body class="Site">
    <div class="Site-content">
        <div class="note-taker">
            <h1 class="title">Note Taker To Session Storage App</h1>
            <div class="storage-buttons">
                <a class="clear">Clear Storage</a>
                <a class="empty">Empty Storage</a>
            </div>
            <div id="storage-quota-msg"></div>
            <div class="file-save-button">
                <a id="save">Save Text To File for Download</a>
            </div>
            <div class="textarea-wrapper">
                <textarea name="text" class="session-storage" id="textArea" cols="50"
                    rows="10">Hello! I love JavaScript, and I prefer sessionStorage. How about you? 👍</textarea>
                <button type="button" id="save-text">Save Text</button>
            </div>
        </div>
    </div>
    <footer class="site-footer">
        <script>
            const theDate = new Date();
            const footer = document.querySelector(".site-footer");
            footer.style.fontWeight = "600";
            footer.style.letterSpacing = "0.07rem";
            footer.style.fontFamily = "Arimo, sans-serif";
            footer.innerHTML =
                `&#10013; © ${theDate.getFullYear()} Maria D. Campbell &#10013;`;
        </script>
    </footer>
    <script src="scripts/js/main.js"></script>
</body>

</html>
```
First I ***removed*** the `markup` related to the `sticky footer` **styling**. I ***removed*** the `.Site` **class** from the `body` **tag**, and the `.Site-content` **class** from the `div` ***right below*** the `body tag`. Then I **removed** that `div` **altogether**. It ***ruined*** the `layout` I had **created** for this **application**, and I wanted to ***stay*** **with it**. There had to be another way of **achieving** a `sticky footer` using `Flexbox`. And there ***was***!

My problem was that I ***had to*** **create** a certain amount of **extra space** ***between*** my `form area` and the `footer`. But I had an `image` set to `position: absolute` to ***contend*** **with**. Then there was the `responsive design` ***aspect*** to consider. In ***smaller screens***, how was I going to **get** the **position** of the **image** to look ***relatively*** the **same** in ***different*** `viewport` **sizes**?

First I ***had*** to **make sure** that I ***added*** enough **extra space** between the `footer` and `form` so that: 1. the footer stuck to the bottom of the document. 2. The amount of space between the form and the footer was enough to address different device heights.

This meant using `vh` instead of `%` and ***definitely not*** `px` or `rems`.

First I set

```css
display: flex;
flex-direction: column;
```
on the `body element` **selector**. But that was ***not*** **enough**. I had to figure out what `height` to ***set*** for the `footer`. I ***started*** **with** `25vh`, and ***initially*** **ended up** with what I thought was the `magic number` of `32vh`. It was ***difficult*** to **calculate** this ***scientifically*** since I was **using** `vh`. I tried, but then I decided to  ***roughly*** **calculate** by ***eye*** and then test out the `footer` **vh** `calculation` in `Chrome Developer Tools` **device mode** and then in my `Google Pixel 2` **smart phone**. `32vh` wasn't too far off from my **initial calculation** of `25vh`. And it ***did not*** `mess` with my `absolutely positioned image`.

This is what my `footer` **styling** looked like at first: 

```css
site-footer {
    height: 32vh;
    width: 100%;
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media #{$min-411} {
        font-size: 120%;
    }

    @media #{$min-600} {
        font-size: 130%;
    }
}

```

But when I **tested** in ***bigger screens***, i.e. `1924w x 2560h` in `Safari responsive design mode`, the `footer` did not quite make it all the way to the **bottom** of the `viewport`. I ***eyeballed*** the `viewport` again, and gave the `.site-footer` **class**  a `height` of `50vh`. Then the footer ***almost stuck*** to the **bottom**. But it was ***still*** relatively **too high** and could ***not*** be **considered** a `sticky footer`. Then I changed the css to the following:

```css
site-footer {
    height: 50vh;
    width: 100%;
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media #{$min-411} {
        font-size: 120%;
    }

    @media #{$min-600} {
        font-size: 130%;
    }
}
```
This was ***better***, and in **both cases**, the `icing on the cake` in the `css`, was

```css
align-items: flex-end;
```
If I had ***not*** **added** ***that***, the `footer` would have **shown up** ***even higher*** in the `viewport`!

For the `height` of `2560px` (derived from `responsive mode` in `Safari`), I ***changed*** the  `footer` **height** to `67vh`:

```css
.site-footer {
    height: 67vh;
}
```
But this ***did not*** **work**. ***Nothing changed***. I had to **find** a **solution** that ***worked*** **across** ***all*** `viewport` **heights** ***up to*** and **including** `2560px`. I decided to ***not try*** and **increase** the `footer vh` **height** ***beyond*** `50vh` using the `media query` of `min-height: 2560px`, but ***instead*** **changed** the `body>.wrapper`'s  (using the `>` greater than symbol indicating that the `div` with the `.wrapper` **class** was a ***child*** of the `body element`) `margin-bottom` from an ***explicit amount*** of `6rem` to an ***explicit*** `vh` of `22vh`:

```css
body>.wrapper {
    margin-top: 9rem;
}
```

and

```css
body>.wrapper {
    margin-bottom: 22vh;
}
```
This ***DID*** work across **different** `viewport` **heights** ***up to*** and **including** the `height` of `2560px`. And I did ***not*** have to **add** another `media query` ***targeting*** the `min-height` of `2560px`.

I went  this way because the `html` **markup** I had ***created*** for this **application** was ***too complex*** and ***different*** from my **usual** `html` **markup**. It was a ***quicker***, ***easier*** **solution** and delivered the ***same results***. Given the ***current situation***, it will **have** to ***do***!

The `css` is much more ***terse*** than my **original** `sticky footer` **css**, but the ***concept*** remains the **same**. To make sure that **enough space** was ***added*** between the `form` *8content** and the `footer`, and that it would ***appear*** the **same** no matter what `height` the `viewport` was. BTW, I also use `vh` in my ***regular*** `sticky footer` **css**. My `.Site` **class** which I ***set*** on the `body element` in `index.html` usually **looks** like ***this***:

```css
.Site {    
    display: flex;    
    flex-direction: column;    
    min-height: 100vh;
}

Next, I had to **address** some `cross-browser` **compatibility styling** ***issues***. I forgot that I should ***not*** tamper with the `user agent` **styling** of ***certain elements***, otherwise they ***look*** **very different** in **different browsers**. The `user agent` **styling**, ***however***, potentially looks ***pretty much*** the **same** across ***browsers***. 

I ***reverted*** back to the `user agent` **styling** for the `select` **element**. In ***addition***, I had to **set** an **explicit width** on the `inputs` with the `color type`. Initially, I did the following with the `inputs` of `type color`:

```css
input[name="color"] {    
    width: 100%;    
    max-width: calc(250px - 0px);    
    height: 1.5rem;
}
```
In `Chrome`, everything looked as I expected, but in `Firefox`, only a `sliver's worth` of `color input` **width** ***showed up***, and in `Safari`, ***no*** `color input` appeared at all. Since I had to set an **explicit width** in `pxs` or `rems`, for example, I made the `width` `200px` so that it would ***fit*** within the `body.>wrapper` in an `iphone 4` (and I didn't find it necessary to make it any bigger in wider screens). I ended up ***using*** the following `css` for my `color inputs`:

```css
input[name="color"] {
    width: 100%;
    width: 200px;
    height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
```
Everything **rendered** as ***expected*** across **browsers**. You should test it out for yourself!

The other ***interesting*** **thing** I ***noticed*** was that the `color picker` **itself** also ***somewhat*** **varied** across **browsers**. ***That*** I **could not** ***change***. The way they ***rendered*** to the **page** did **not vary** ***drastically***, just ***slightly***, but there **definitely** was a ***difference***. The look is ***most*** **similar** between `Safari` and `Chrome`. They both use the `-webkit` **vendor prefix** after all. The ***biggest*** **difference** shows up in `Firefox`, as it uses the `-moz` **vendor prefix**, and therefore its `rendering engine` ***potentially*** displays things **differently**. The `concept` that ***all browsers*** **render** things in the ***same way*** and that **all** `css` is `cross-browser` ***compatible*** is a **fallacy**! That also applies to the `user-agent` **stylesheets**.

I ***ended up*** with the **following** `css` for the `select` **element**:

```css
select {    
    margin-top: 0.5rem;    
    width: 200px;
    &:first-of-type {        
        margin-bottom: 0.5rem;    
    }
}
```
I did ***not*** make any **changes** to the `select element` except to the `width` **property**. I ***also used*** the `select element` **selector** instead of a `class` or `id`.

These are ***difficult*** times, and sometimes it is **difficult** to ***focus***. My advice: check your work even more carefully than under normal circumstances. Sometimes you might **find** ***little errors*** due to **lack** of ***focus***, **negative distractions**, or ***due to*** one's **wandering thoughts** in ***reaction*** to the **current status** of the ***world***. As the (`unattributable`) saying ***goes***, `"If you’re going through hell, keep going"`.  As with ***everything else***, this ***too*** shall (eventually) **pass**. Eventually it ***will***, so ***don't act*** like it **won't**!

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

## Related Resources:

- [Storage Fun With Forms  on Github gh-pages](https://interglobalmedia.github.io/local-storage-session-storage-fun-form/)

- [Storage Fun With Forms Github Repository](https://github.com/interglobalmedia/local-storage-session-storage-fun-form)

- [Web Storage API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

- [Free Collection of Amazing PNGs](https://www.pinpng.com/)

- [What are -moz- and -webkit-? [duplicate]
](https://stackoverflow.com/questions/18083056/what-are-moz-and-webkit)

- [Understand ‘+’, ‘>’ and ‘~’ symbols in CSS Selector](https://techbrij.com/css-selector-adjacent-child-sibling)

- [CSS Viewport Units: A Quick Start](https://www.sitepoint.com/css-viewport-units-quick-start/)

- [How to use CSS calc() with an element's height
](https://stackoverflow.com/questions/33776171/how-to-use-css-calc-with-an-elements-height)

- [How to calculate a number and turn it into vw or vh?](https://stackoverflow.com/questions/55751502/how-to-calculate-a-number-and-turn-it-into-vw-or-vh)

- [Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/)

- [Units in CSS (em, rem, pt, px, vw, vh, vmin, vmax, ex, ch, ...)](https://dev.to/fullstack_to/units-in-css-em-rem-pt-px-vw-vh-vmin-vmax-ex-ch-53l0)

 










