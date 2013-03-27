# jquery-popup-selecting

Plugin creates dialogs with selectable elements
(elements in container will be selectable).
Navigation is performed by using mouse and keyboard (left/right keys)

You can set your own keys, which are used in navigation.

By clicking (or pressing key) at any element you execute your own defined function.

# [DEMO](http://coldmind.github.com/jquery-popup-selecting/)

### usage:

    <link rel="stylesheet" href="jquery-popup-selecting.css">
    <script type="text/javascript" src="jquery-popup-selecting.js"></script>

Examples of initializing are below.

### OPTIONS:

### main:

**useShowKey** (bool)
If true, dialog will be showed by pressing a *showKey* (default: spacebar)

**doActivate** (function)
If function is defined, it will be executed by pressing an element

### optional:

**showKey** (number)
Code of showing key (default: spacebar)

**speed** (number)
Speed of fade in/out effect
(Set 0 to deactivate)

**activateKey** (number)
Code of activating key (default: enter)

### EXAMPLES:

initialize plugin with min options:

	<script type="text/javascript">
        $('#container').popselect({
            useShowKey : true,
            doActivate : function() {
                console.log($.that.find('.selected').text());
            }
        });
	</script>
