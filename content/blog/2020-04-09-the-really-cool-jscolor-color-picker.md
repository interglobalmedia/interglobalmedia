---
title: The really cool jscolor color picker
date: 2020-04-10T00:31:17.378Z
description: >-
    In this episode, I talk about how to add the really cool jscolor color
    picker to an application!
image: /img/scott-webb-yzyysevqgmm-unsplash.jpg
tags:
    - jscolor
    - color-pickers
    - local-storage
    - javascript
    - css-in-js
categories:
    - color-pickers
author: Maria D. Campbell
---

-   Link to
    [The really cool jscolor color picker](https://anchor.fm/maria-campbell/episodes/The-really-cool-jscolor-color-picker-ecjm5l)
    podcast on anchorfm

While I have been building my `"Storage Fun With Forms"` **application**, I came
across the `jscolor` **color picker** on `MDN`. Instead of using the default
color picker implemented by **setting** the `value` of `color` to the `input`
`type attribute` available in `HTML5`, you replace that with the `class`
`"jscolor"`. If you do **_not_** **remove** `type="color"` from your `input`
**elements**, it will not work!

It took me a little while to figure this out, because there was **_no_**
**explicit** documentation on what **attributes** one **_should_** and **_should
not_** have in the `input`, but after some `hit` and `miss`, I finally figured
it out by removing `type="color"` from my `color inputs` and **_replacing_**
**it** with the `class attribute` set to the `"jscolor"` **class**. In my
`index.html`:

```html
<input name="color" id="bgcolor" value="FF0000" class="jscolor" />
<input name="color" id="fontcolor" class="jscolor" value="000000" />
```

And in my `main.js`:

```js
// background related variable
let htmlElem = document.querySelector('html')

// font style related variable
let fontStyleElem = document.querySelector('.font-style')

//local storage related variables
let currentBgColor = localStorage.getItem('bgcolor')
let currentFontColor = localStorage.getItem('fontcolor')

// css-in-js color styling related
htmlElem.style.backgroundColor = currentBgColor
fontStyleElem.style.color = currentFontColor
```

And that is it!

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [Storage Fun With Forms on Github gh-pages](https://interglobalmedia.github.io/local-storage-session-storage-fun-form/)

-   [Storage Fun With Forms Github Repository](https://github.com/interglobalmedia/local-storage-session-storage-fun-form)

-   [Web Storage API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

-   [Web Storage Application](https://mdn.github.io/dom-examples/web-storage/)

-   [jscolor.com](http://jscolor.com/)

-   [Sticky Footers in the age of coronavirus: It always comes down to FlexBox, just the implementation may vary](https://www.interglobalmedianetwork.com/blog/2020-04-09-sticky-footers-in-the-age-of-coronavirus-it-always-comes-down-to-flexbox-just-the-implementation-may-vary/)
