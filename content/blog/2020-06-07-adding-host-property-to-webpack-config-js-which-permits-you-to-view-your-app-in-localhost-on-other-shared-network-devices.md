---
title: >-
  Adding host property to webpack.config.js which permits you to view your app
  in localhost on other shared network devices
date: 2020-06-07T18:53:18.300Z
description: >-
  In this episode, I talk about how to add the host property to your
  webpack.config.js file, thereby permitting you to view your app in localhost
  on other shared network devices.
image: /img/annie-spratt-4ujhq5_fjik-unsplash.jpg
tags:
  - localhost
  - host-property
  - webpack-config
  - local-ip-address
categories:
  - webpack
author: Maria D. Campbell
---
- Link to [Adding host property to webpack.config.js which permits you to view your app in localhost on other shared network devices](https://anchor.fm/maria-campbell/episodes/Adding-host-property-to-webpack-config-js-which-permits-you-to-view-your-app-in-localhost-on-other-shared-network-devices-ef45ul) podcast on anchorfm

***Note***: this assumes your `operating system` is `Unix` (`OSX`) and that your ***computer*** is a `Mac`.

Did you know that if you ***added*** the `host` ***property*** to your `devServer` **object** in your `webpack.config.js` file, it ***enables*** you to view your app via `localhost` on ***other devices*** that **share** the ***same network*** as your `computer`? i.e., your ***smart phone*** or ***tablet***?

***First***, add the `host` **property** to your `devServer {}` ***object*** in your `webpack.config.js` file with the ***following*** `value`:

```js
host: '0.0.0.0'
```
***Next***, **re-start** the `webpack-dev-server` with your `webpack-dev-server` ***script***. Mine is `npm run dev`.

When you ***know*** that your `webpack-dev-server` has **started up** ***successfully***, ***type*** the following `command` in `Terminal` to find out the ***local*** `IP address` of your **Mac** `computer/laptop`:

```shell
ipconfig getifaddr en0
```
You can ***also*** find out your computer's **local** `IP address` by ***going into*** `Preferences` -> `Network`, and towards the ***top right*** of the `Network` **window**, ***below*** `Status: Connected`, you will find something like the ***following***:

```shell
Wi-Fi is Connected to xxxxxxxxxxx-5G and has the IP address 192.168.x.x
```
Then ***go into*** another **device**, like your `smart phone`, for example, which is ***running*** on the **same network**, and type in the ***following***:

```shell
192.168.x.x:port
```
`port` should be ***replaced*** by the `port number` you ***use*** in your `webpack.config.js` file. It is the `value` you ***pass*** to the `port` **property** ***within*** your `devServer` **object**:

```js
devServer:{
    before:function(app,server){
        server._watch('./app/**/*.html')
    },
    contentBase:path.join(__dirname,'app'),
    hot:true,
    port:3000,
    host:'0.0.0.0'
},
```
And you should see the ***mobile version*** of your **application** rendered ***there***!

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. Bye for now!

## Related Resources:

- [Find Your IP Address on Windows or Mac](https://www.avg.com/en/signal/find-ip-address)



