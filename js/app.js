
/* intended to toggle between displaying the images and displaying the information in the XMP tags metadata. */
function loadImageFiles ()
{
    console.log("tbd");
}

/* this was supposed to use the EXIF library to show the XMP meta data stored in the file, 
But I had trouble getting it to work */
function showXMP ()
{
var ilist = document.images;

for(var i = 0; i < ilist.length; i++) {
    alert(ilist[i].srcset);	
        // found the banner
}	
}



window.onload = function() {
    var btn = document.getElementById("showImages");
    if (btn != null)
    	btn.onclick = loadImageFiles;
    var btn1 = document.getElementById("showXMP");
    if (btn1 != null)
    btn1.onclick = showXMP;
    
}
