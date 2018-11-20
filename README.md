# wbp-pastehtmlfragment
Plugin for Blumentals WeBuilder/RapidPHP/RapidCSS/HTMLPad editors

This is a plugin for the following editors:

Webuilder: http://www.webuilderapp.com/<br/>
RapidPHP: http://www.rapidphpeditor.com/<br/>
RapidCSS: https://www.rapidcsseditor.com/<br/>
HTMLPad: https://www.htmlpad.net/


#### Function:
Allow pasting of Clipboard HTML fragments captured in Web Browsers.

#### Usage:
Open a browser and select/copy an area on a webpage. Then use the plugin to insert the HTML fragment in the editor. (Normal paste will just insert the text of the copied area.)

#### Requirements:
The plugin relies on output from a CLI based utility GetClip by kmd which is available [here](http://upload.elektronshiki.ru/enigma/MySoft/GetClip/).

You can also use the GetClip from the ConClip package by Karl E. Peterson, available [here](http://vb.mvps.org/tools/ConClip/). But this one lacks support for uicode characters.

#### Installation:
1) Download plugin .ZIP file.
2) Place the GetClip.exe in the plugins root folder.
3) Open editor and select "Plugins -> Manage Plugins" from the menu.
4) Click "Install" and select the .ZIP file you downloaded in step 1.
