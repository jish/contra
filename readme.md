
Add the Contra (Konami) code to any website.

All you have to do is include the `contra.js` script:

    <script src="contra.js" type="text/javascript" charset="utf-8"></script>

You can either react based on css styles:

    <style type="text/css" media="screen">
      body.contra div.foo {
        /* Awesome style here */
      }
    </style>

Or you can add your own javascript handlers and the possibilities are endless:

    Contra.addHandler(function() {
      // Awesome things here
    });
