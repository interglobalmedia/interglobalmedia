---
title: Hiding a "N/A" value of a src attribute  of an img tag from an API
date: 2020-09-02T20:36:42.199Z
description: In this episode, I discuss how one can hide the default alternate
  placeholder image both when an image does not exist or the link passed to the
  value of its src attribute is broken.
image: /img/usgs-k7wetnday6a-unsplash.jpg
tags:
  - onerror
  - altext-image
  - error-handling
  - src-attribute
  - api
categories:
  - api
  - error-handling
author: Maria D. Campbell
---
* Link to
  [Hiding an "N/A" value of a src attribute of an img tag from an API](https://anchor.fm/maria-campbell/episodes/Hiding-an-NA-value-of-a-src-attribute-of-an-img-tag-from-an-API-ej1g1i)
  podcast on anchorfm

Don't you ***hate*** it when you **receive** an **image** from an `API` and the
`value` of the `src` **attribute** is `"N/A"` (or some other similar value)?

Well, that **happened** to **me** the other day. I was **working** on **course
content** for my `Dynamic Web 1` **class** I am **teaching** at the
`New York City College of Technology` (`City Tech` in **Brooklyn**), and I
**noticed** that there were ***quite*** a **few** ***responses*** from the
`OMDB API` which **contained** `placeholder images` because there was ***no***
`actual image` **available**.

This **kind** of **thing** really **uglifies** an **application**, and I
**wanted** to ***remove*** **them** from the `response stream` when **present**.

The **solution** is ***very*** **simple** really, and I have ***not*** come
across it anywhere yet.

Anyway, **all** you **have** to **do** is **figure out** what the `value` of the
`img` **tag's** `src` **attribute** is and then **add** the ***following*** to
your `CSS`:

```css
[src='N/A'] {
    display: none;
}
```

**For** the `API` I was **working** with, the `img` **tag** `returned` from the
`API` **contains** the `src` **attribute** `value` of `'N/A'`, so it was
**simple** to **set** its `display` **property** to `'none'`.

**Sometimes** a **broken** `img` **path** is **passed** as the `value` to the
`src` **attribute**, so those ***still*** **appear** with the
`alternate placeholder` **image**. In **cases** like ***that***, you **have** to
**use** a **bit** of `JavaScript`. I **use** the ***following*** **code** to
**set** the **broken image's** `display` **property** to `'none'`:

```js
// remove img src broken links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(function(img) {
        img.onerror = function() {
            this.style.display = 'none'
        }
    })
})
```

The **way** that you **can** ***quickly*** **check** whether the `code` actually
**works** or **not** is by **adding** an `img` **tag** to your `html` with a
**fake image**, and then **checking** whether or not the **placeholder image**
of `16w x 16h` **shows up** or **not** on the **page**. For **example**, I
**added** the ***following*** to my `results.ejs` **page** in my `Node.js`
**application**:

```html
<img src="alt.jpg" alt />
```

And the ***following*** **showed up** in my `html` **Elements** `tab` in the
`Developer Tools Console`:

![screenshot of altext image set to none](/img/screen-shot-2020-09-02-at-10.24.00-am.png)

And the **page** looked like the **following** in the `browser` (***no***
`alternate` **default placeholder** `image`):

![screenshot of altext image successfully removed](/img/screen-shot-2020-09-02-at-8.50.30-am.png)

So there are ***two*** **scenarios** one **has** to **cover**. **First** is when
there is ***no*** **image** ***available***, which **can** be **solved** with
**pure** `CSS`. And the **other** is **when** the `value` of the **image** `src`
**attribute** is a **broken link**. That **has** to be **solved** with
`JavaScript`.

## onerror property breakdown

`onerror` is a **property** of the `GlobalEventHandlers` and is an
`EventHandler` that **processes** `error` **events**.

`Error` **events** are **fired** on ***various*** **targets** for ***various***
**types** of `errors`. In ***our*** **case**, it is **due** to a **broken link**
or **path** ***passed*** as a `value` of an **image** `src` **attribute**.

When an **image** ***fails*** to `load` for **whatever reason**, an `error`
**event** is **fired** on the `img` **element** that ***initiated*** the `load`,
and the `onerror()` **handler** on the **element** is **invoked**.

**Basically**, I am **setting** the `onerror` **property** on the `img`
**element** and ***initializing*** its `value` with an `anonymous` **function**.
It is **inside** the `body` of this **function** that I **set**
the`style.display` **property** to `'none'`.

Now **this approach** ***works*** in `Firefox` and `Chrome` just fine. But
**when** I **went** to **check it** in `Safari`, it did NOT work. A small
placeholder **image** ***still*** **appears**. That's because `Safari` does
***not*** **support completely** the `onerror` **property**. I'm **willing** to
**stick** with my **solution** for now anyway, as the **occurrence** is
***extremely*** **low**. If I had **tried** to **replace** the `src`
**attribute** to `"N/A"` `onerror`, which **would work** in `Safari`, then I
would **end up** with **absolutely** NO IMAGES. To ***learn*** **more** about
***which*** **browsers** are **compatible** with the `onerror` **property**,
please **visit**
[quirksmode.org](http://www.quirksmode.org/dom/events/error.html).

I will be **embedding** this **episode** of **Plugging in The Holes** along with
a **transcript** in the **form** of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
***hearing*** and ***reading*** **pleasure**. Bye for now!

## Related Resources

* [jQuery/JavaScript to replace broken images](https://stackoverflow.com/questions/92720/jquery-javascript-to-replace-broken-images)
* [How to hide image broken Icon using only CSS/HTML?](https://stackoverflow.com/questions/22051573/how-to-hide-image-broken-icon-using-only-css-html)
* [GlobalEventHandlers.onerror](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)