{

  DEBUG_SIT307_SIT720 = true;
  DEBUG_SIT307_SIT720_PREFIX = "[sit307-720]: "


  $( document ).ready(function() {
    DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "loading sit307-720.js");

    // declare new keywords 'map' (2-D array)
    var customSectionHeadingStyleMap = [];
    customSectionHeadingStyleMap.push(['kwTag','sebe_Tag']);
    customSectionHeadingStyleMap.push(['kwColorfulBox','sebe_colorfulbox']);
    addNewKeywords(customSectionHeadingStyleMap);
    setTagColor();
    setColorfulBoxColor();

  });


  function addNewKeywords(customSectionHeadingStyleMap) {
    // new keywords are defined as h3
    $("h3").each(function() {
        var sectionType = $.trim($(this).text().replace(new RegExp("&nbsp;", 'g'), "")).toLowerCase();
        DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "--> customWrapInSection runs for " + sectionType)
        customWrapInSection($(this), sectionType, customSectionHeadingStyleMap);
    });
  }

  function customWrapInSection(sectionHeadingElement, sectionType, customSectionHeadingStyleMap) {
      var sectionStyleValue = null;
      for (var i = 0; i < customSectionHeadingStyleMap.length; i++) {
          if (customSectionHeadingStyleMap[i][0].toLowerCase() === sectionType.toLowerCase()) { // keywords are case insensitive
              sectionStyleValue = customSectionHeadingStyleMap[i][1];
              break;
          }
      }
      if (sectionStyleValue != null) {
          // if heading 3 'sectionType' matches 'customSectionHeadingStyleMap[i][0]' list, 
          // wrap in using the class 'customSectionHeadingStyleMap[i][1]' until next HR,
          // then remove the heading3 and the HR
          keyWord = sectionHeadingElement.text();
          $(sectionHeadingElement).html(keyWord);
          $(sectionHeadingElement).nextUntil(endSectionFilter(keyWord)).addBack().wrapAll('<div class="' + sectionStyleValue + '" />');
          // NOTE: The order needs to be as follows here: remove the endHideSection first before the current one, otherwise if you remove
          // the current one first, the endHideSection one will not work because the find is based on the current one existing
          $(sectionHeadingElement).parent().next(endSectionFilter(keyWord)).remove();
          $(sectionHeadingElement).remove();
      }
  }


  // See: https://stackoverflow.com/questions/38972687/how-to-pass-an-additional-argument-to-jquery-filter-function
  // Uses a closure to pass a parameter to an anonymous filter/handler function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
  function endSectionFilter(keyWord) {
    return function (idx, element) {
      // end section is defined by the keyword 'endSection' (case sensitive) formatted as a h3
      if($(this).is("h3")) {
        var regex = new RegExp("^end" + keyWord + "$"); // expression here
        returnVal = regex.test($(this).text());
        return returnVal; 
      } else {
        return false;
      }
    }
  }


