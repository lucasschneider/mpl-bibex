//var innerFrame = document.getElementsByTagName("iframe"),
//  innerDoc;

//if (innerFrame && innerFrame.length > 0) {
//  innerFrame = innerFrame[0];
//  innerDoc = innerFrame.contentDocument;
console.log("BIBEX: "+window.location.toString())
  if (/bibliovation\.com\/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location.toString())) {
    /*** Control-space to save patron record ***/
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 32 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        var updateAndSave = document.getElementById('updateAndSave'),
          saveButton = document.getElementsByClassName('action'); // Wrapping elt.
        if (updateAndSave) {
          updateAndSave.click();
        } else if (saveButton.length > 0) {
          saveButton = saveButton[0].children[0];
          if (saveButton) {
            saveButton.click();
          }
        }
      }
    }, false);

    /*** Escape to exit editing patron record ***/
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();
        var cancelButton = document.getElementsByClassName('cancel');
        if (cancelButton.length > 0) {
          cancelButton[0].click();
        }
      }
    }, false);
  }
//}
