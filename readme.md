
Add the Contra (Konami) code to any website.

All you have to do is include the `contra.js` script:

```html
<script src="contra.js" type="text/javascript" charset="utf-8"></script>
```

You can either react based on css styles:

```css
body.contra div.foo {
  /* Awesome style here */
}
```

Or you can add your own javascript handlers and the possibilities are endless:

```js
Contra.addHandler(function() {
  // Awesome things here
});
```

### Develop

    $ npm install
    $ npm install -g broccoli-cli

### Build

    $ broccoli build dist
