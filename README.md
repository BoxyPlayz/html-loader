Base functionality at [https://www.unpkg.com/components-for-html@1.1.1/index.min.js](https://www.unpkg.com/components-for-html@1.1.1/index.min.js)

To link a page with no arguments, simply use a new **include** element with the "url" attribute set to a webpage

```
<include url="header.html"></include>
```

If you need arguments, use them in the args attribute with JSON and use the keys with a * in front

```
<include url="header.html" args="{ 'page' : 'home'}"
```

```
<header> The page is: *page </header>
```

You can see examples in the `example` directory
