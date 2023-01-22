export const openNewOrExistingTab = (anchorId, URL) => {
  // JavaScript
  var a = document.getElementById(anchorId),
    w;
  a.onclick = function () {
    if (!w || w.closed) {
      w = window.open(URL, "_blank", "menubar = 0, scrollbars = 0");
    } else {
      console.log("window is already opened");
    }
    w.focus();
  };
};
