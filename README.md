Easy EZproxy 2
============

The Bookmarklet
------------
The simplest way to use this script is to create a new bookmark in your browser ~~called "Easy EZproxy"~~ with any name you want, then paste the following code in place of the URL:
```javascript
javascript:location.href%20%3D%20location.protocol%2B%22%2F%2F%22%2Blocation.hostname%2B%22.ezproxy.cul.columbia.edu%22%2Blocation.pathname%3B
```
Then just click on your new bookmarklet (_bookmark_ + _applet_) whenever you want to redirect through EZproxy. This runs some JavaScript code, so it only works if JavaScript is enabled in your browser. The good news is that JavaScript works the same way in pretty much any browser on any OS.

In case this looks like something that will take over your computer, I've uploaded the original JavaScript source, the Perl script that turns special characters like brackets and spaces into weird symbols, and a Bash script to automatically update this document in case I update the code.

Browser Extensions
------------
The one downside to the bookmarklet method is that it's more or less impossible to add an icon to the bookmark automatically. Believe me, I've ~~tried~~ procrastinated for hours trying to figure it out. If you really miss the crown icon nicely integrated into your browser (like I do), I'm working on a version of the Chrome extension that I can put in the Chrome webstore, as well as a Firefox add-on and a Safari extension.
