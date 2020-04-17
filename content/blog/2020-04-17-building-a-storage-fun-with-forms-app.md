---
title: Building A Storage Fun With Forms App
date: 2020-04-17T19:32:28.263Z
description: >-
  Recently I completed an application using localStorage called Storage Fun With
  Forms. I really wanted to make something fun that my students could enjoy and
  learn from as well!
image: /img/jason-leung-xaanw0s0pmk-unsplash.jpg
tags:
  - color-input
  - color-picker
  - javascript
  - local-storage
  - event-listener
  - event-handling
  - try-catch
categories:
  - color-picker
  - local-storage
  - event-handling
author: Maria D. Campbell
---
Recently I ***completed*** an **application** using `localStorage` called `Storage Fun With Forms`. I really wanted to make something ***fun*** that my **students** could enjoy and learn from as ***well***!

As the ***name*** of the **application** ***indicates***, the **application** uses `localStorage` to essentially ***save*** a **user's** ***preferences***. It **includes** `font color`, `font style`, page `background color`, `image`, and `note text`!

I had ***so much*** **fun** ***building*** this little **application**. 

I discovered a ***new*** `png` **website** full of ***cool***, FREE, `pngs` that I use in the **app**.

 I discovered the ***really cool*** `jscolor` **color picker** that I am using in the ***app***.

## Building A Storage Fun With Forms App: How It Works

### User Story

A `user` can ***change*** the `background color` of the `web page` with a `color picker`.

A `user` can ***change*** the `font color` of the `text` at the ***top*** of the `form box` with a `color picker`.

A `user` can ***select*** their `font family` of **choice** for the `text` located at the ***top*** of the `form box` using a `select` **dropdown**.

A `user` can ***select*** their `image` of **choice** using a `select` **dropdown**.

A `user` can ***write*** some `text` in the `textarea` **box** and then ***save*** it to `localStorage` with a **click** of the `Submit Note` **button**.

A `user` can ***retrieve*** the `latest note` ***saved*** to `localStorage` with a **click** of the `Get Note` **button**.

A `user` can get ***full*** `localStorage` **data details** by ***navigating*** to the `Applications` **tab** in `Chrome Developer Tools`, and then by **clicking** on `localStorage` to the ***left*** of the `Applications` **area**.

### Building A Storage Fun With Forms App: How To Build It

My `index.html` **markup** looks something like ***this***:

