//Event Examples

function copyStringToClipboard(myInput) {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById(myInput).value;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

document.addEventListener("DOMContentLoaded", function (event) {

  //By default the JavaScript tab is open as its the most commonly used tab
  document.getElementById('JavaScript').style.display = "block";

  //************AJS************\\
  //Event Examples
  var ajsPage = document.getElementById('pageCopy');
  var ajsIdentify = document.getElementById('identifyCopy');
  var ajsTrack = document.getElementById('trackCopy');
  var ajsGroup = document.getElementById('groupCopy');
  var ajsAlias = document.getElementById('aliasCopy');

  ajsPage.addEventListener('click', () => copyStringToClipboard("pageEvent"), false);
  ajsIdentify.addEventListener('click', () => copyStringToClipboard("identifyEvent"), false);
  ajsTrack.addEventListener('click', () => copyStringToClipboard("trackEvent"), false);
  ajsGroup.addEventListener('click', () => copyStringToClipboard("groupEvent"), false);
  ajsAlias.addEventListener('click', () => copyStringToClipboard("aliasEvent"), false);

  //Payload Examples
  var ajsPayloadTrack = document.getElementById('trackCopyPayload');
  var ajsPayloadIdentify = document.getElementById('identifyCopyPayload');
  var ajsPayloadPage = document.getElementById('pageCopyPayload');
  var ajsPayloadGroup = document.getElementById('groupCopyPayload');
  var ajsPayloadAlias = document.getElementById('aliasCopyPayload');

  ajsPayloadTrack.addEventListener('click', () => copyStringToClipboard("trackPayload"), false);
  ajsPayloadIdentify.addEventListener('click', () => copyStringToClipboard("identifyPayload"), false);
  ajsPayloadPage.addEventListener('click', () => copyStringToClipboard("pagePayload"), false);
  ajsPayloadGroup.addEventListener('click', () => copyStringToClipboard("groupPayload"), false);
  ajsPayloadAlias.addEventListener('click', () => copyStringToClipboard("aliasPayload"), false);

  //************Android************\\
  //Event Examples
  var androidScreen = document.getElementById('androidScreenCopy');
  var androidIdentify = document.getElementById('androidIdentifyCopy');
  var androidTrack = document.getElementById('androidTrackCopy');
  var androidGroup = document.getElementById('androidGroupCopy');
  var androidAlias = document.getElementById('androidAliasCopy');

  androidScreen.addEventListener('click', () => copyStringToClipboard("androidScreenEvent"), false);
  androidIdentify.addEventListener('click', () => copyStringToClipboard("androidIdentifyEvent"), false);
  androidTrack.addEventListener('click', () => copyStringToClipboard("androidTrackEvent"), false);
  androidGroup.addEventListener('click', () => copyStringToClipboard("androidGroupEvent"), false);
  androidAlias.addEventListener('click', () => copyStringToClipboard("androidAliasEvent"), false);

  //Payload Examples
  var androidPayloadScreen = document.getElementById('androidScreenCopyPayload');
  var androidPayloadIdentify = document.getElementById('androidIdentifyCopyPayload');
  var androidPayloadTrack = document.getElementById('androidTrackCopyPayload');

  androidPayloadScreen.addEventListener('click', () => copyStringToClipboard("androidScreenPayload"), false);
  androidPayloadIdentify.addEventListener('click', () => copyStringToClipboard("androidIdentifyPayload"), false);
  androidPayloadTrack.addEventListener('click', () => copyStringToClipboard("androidTrackPayload"), false);


    //************iOS************\\
  //Event Examples
  var iosScreen = document.getElementById('iosScreenCopy');
  var iosIdentify = document.getElementById('iosIdentifyCopy');
  var iosTrack = document.getElementById('iosTrackCopy');
  var iosGroup = document.getElementById('iosGroupCopy');
  var iosAlias = document.getElementById('iosAliasCopy');

  iosScreen.addEventListener('click', () => copyStringToClipboard("iosScreenEvent"), false);
  iosIdentify.addEventListener('click', () => copyStringToClipboard("iosIdentifyEvent"), false);
  iosTrack.addEventListener('click', () => copyStringToClipboard("iosTrackEvent"), false);
  iosGroup.addEventListener('click', () => copyStringToClipboard("iosGroupEvent"), false);
  iosAlias.addEventListener('click', () => copyStringToClipboard("iosAliasEvent"), false);
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("javaScriptButton").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('JavaScript').style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("mobileButton").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('Mobile').style.display = "block";
    document.getElementById("mobileButton").click();
  }
});



document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("usefulLinks").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('links').style.display = "block";

    document.getElementById("usefulLinks").click();
  }
});

//Search box logic
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("searchbar").addEventListener("keyup", search_events);

  function search_events() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('events');

    for (i = 0; i < x.length; i++) {
      if (!x[i].innerText.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "block";
      }
    }
  }
});

//Dropdown logic
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("switch-field").addEventListener("change", radioChanged);

  function radioChanged(){
    let selectedValue = document.querySelector('input[name="switch-one"]:checked').value;
    if(selectedValue === 'android')
    {
        document.getElementById('ios-display').style.display='none';
        document.getElementById('android-display').style.display='initial';
    }
    else if(selectedValue === 'ios')
    {
        document.getElementById('android-display').style.display='none';
        document.getElementById('ios-display').style.display='initial';
    }
  }
});