function setTagColor() {
  DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "..................");
  DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "setTagColor(): START");
  var colorTheme = "";
  // append CSS link and then add iframe with params
  $('.sebe_Tag').each(function() {
      colorTheme = $(this).find("h4:first").text();
      colorTheme = $.trim(colorTheme).toLowerCase();
      if(typeof colorTheme === "undefined" || colorTheme === null || $.trim(colorTheme) === "") {
        DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "colorTheme not found, defaulting to royalblue...");
        colorTheme = "royalblue";
      }
      // if(colorTheme !== "black" && colorTheme !== "blue" && colorTheme !== "blueviolet" && colorTheme !== "chocolate" && colorTheme !== "cornflowerblue" && colorTheme !== "crimson" && colorTheme !== "darkcyan" && colorTheme !== "darkgoldenrod" && colorTheme !== "darkmagenta" && colorTheme !== "darkorchid" && colorTheme !== "darkviolet" && colorTheme !== "dodgerblue" && colorTheme !== "firebrick" && colorTheme !== "forestgreen" && colorTheme !== "green" && colorTheme !== "indianred" && colorTheme !== "lightslategray" && colorTheme !== "lightslategrey" && colorTheme !== "mediumorchid" && colorTheme !== "mediumpurple" && colorTheme !== "mediumseagreen" && colorTheme !== "mediumslateblue" && colorTheme !== "mediumvioletred" && colorTheme !== "olivedrab" && colorTheme !== "orangered" && colorTheme !== "palevioletred" && colorTheme !== "peru" && colorTheme !== "purple" && colorTheme !== "red" && colorTheme !== "rosybrown" && colorTheme !== "royalblue" && colorTheme !== "saddlebrown" && colorTheme !== "seagreen" && colorTheme !== "sienna" && colorTheme !== "slategray" && colorTheme !== "slategrey" && colorTheme !== "steelblue" && colorTheme !== "teal" && colorTheme !== "tomato") {
      if(colorTheme !== "black" && colorTheme !== "blue" && colorTheme !== "brown" && colorTheme !== "green" && colorTheme !== "orange" && colorTheme !== "purple"  && colorTheme !== "red"  && colorTheme !== "yellow") {
        DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "colorTheme not valid, defaulting to royalblue...");
        colorTheme = "royalblue";
      }
      $(this).find("h4:first").remove(); 
      $(this).addClass(colorTheme);
  });

  DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "colorTheme set: [" + colorTheme + "]");
 }


 function setColorfulBoxColor() {
  DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "..................");
  DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "setColorfulBoxColor(): START");
  var colorTheme = "";
  // append CSS link and then add iframe with params
  $('.sebe_colorfulbox').each(function() {
      colorTheme = $(this).find("h4:first").text();
      colorTheme = $.trim(colorTheme).toLowerCase();
      if(typeof colorTheme === "undefined" || colorTheme === null || $.trim(colorTheme) === "") {
        DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "colorTheme not found, defaulting to lightblue...");
        colorTheme = "lightblue";
      }
      // if(colorTheme !== "aliceblue" && colorTheme !== "antiquewhite" && colorTheme !== "beige" && colorTheme !== "bisque" && colorTheme !== "blanchedalmond" && colorTheme !== "cornsilk" && colorTheme !== "gainsboro" && colorTheme !== "gold" && colorTheme !== "khaki" && colorTheme !== "lavender" && colorTheme !== "lavenderblush" && colorTheme !== "lemonchiffon" && colorTheme !== "lightblue" && colorTheme !== "linen" && colorTheme !== "mistyrose" && colorTheme !== "moccasin" && colorTheme !== "navajowhite" && colorTheme !== "oldlace" && colorTheme !== "palegoldenrod" && colorTheme !== "paleturquoise" && colorTheme !== "papayawhip" && colorTheme !== "peachpuff" && colorTheme !== "pink" && colorTheme !== "plum" && colorTheme !== "powderblue" && colorTheme !== "thistle" && colorTheme !== "wheat" && colorTheme !== "whitesmoke") {
      if(colorTheme !== "antiquewhite" && colorTheme !== "beige" && colorTheme !== "gainsboro" && colorTheme !== "lavender" && colorTheme !== "lavenderblush" && colorTheme !== "lightblue" && colorTheme !== "linen" && colorTheme !== "mistyrose" && colorTheme !== "moccasin" && colorTheme !== "palegoldenrod" && colorTheme !== "paleturquoise" && colorTheme !== "papayawhip" && colorTheme !== "peachpuff" && colorTheme !== "pink" && colorTheme !== "plum" && colorTheme !== "powderblue" && colorTheme !== "thistle" && colorTheme !== "wheat") {
        DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "colorTheme not valid, defaulting to lightblue...");
        colorTheme = "lightblue";
      }
      $(this).find("h4:first").remove(); 
      $(this).addClass(colorTheme);
  });

  DEBUG_SIT307_SIT720 && console.log(DEBUG_SIT307_SIT720_PREFIX + "colorTheme set: [" + colorTheme + "]");
 }


}




