```html
<!DOCTYPE html><html lang="en">
<head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>localStorage vs sessionStorage fun Form</title>    <link        href="https://fonts.googleapis.com/css2?family=Arvo&family=Bitter&family=Dosis&family=Inconsolata&family=Noto+Sans&family=PT+Sans:wght@400,700&family=Quicksand&display=swap"        rel="stylesheet">    <link rel="stylesheet" href="styles/css/main.css"></head>
<body>    <div class="wrapper">        <h1 class="title">Storage Fun With Forms</h1>        <p class="font-color font-style">Write a note about your experience here and save it to local storage. All            the            other selections you make here are also being saved to local storage so that you may be reminded of them            when you return!</p>        <form id="fun-form">            <div class="storage-buttons">                <a class="clear">Clear Storage</a>                <a class="empty">Empty Storage</a>            </div>            <div id="storage-quota-msg"></div>            <div>                <label for="bgcolor">Choose Background Color:</label>                <div class="inputs">                    <input name="color" id="bgcolor" value="FF0000" class="jscolor" />                </div>            </div>            <div>                <label for="fontcolor">Choose Font Color:</label>                <div class="inputs">                    <input name="color" id="fontcolor" class="jscolor" value="000000" />                </div>            </div>            <div class="select-font">                <label for="font">Choose Font Style:</label>                <select id="font" name="font">                    <option value="'Noto Sans', sans-serif">Noto Sans Sans-Serif</option>                    <option value="'Inconsolata', monospace">Inconsolata Monospace</option>                    <option value="'Arvo', serif">Arvo Serif</option>                    <option value="'Dosis', sans-serif"> Dosis Sans-Serif</option>                    <option value="'Quicksand', sans-serif">Quicksand Sans-Serif</option>                    <option value="'Bitter', serif">Bitter Serif</option>                    <option value="'PT Sans', sans-serif">PT Sans Sans-Serif</option>                </select>            </div>            <div class="select-image">                <label for="image">Select Image:</label>                <select id="image" name="image">                    <option value="images/pinpng.com-boba-png-1646192.png">Boba</option>                    <option value="images/pinpng.com-cupcake-png-581578.png">                        Cupcake 1                    </option>                    <option value="images/pinpng.com-cupcake-png-582129.png">                        Cupcake 2                    </option>                    <option value="images/pinpng.com-joker-face-png-2302664.png">                        Joker Face                    </option>                    <option value="images/pinpng.com-koi-fish-png-13801.png">                        Koi Fish 1                    </option>                    <option value="images/pinpng.com-palm-tree-leaf-png-281s.png">                        Palm Tree Leaf                    </option>                    <option value="images/pinpng.com-palm-tree-leaf-png-30916.png">Maple Leaf</option>                    <option value="images/pinpng.com-push-pin-png-104159.png">                        Push Pin                    </option>                    <option value="images/pinpng.com-salt-clipart-png-3375830.png">                        Koi Fish 2                    </option>                    <option value="images/pinpng.com-snowman-clipart-png-652627.png">                        Snowman                    </option>                    <option value="images/pinpng.com-spider-web-png-transparent-61850.png">                        Spider Web 1                    </option>                    <option value="images/pinpng.com-spider-web-png-transparent-370544.png">                        Spider Web 2                    </option>                    <option value="images/pinpng.com-supergirl-png-423021.png">                        Super Girl                    </option>                    <option value="images/pinpng.com-superhero-clipart-png-6134782.png">Super Hero</option>                    <option value="images/pinpng.com-transparent-rose-png-3604806.png">Roses</option>                    <option value="images/pinpng.com-spongebob-png-591707.png">Sponge Bob Birthday</option>                    <option value="images/pinpng.com-pink-roses-png-84631.png">Pink Roses</option>                    <option value="images/pinpng.com-spongebob-boi-png-5936134.png">Sponge Bob Boi</option>                    <option value="images/pinpng.com-stacks-of-money-png-6687.png">Stacks of Money</option>                    <option value="images/pinpng.com-spongebob-house-png-6400047.png">Sponge Bob House</option>                    <option value="images/pinpng.com-picsart-clipart-png-6120662.png">Bart Simpson</option>                    <option value="images/pinpng.com-el-principito-png-3895598.png">Little Prince 1</option>                    <option value="images/pinpng.com-zorro-png-3794942.png">Little Prince 2</option>                    <option value="images/pinpng.com-lol-png-833532.png">Lol</option>                    <option value="images/pinpng.com-lol-surprise-png-1961089.png">Lol Surprise</option>                </select>            </div>            <div class="note">                <label for="textArea">Type Note:</label>                <textarea type="text" id="textArea" name="textArea">Write a note!</textarea>            </div>            <div class="note-btn-wrapper">                <button type="button" id="note-btn">Submit Note</button>                <button type="button" id="get-note-btn">Get Note</button>            </div>            <img class="image" alt="" />        </form>    </div>    <div class="footer-wrapper">        <footer class="site-footer">            <script>                const theDate = new Date();                const footer = document.querySelector(".site-footer");                footer.style.fontWeight = "600";                footer.style.letterSpacing = "0.07rem";                footer.style.fontFamily = "Arimo, sans-serif";                footer.innerHTML =                    `&#10013; © ${theDate.getFullYear()} Maria D. Campbell &#10013;`;            </script>        </footer>    </div>    <script src="jscolor/jscolor.js"></script>    <script src="scripts/js/main.js"></script></body>
</html>
```
My `main.css`, ***transformed*** to `css` from `scss`, looks something like ***this***:

```css
* {  box-sizing: border-box; }
html {  height: 100vh; }
html,body {  margin: 0; }
body {  display: -webkit-box;  display: -moz-box;  display: box;  display: flex;  flex-direction: column;  -webkit-box-align: center;  -moz-box-align: center;  box-align: center;  justify-content: center;  -webkit-box-pack: center;  -moz-box-pack: center;  box-pack: center;  align-items: center; }
body > .wrapper {  width: 90%;  max-width: 800px;  background-color: #fafafa;  padding: 2rem;  position: relative;  border: 6px solid black;  margin-top: 9rem;  margin-bottom: 22vh;  display: flex;  flex-direction: column; }
/* body wrapper and div for label and selects styling */body > div > div {  width: 300px; }
/* h1 styling */h1.title {  margin: 0;  padding: 0;  position: absolute;  left: 0;  top: -1.25rem;  letter-spacing: 0.06rem;  font-family: "PT Sans", sans-serif;  font-weight: 700;  text-transform: uppercase;  color: #fafafa;  text-shadow: 1px 1px 0 black, 2px 2px 0 black;  font-size: 1.3rem; }  @media (min-width: 384px) {    h1.title {      font-size: 1.5rem;      top: -1.5rem; } }  @media (min-width: 480px) {    h1.title {      font-size: 2rem;      top: -1.9rem; } }  @media (min-width: 600px) {    h1.title {      font-size: 2.5rem;      top: -2.25rem; } }  @media (min-width: 800px) {    h1.title {      font-size: 3.25rem;      top: -3rem; } }
/* form styling by id (more specific) */#fun-form {  width: 100%;  margin: 0 auto; }
/* general label styling */label {  margin: 0.75rem 0 0.25rem;  font-family: "PT Sans", sans-serif;  font-weight: 400; }
/* textarea styling */.note {  margin-top: 0.75rem;  display: flex;  flex-direction: column;  justify-content: center; }
/* font color input div styling */.inputs {  display: flex; }
/* styling for both font and background color inputs */input[name="color"] {  width: 100%;  width: 250px;  height: 1.5rem;  margin-top: 0.5rem;  margin-bottom: 0.5rem; }
/* Styling for select tags */form > div > select {  display: block; }
select {  margin-top: 0.5rem;  width: 200px; }  select:first-of-type {    margin-bottom: 0.5rem; }
/* textarea styling */textarea {  width: 100%;  max-width: 250px;  height: 3rem;  resize: none;  outline: none;  overflow-y: auto;  padding: 0.5rem;  letter-spacing: 0.09rem;  font-size: 1rem;  margin-top: 0.25rem; }
/* image tag styling */img {  position: absolute;  top: 42.5em;  right: 0; }  @media (min-width: 360px) {    img {      top: 40rem; } }  @media (min-width: 480px) {    img {      top: 37rem; } }  @media (min-width: 600px) {    img {      top: 34rem; } }  @media (min-width: 680px) {    img {      top: 13rem;      right: 5rem; } }
/* image size styling by class (more specific) */.image {  width: 100%;  height: 100%;  width: 200px;  height: 200px; }
.note-btn-wrapper,.storage-buttons {  display: flex;  justify-content: space-between;  width: 100%;  max-width: 250px; }
.storage-buttons {  margin-top: 1rem;  margin-bottom: 1rem; }
/* clear and empty storage buttons styling */.clear,.empty {  font-size: 1rem;  font-family: "PT Sans", sans-serif; }  .clear:focus, .clear:hover, .clear:active,  .empty:focus,  .empty:hover,  .empty:active {    color: #d86262;    text-decoration: none; }
/* submit note and get note button styling */#note-btn,#get-note-btn {  width: 90px;  outline: none;  padding: 5px;  font-size: 1rem;  background: black;  color: #fafafa; }
/* Footer styling loosely based on Philip Walton's Sticky Footer used with CSS Flexbox */.site-footer {  height: 50vh;  width: 100%;  font-size: 100%;  display: flex;  justify-content: center;  align-items: flex-end; }  @media (min-width: 411px) {    .site-footer {      font-size: 120%; } }  @media (min-width: 600px) {    .site-footer {      font-size: 130%; } }
```
But now to get down to the ***nitty gritty***. The `JavaScript`!

First, I had to ***declare*** and ***initialize*** a whole bunch of `variables`, and I **organized** them by ***functionality***.

### Global Variables

***Two*** **variables** ***related*** to the `background color` of the **page** `body`:

```js
// background color related variables
let bgColorInput = document.querySelector('#bgcolor');let htmlElem = document.querySelector('html');
```
***Two*** **variables** ***related*** to the `paragraph font color`:

```js
// font color related variables
let fontColorInput = document.querySelector('#fontcolor');let pElem = document.querySelector('p')
```
***Two*** **variables** ***related*** to the `font style`:

```js
// font style related variables
let fontStyleSelect = document.querySelector('#font');let fontStyleElem = document.querySelector('.font-style');
```
***Two*** **image** ***related*** **variables**:

```js
// image related variables
let imageSrcSelect = document.querySelector('#image');let imageElem = document.querySelector('img');
```
***Four*** **textarea** ***related*** **variables**:

```js
// textarea related variables
let textAreaElem = document.querySelector('textarea');let textAreaInput = document.querySelector('#textArea');let noteBtn = document.querySelector('#note-btn');let getNoteBtn = document.querySelector('#get-note-btn');
```
A **clear storage** ***related*** **variable**:
// clear storage button
const clearStorageButton = document.querySelector('.clear');
```
A **storage quota** ***related*** **variable**:

```js
// storage quota message div
const storageQuotaMsg = document.getElementById('storage-quota-msg');
```
An **empty storage** ***related*** **variable**:

```js
// empty storage button
const emptyStorageButton = document.querySelector('.empty');
```
### Checking For Local Storage Support in the Browser

It is ***important*** for the `user` to ***know*** whether or not his/her `browser` ***supports*** `localStorage`. 

I have a **function** called `localStorageSupport()` that **does** just ***that***. The `body` of the **function** contains only ***one*** **line**. So the **complete function** looks **something** like ***this***:

```js
function  localStorageSupport() {
    return typeof Storage !== 'undefined';
}
```
Basically, what the `return` **statement** inside the `body` of the **function** is ***saying***, is if the `type of storage` does ***not*** return `undefined`, `return` **true**, and that would  ***indicate*** that there is `localStorage` **support** in the ***browser***. If the `type of storage` returns `undefined`, `return` **false**, and that would ***indicate*** that there is **no** `localStorage` **support** in the ***browser***.

### Checking for Saved Local Storage

We don't just have to check for `localStorage` **support**, but we ***also*** have to **check** if we have anything ***already*** **saved** to `localStorage`. Why? Because our `styles` are ***based on*** the `values` saved to `localStorage`! 

So we ***need*** to **create** a `condition` to ***check*** whether or not any `key/value` **pairs** are ***already*** **saved** to `localStorage`. If they are ***not***, then we make a `call` to the `populateStorage()` **function**, which ***saves*** our `key/value` **pairs** to `localStorage`. If they have been ***saved***, we make a `call` to our `setStyles()` **function** ***instead***.

This `condition` ***calls for*** an `if/else` **statement**. What we **want** this `if/else` **statement** to ***do***, is **set** the `condition` that If there is not a `bgcolor` **key** ***saved*** to `localStorage`, then **make** a `call` to the `populateStorage()` **function**, which **sets** the `values` of the ***selected*** **items** on the `page` to `localStorage`. If there is a `bgcolor` **key** ***saved*** to `localStorage`, then **make** a `call` to the `setStyles()` **function**.

***However***, we could do ***even better*** than **this**. We could **check** for ***all*** **possible** `keys` (`totaling four`) that **might** be ***already*** **saved** to `localStorage`, and ***not*** just one! If we **just** ***check*** for one, we are **excluding** ***any others*** that might be **already saved**. And ***any*** given `user` may **choose** to ***skip*** selecting a `background color`, or ***any other*** selections, at **any given** ***time***. This is what my `if/else` **statement** looked like ***at first***:

```js
if (!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {  
    setStyles();
}
```
But then it ***dawned*** on me that the `scope` of this ***condition*** was **too narrow**, so I ***ended up*** with the **following**:

```js
if (!localStorage.getItem('bgcolor') ||  !localStorage.getItem('fontfamily') ||  !localStorage.getItem('image') ||  !localStorage.getItem('fontcolor')) {     
    populateStorage();
} else {  
    setStyles();
}
```
So if ***none*** of the **possible keys** have been ***saved*** to `localStorage`, **make** a `call` to the `populateStorage()` **function**. ***Else***, **make** a `call` to the `setStyles()` **function**, which **sets** the `values` of the `keys` as the `values` of the `css style properties`.

### Declaring and Defining The populateStorage() function

The ***idea*** of the `populateStorage()` **function** is to ***save*** a **total** of **4** `key/value` **pairs** to `localStorage`.

Whenever a `user` ***selects*** either a `background color` for the `body` of the `web page`, a `font color` for the `paragraph` located at the ***top*** of the `form box`, a ***different*** `font family` to **change** the ***look*** of the `paragraph`, or a ***fun*** `png` to **spruce up** the `form/page`, the `populateStorage()` **function** is ***called***. The **function** looks ***something*** like **this**:

```js
/* populate storage using the setItem() method. Also check for localStorage support and storage quota. */
function populateStorage() {
  // run detection with inverted expression
  if (!localStorageSupport) {
    // change value to inform visitor of no session storage support
    storageQuotaMsg.innerHTML = 'Sorry. No HTML5 session storage support here.';
  } else {
    try {
      localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
      localStorage.setItem('fontfamily', document.getElementById('font').value);
      localStorage.setItem('image', document.getElementById('image').value);
      localStorage.setItem(
        'fontcolor',
        document.querySelector('#fontcolor').value
      );
      localStorage.setItem('note', document.querySelector('#textArea').value);
      setStyles();
    } catch (domException) {
      domException = new DOMException();
      if (
        domException.name === 'QUOTA_EXCEEDED_ERR' ||
        domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
      ) {
        storageQuotaMsg.innerHTML = 'Local Storage Quota Exceeded!';
      }
    }
  }
}
```
As ***indicated*** by the `comment` at the **top** of the ***function***, the `populateStorage()` **function** ***takes care*** of **three things**. ***First***, it **checks** for `localStorage` **support**. ***Second***, it `"tries out"` **setting** the ***selected*** `key/value` **pair** `options` to `localStorage`. ***Third***, it **checks** if a `user's` `localStorage` **quota** has been `met/exceeded`.

Let's `break down` the `populateStorage()` **function** down into these ***three parts***.

***First***, we **check** to see if there is `localStorage` **support** in the `active browser window`. We **achieve** this with the ***following***:

```js
// run detection with inverted expression
if (!localStorageSupport) {
    // change value to inform visitor of no session storage support
    storageQuotaMsg.innerHTML = 'Sorry. No HTML5 session       storage support here.';
}
```
What's ***going on*** here? We **check** whether there is NOT `localStorage` **support** using the NOT `logical operator`, `!`, along with a ***reference*** to the `localStorageSupport()` **function**. So if there is NOT `localStorage` **support** in the `active browser`, we **set** the `.innerHTML`  **property** on the `div` with the `id` of `"storage-quota-msg"` and ***assign*** it the `value` of the `string`

```js
'Sorry. No HTML5 session storage support here.';
```
This ***covers*** the `if block` of the `populateStorage()` **function's** `if/else` **statement**.  

If there is `localStorage` **support**, the `program` **exits** the `if statement` and ***enters*** the `else statement`.

In the `else statement`, we `try` ***out*** the **code** that ***saves*** our `key/value` **pairs** to `localStorage`. It ***looks*** something like **this**:

```js
else {
    try {
      localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
      localStorage.setItem('fontfamily', document.getElementById('font').value);
      localStorage.setItem('image', document.getElementById('image').value);
      localStorage.setItem(
        'fontcolor',
        document.querySelector('#fontcolor').value
      );
      localStorage.setItem('note', document.querySelector('#textArea').value);
      setStyles();
    }
// rest of else statement
}
```
***First***, we **save** all the `key/value` **pairs** to `localStorage` using the `.setItem()` ***built-in*** **method**. That is ***followed by*** a `call` to the `setStyles()` **function** in ***order*** to **use** the `values` of the `keys` as the `values` of the `css style properties` via `CSS in JS`.

***However***, if the `user's` `localStorage` **quota** has been ***met*** or ***exceeded***, the `program` **exits** the `try block` and ***enters*** the `catch block`. Our `catch block` **checks** for ***exceptions*** `thrown` ***related to*** the `user's` `localStorage` **quota**. The `catch statement` looks **something** like ***this***:

```js
catch (domException) {
    domException = new DOMException();
    if (
        domException.name === 'QUOTA_EXCEEDED_ERR' ||
        domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
      ) {
          storageQuotaMsg.innerHTML = 'Local Storage Quota Exceeded!';
    }
}
```
I pass a `domException` **parameter** to the `catch` **method**, and then ***inside*** the `catch block`, at the **top**, I ***assign*** it the `value` of 

```js
new DOMException();
```
Then I **set** the `name` **property** on this ***new*** `instance` of the `DOMException` **object** represented by the domException parameter/variable. This way, the program can check whether the domException.name  'QUOTA_EXCEEDED_ERR' or 'NS_ERROR_DOM_QUOTA_REACHED' ***exists***, and if it **does** because the `user's` `localStorage` **quota** has been ***met*** or ***exceeded***, then the `value` of  `storageQuotaMsg.innerHTML` should be **set** to 

```js
'Local Storage Quota Exceeded!';
```
If the `user's` `localStorage` is **met** or **exceeded**, then `he/she` can **click** on the `Clear Storage` or `Empty Storage` **button** to ***make room*** for **new** `storage items`.

### Declaring and Defining the setStyles() function

So we have **saved** our `key/value` **pairs** to `localStorage`. But they are ***not*** **worth anything** to us ***unless*** we can **access** those `values` and **set** them to our `style properties` in our` main.js` **file**.

That's where the `setStyles()` **function** ***comes in***!

What does the `setStyles()` **function** do for us? 

***Three things***. **First** it ***retrieves*** our `keys` from `localStorage` with the `getItem()` ***built-in*** **method**. **Then** it ***sets*** the `variables` **representing** the ***retrieved*** `keys` as the `values` of the **elements** with ***given*** `ids` or `classes`. 

Among the ***actual elements*** are the `color input elements` **containing** `color pickers` whose `hex values` are ***stored*** in `localStorage` when the `populateStorage()` **function** is ***called***.

***Next*** are the `select` **elements** ***containing*** `font family` **options** and `image` **options** the `user` can ***choose*** from, whose `values` are also ***stored*** in `localStorage` when the `populateStorage()` **function** is ***called***.

The `localStorage` `key` `values` are ***used*** for **two things**. One is for **setting** the `key` `values` as the `values` of **elements** whose ***styling*** is **dependent** on those `key` `values`. The ***other*** is for **setting** the `values` as the `values` of the **element** `style properties`.

The `setStyles()` **function** looks ***something*** like **this**:

```js
/* Set styles of body background color, font style, image selection, and paragraph font color using the getItem() method to retrieve their values from local storage. */
function setStyles() {
  let currentBgColor = localStorage.getItem('bgcolor');
  let currentFont = localStorage.getItem('fontfamily');
  let currentImage = localStorage.getItem('image');
  let currentFontColor = localStorage.getItem('fontcolor');

  document.getElementById('bgcolor').value = currentBgColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;
  document.getElementById('fontcolor').value = currentFontColor;
  document.querySelector('.font-color').value = currentFontColor;

  htmlElem.style.backgroundColor = '#' + currentBgColor;
  pElem.style.fontFamily = currentFont;
  fontStyleElem.style.color = '#' + currentFontColor;
  imageElem.setAttribute('src', currentImage);
}
```
### Declaring and Defining The clearStorage() function

I also ***wanted*** to **create** a **function** that would ***clear*** both the `textarea` **box** of any ***new*** `text` the `user` has ***inputted***, as well as its **associated** `key/value` **pair** from `localStorage`. That is what the `clearStorage()` **function** is ***for***. It looks **something** like ***this***:

```js
// clear storage function. Only clears the note local storage.
function clearStorage() {
  let note = document.querySelector('#textArea');
  note.value = '';
  localStorage.removeItem('note', note.value);
}
```
Essentially, I **use** the `.removeItem()` ***built-in*** **method** ***set*** on the `localStorage` **object** to ***remove*** the `key/value` **pair** ***associated*** with the `textarea` **element**.

***Two*** **arguments** are ***passed*** to that **method**. The ***first*** is the `name` of the `key` in ***question***, and the ***second*** is the **actual** `value` of the `key`. The `note variable` **represents** the `textarea` **element**, and is ***retrieved*** by **querying** its `id` **name** using the `document.querySelector()` `Document` **method**. This **method** ***returns*** the `first element` in the `Document` that ***matches*** the `specified selector`. In ***our*** case, it is the `id` of the `specified selector`.

***Next***, I **set** the `value` **property** on the `note` **variable** ***representing*** the `textarea` **element**, and I **set** the `valu`e of an **empty** `string`. This ***clears*** all `text` ***residing*** in the `textarea` **box**. Then the `localStorage.removeItem()` **method** ***removes*** the `key/value` **pair** ***associated*** with that `textarea` **element**.

### Declaring and Defining the emptyStorage() function

Sometimes we ***just*** want to **start** from a ***clean slate***, and that **includes** an ***empty*** `localStorage` **area**! That is what the `emptyStorage()` **function** is ***for***.

The `emptyStorage()` **function** ***differs*** from the `clearStorage()` **function** in that it ***empties*** ALL `key/value` **pairs** in the `user's` `localStorage`, ***irrespective*** of which (sub) domain (assuming these subdomains share the same parent domain, as is the case with `Github` `gh-pages` ***hosted*** sites) it belongs to. The `emptyStorage()` **function** looks ***something*** like **this**:

```js
// empty local storage, meaning everything.
function emptyStorage() {
  let note = document.querySelector('#textArea');
  note.value = '';
  localStorage.clear();
}
```
The ***first*** part of the `body` of the **function** is ***exactly*** the **same** as the ***first*** part of the `clearStorage()` **function**. The ***difference*** lies in the **last line**. 

In the `clearStorage()` **function**, the `.remove()` **method** is ***set*** on the `localStorage` **object**, and it ***only*** **removes** the `key/value` **pair** ***passed in*** to it.

In the `emptyStorage()` **function**, the `.clear()` **method** is ***set*** on the `localStorage` **object**, and this **method** ***removes*** all `key/value` **pairs** ***saved*** to the `user's` `localStorage`.

### Setting Event Listeners on the Various Buttons and Elements

The ***last thing*** to **do** in the `application` is to **set** `Event Listeners` on the ***various*** **buttons** and **elements** that ***need*** them to **trigger** a `call` to their ***associated*** **functions**.

### Saving the textarea text to localStorage on the click of the Submit Note Button

If the `user` simply wants to ***save*** the `key/value` pair ***associated with*** the (text) `value` of the `textarea` **box** to `localStorage`, he/she can **click** on the `Submit Note` **button**. The `.addEventListener()` **method** for that button looks ***something*** like **this**:

```js
// save textarea text to local storage on click
noteBtn.addEventListener('click', () => {
  localStorage.setItem('note', document.querySelector('#textArea').value);
});
```
This code ***states*** that when the `Submit Note` **button** has been ***clicked***, the `text` ***typed*** into the `textarea` **box** is ***saved*** as the `value` of the `key` ***named*** `note` to `localStorage`. This **functionality** is ***separate*** from that of the `populateStorage()` **function**.

### Getting the textarea text saved to localStorage on the click of the Get Note Button

***Next***, an `event listener` has to be ***set*** on the `Get Note` **button** so as to ***re-populate*** the `textarea` **box** with the ***latest*** `saved text` to `localStorage`. The `.addEventListener()` **method** for the **button** looks ***something*** like **this**:

```js
// get note local storage value and save it to value of textarea text
getNoteBtn.addEventListener('click', () => {
  localStorage.getItem('note', document.querySelector('#textArea').value);
  document.querySelector('#textArea').value = localStorage.getItem('note');
});
```
When the `user` ***clicks*** on the `Get Note` **button**, ***two things*** **happen**.

***First***, the `textarea` last saved to `localStorage` is ***retrieved*** by the line

```js
localStorage.getItem('note', document.querySelector('#textArea').value);
```
Then that `textarea` **element's** `value` is ***re-assigned*** with the `value` of `localStorage.getItem('note');`.

```js
document.querySelector('#textArea').value = localStorage.getItem('note');
```
As a ***result***, the `textarea` **element** `text` ***retrieved*** from `localStorage` **replaces** the ***default*** text, **re-appearing** in the `textarea` **element** `textbox`.

### Clearing the note/note.value key/value pair from localStorage on the click of the Clear Storage Button

I ***needed*** to **set** an `Event Listener` on the `Clear Storage` **button** to ***trigger*** the `clearStorage()` **function** that ***clears*** the **specified** `key/value` **pair** from `localStorage`. The `.addEventListener()` **method** for the **button** looks ***something*** like **this**:

```js
// clear the note local storage key value
clearStorageButton.addEventListener('click', clearStorage);
```
I ***also*** **needed** to ***set*** an `Event Listener` on the `Empty Storage` **button** to ***trigger*** the `emptyStorage()` **function*8 that ***completely*** empties all `key/value` **pairs** from the `user's` `localStorage`. The `.addEventListener()` **method** for the **button** looks ***something*** like **this**:

```js
// empty local storage completely
emptyStorageButton.addEventListener('click', emptyStorage);
```
***Last*** of **all**, I **needed** to ***set*** `Event Listeners` on the `input`, `select`, and `textarea` **elements** to ***trigger*** the `populateStorage()` **function**, which ***checks*** for `localStorage` **support**, ***saves*** all the `key/value` **pairs** to `localStorage`, **makes** a `call` to the `setStyles()` **function**, and ***catches*** **thrown** `domExceptions` ***related*** to the `user's`  `localStorage` **quota** ***excess***.

***First***, a `change` `Event Listener` had to be **set** on the `background color` `input` **element** that ***triggers*** a `call` to the `populateStorage()` **function** when a `change` has been ***made*** to the `background-color` `value` in the `input field`. The `.addEventListener()` **method** ***set*** on this `input` **looks** something ***like***:

```js
// listen for change in background color input field
bgColorInput.addEventListener('change', populateStorage);
```
***Next***, a `change` `Event Listener` had to be **set** on the `font color` `input` **element** that ***triggers*** a `call` to the `populateStorage()` **function** when a `change` has been ***made*** to the `font color` `value` in the `input` **field**. The `.addEventListener()` **method** ***set*** on this `input` **element** looks something ***like***:

```js
// listen for change in font color input field
fontColorInput.addEventListener('change', populateStorage);
```
***Next***, a `change` `Event Listener` had to be **set** on the `select` **element** that ***triggers*** a `call` to the `populateStorage()` **function** when a `change` has been ***made*** to the `font family` `option` ***selected*** from the `select` `option` **dropdown**. The `.addEventListener()` **method** ***set*** on this `select` **element** looks ***something*** like **this**:

```js
// listen cor change in selection of font style
fontStyleSelect.addEventListener('change', populateStorage);
```
***Next***, a `change` `Event Listener` had to be ***set*** on the `select` **element** that ***triggers*** a `call` on the `populateStorage()` **function** when a `change` has been ***made*** to the `image` `png` **option** ***selected*** from the `select` `option` **dropdown**. The `.addEventListener()` **method** ***set*** on this `select` **element** looks ***something*** like **this**:

```js
// listen for change in image selection
imageSrcSelect.addEventListener('change', populateStorage);
```
***Last*** of **all**, a `change` `Event Listener` had to be **set** on the `textarea` **element** that ***triggers*** a `call` on the `populateStorage()` **method** when a `change` has been ***made*** to the `text` ***typed*** in the `textarea` **element** box. The `.addEventListener()` **method** ***set*** on this `textarea` **element** looks ***something*** like the **following**:

```js
// listen for changes in the textarea element
textAreaInput.addEventListener('change', populateStorage);
```
And ***that*** is **it**! We now have a ***completed*** `Storage Fun With Forms` **App**!

## Tools and Resources Used in this App

I ***used*** the `jscolor` **color picker** to ***replace*** the **default** `color picker` which is ***enabled*** by **adding** the `type="color"` `attribute` and `value` to an `input` **element**.

I got my ***fun*** and ***free*** `pngs` from a `website` ***called*** `pinpng.com`.

I ***used*** `Google Fonts` to `populate` the `values` of my `select` **element's** `options`.

I ***used*** the `npm` **packages** `gh-pages` and `node-sass`. 

I ***created*** an `scss` **script** to ***handle*** `watching changes` to my `scss` **file** and ***transforming*** it to `css`.

I ***created*** a `clean` **script** to ***delete*** and **re-create** a `dist` **folder** ***containing*** all the `files` and `folders` ***needed*** to `deploy` my **app** to `gh-pages`.

I ***created*** a `build` **script** to ***copy*** all my `files` and `folders` **needed** for my **application** `build` into my `dist` **folder**.

I ***created*** a `deploy` **script** that ***deployed*** my `dist` `build` to `Github` `gh-pages`.

What the ***completed*** **application** looks like:

![Storage Fun With Forms Application](/images/fireshot-capture-020-localstorage-vs-sessionstorage-fun-form-interglobalmedia.github.io.png)

## Related Resources:

- [Storage Fun With Forms on Github gh-pages](https://interglobalmedia.github.io/local-storage-session-storage-fun-form/)

- [Storage Fun With Forms Github Repository](https://github.com/interglobalmedia/local-storage-session-storage-fun-form)

- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

- [Sticky Footers in the age of coronavirus: It always comes down to FlexBox, just the implementation may vary](https://www.interglobalmedianetwork.com/blog/2020-04-09-sticky-footers-in-the-age-of-coronavirus-it-always-comes-down-to-flexbox-just-the-implementation-may-vary/)

- [The really cool jscolor color picker](https://www.interglobalmedianetwork.com/blog/2020-04-09-the-really-cool-jscolor-color-picker/)




























