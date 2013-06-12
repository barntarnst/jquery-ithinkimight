jquery-ithinkimight
==================

jQuery plugin to arrange elements in a random list like on I Think I Might ([ithinkimight.com](http://ithinkimight.com)). Used in the tumblr theme with the same name! [I Think I Might Theme Tumblr](http://ithinkimighttheme.tumblr.com/)

This plugin is a fast hack and should be updated to fit your needs!

## How to use it
A simple setup could look like:

```html
<div id="container">
	<div class="box" id="box1"></div>
	<div class="box" id="box2"></div>
	<div class="box" id="box3"></div>
	<div class="box" id="box4"></div>
	<div class="box" id="box5"></div>
	<div class="box" id="box6"></div>
	<div class="box" id="box7"></div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="jquery.ithinkimight.js"></script>
<script>
	$(document).ready(function() {
		$("#container").ithinkimight("box");
	});
</script>
```
## Compatability:
- Works in IE8

## In Use:
- [I Think I Might Theme Tumblr](http://ithinkimighttheme.tumblr.com/)