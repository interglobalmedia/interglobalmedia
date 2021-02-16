---
title: Using POST request with VS Code's REST Client extension
date: 2020-09-09T12:49:52.155Z
description: >-
  In this episode, Now I discuss using a POST request in a local environment
  using VS Code's REST Client extension.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - vscode
  - rest-client
  - vscode-extensions
  - rest-api
  - full-stack-development
categories:
  - vscode
  - vscode-extensions
  - rest-api
author: Maria D. Campbell
---
-   Link to [Using POST request with VS Code's REST Client extension](https://anchor.fm/maria-campbell/episodes/Using-POST-request-with-VS-Codes-REST-Client-extension-ejbuds) podcast on anchorfm

In my **_previous_** **podcast** entitled [Using VS Code's REST Client extension instead of Postman](https://www.interglobalmedianetwork.com/blog/2020-09-08-using-vs-codes-rest-client-extension-instead-of-postman/), I **discussed** using a `GET` **request** with **VS Code's** `REST Client` **extension** in a `production` **environment**. **_Now_** I will **discuss** using a `POST` **request** in a `local` **environment**.

**_First_** I had to **add** the **following** to my `rest-client.rest` **file** (I **found out** that if I **added** the `.rest` **extension**, it would **recognize** the `http` **language** by **_default_**):

```http
@hostname = localhost
@port = 3000
@host = {{hostname}}:{{port}}
@contentType = application/json

# POST /users
POST http://{{host}}/users HTTP/1.1
Content-Type: {{contentType}}

{
    "name": "Michael",
    "email": "michael@michael.com",
    "age": 23,
    "password": "1234567"
}
```

The `http` **code** in `rest-client.rest` is **available** for **viewing** in the `transcript` **post** of this `podcast` **episode** on [interglobalmedianetwork.com/blog](https://www.interglobalmedianetwork.com/blog).

This `code` **differs** from the **_previous_** `request` **code** in a **couple** of **ways**. **_First_** of **all**, it is a `POST` **request** instead of a `GET` **request**. **_Second_** of **all**, the **environment** is `local`. And **_third_** of **all**, I am **using** `environment` **variables** here.

And **this** is **what** I **had** in my `index.js` (my **Express** `server` **file**):

```js
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoose')
const User = require('./models/user')

/*
express will automatically parse incoming json
to an object so we can access it in our request handlers
We can do that using req.body
*/
app.use(express.json())

app.post('/users', (req, res) => {
	const user = new User(req.body)
	user.save()
	    .then(() => {
		   res.send(user)
	    })
	    .catch(() => {})
	    })
})
app.listen(port, () => {
    console.log(`Server is running on Port ${port} ...`)
})
```

**When** I **clicked** on `"Send Request"` **located** **right above** `POST`, The **_following_** was **returned** in the `Response`:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 119
ETag: W/"77-tTFyEkK9sxYeShiMfIo+M6HknHI"
Date: Wed, 09 Sep 2020 11:13:31 GMT
Connection: close

{
  "age": 23,
    "_id": "5f58b8dbc3c61a59129690ff",
  "name": "Michael",
  "email": "michael@michael.com",
  "password": "1234567",
  "__v": 0
}
```

And the **_following_** was **returned** in the `mongo` **shell**:

```js
{ "_id" : ObjectId("5f58b8dbc3c61a59129690ff"), "age" : 23, "name" : "Michael", "email" : "michael@michael.com", "password" : "1234567", "__v" : 0 }
```

And **_that_** is **it**! **Well**, you **get** the **idea**.

Just **make** **_sure_** that the `server` is **running**. **Sometimes** you may **_think_** that it **is** because you are **sure** you **_started_** **running it** a **little while** **_before_**, but for **whatever reason**, you might **end up** getting inadvertently **disconnected** (or **_perhaps_** you **disconnected** the `server` and **forgot**!). It is **_important_** to **check** whether the `server` is **running** **_before_** `clicking` on `Send Request`.

In **order** to **_make sure_** you are actually **connected** to the `server` via the `REST Client`, **make sure** that `"port"` has been **selected** with `rest-client.rest`. It **_should_** **look** something like **this**:

![Screenshot of REST Client VS Code extension local environment POST request](/img/screen-shot-2020-09-09-at-7.25.24-am.png)

The **reason** **_why_** this is **possible** is because I **created** some `environment` **variables** **_including_** for the `port`. And **_that's_** **what** **_makes_** it **possible** for me to **connect** via `localhost` while the `server` is **running** on the **_same_** `port` as I **define** in my `rest-client.rest` **file**.

And **_that_** is **it**!

I will be **embedding** this **episode** of **Plugging in The Holes** along with a **transcript** in the **_form_** of a **post** on `interglobalmedianetwork.com` for your **_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [Using VS Code's REST Client extension instead of Postman](https://www.interglobalmedianetwork.com/blog/2020-09-08-using-vs-codes-rest-client-extension-instead-of-postman/)

-   [Making REST calls from VSCode](https://www.praveenc.com/posts/vscode-rest-client-extension/)