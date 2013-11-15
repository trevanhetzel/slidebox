Slidebox
========

Slidebox is a super tiny jQuery carousel slider with lightbox-like image enlargement. I've used this on several client projects in the past, so decided to let it out into the wild! Feel free to use or modify as you wish.


Usage
========

## 1. Reference jQuery

## 2. Initialize slidebox

Slidebox needs to be initialized, either in ```<script>``` tags at the bottom of your HTML, or in a separate JavaScript file, like so:

		slidebox({
            container : ".carousel--cont",
            leftTrigger : ".carousel--left",
            rightTrigger : ".carousel--right"
        });

### Parameters

Slidebox currently accepts only three parameters.

- ```container```

The div containing the ```.carousel``` unordered list

- ```leftTrigger```

The element to show previous items

- ```rightTrigger```

The element to show next items

## 3. Mark it up

For the slider to work, it requires an unordered list with a class of ```.carousel``` and a containing element with a class of whatever you'd like (```.carousel--cont``` is what I like to use). This containing element is what needs to be passed in to the ```container``` object.

The lightbox portion of the plugin detects the source of the anchors in each list item. So the markup should look something like this:

		<div class="carousel--left">Prev</div>
	        <div class="carousel--right">Next</div>
	        
	        <div class="carousel--cont">
	            <ul class="carousel">
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	                <li><a href="http://placekitten.com/800/800"><img src="http://placekitten.com/200/150"></img></a></li>
	            </ul>
	        </div>

## 4. Styling

I've purposely left out any skinning, as this is meant to fit into multiple layouts and contexts. However, the few styles that are in ```/demo/style.css``` are needed for everything to work. You can tweak as desired.