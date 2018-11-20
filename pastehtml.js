/**
 * Allow pasting of Clipboard HTML fragments captured in Web Browsers
 *
 * @category  WeBuilder Plugin
 * @package   Math Eval
 * @author    Peter Klein <pmk@io.dk>
 * @copyright 2018
 * @license   http://www.freebsd.org/copyright/license.html  BSD License
 * @version   1.1
 */

/**
 * [CLASS/FUNCTION INDEX of SCRIPT]
 *
 *     28   function PasteHTML()
 *     51   function OnInstalled()
 *
 * TOTAL FUNCTIONS: 2
 * (This index is automatically created/updated by the WeBuilder plugin "DocBlock Comments")
 *
 */

/**
 * Call GetClip.exe to get HTML fragment from Clipboard and insert result in editor
 *
 * @return void
 */
function PasteHTML() {

  if (!FileExists(Script.path + "GetClip.exe")) {
    Alert("getClip.exe not installed!");
    return;
  }

	var fragment = "";
	if (ExecuteCommand(Script.path + "GetClip.exe /frag", fragment)) {
  	if ((fragment != "") && (RegexMatch(fragment, "^< No HTML on Windows clipboard. >$", false) == "")) {
			if ((Document.CurrentCodeType != ltHTML) || (Document.DocType != dtHTML)) {
				if (Confirm("Current document or code type is not HTML" + chr(13) + "Are you sure you want to insert the fragment?") == false) return;
			}
			Editor.SelText = fragment;
		}
	}
}

/**
 * Show info when plugin is installed
 *
 * @return void
 */
function OnInstalled() {
  alert("Paste HTML 1.1 by Peter Klein installed sucessfully!");
}

Script.ConnectSignal("installed", "OnInstalled");

var bmp = new TBitmap, act;
LoadFileToBitmap(Script.Path + "paste_icon.png", bmp);
act = Script.RegisterDocumentAction("", "Paste HTML Fragment", "", "PasteHTML");
Actions.SetIcon(act, bmp);
delete bmp;
