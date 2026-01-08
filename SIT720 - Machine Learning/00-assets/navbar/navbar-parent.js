DEBUG_NAVBAR_PARENT_JS=true;
LOAD_SCRIPT_NAVBAR_PARENT_PATH="/content/enforced/384049-SEBE_LST_01/z-sebe-lst-learning-design/navbar/js/";
LOAD_SCRIPT_NAVBAR_PARENT_NAME="navbar-parent-v1.0.9.js";
LOAD_SCRIPT_NAVBAR = LOAD_SCRIPT_NAVBAR_PARENT_PATH + LOAD_SCRIPT_NAVBAR_PARENT_NAME;
NAVBAR_PARENT_POINTER_START_TIME = performance.now();

DEBUG_NAVBAR_PARENT_JS && console.log("About to load [" + LOAD_SCRIPT_NAVBAR_PARENT_PATH + LOAD_SCRIPT_NAVBAR_PARENT_NAME + "]...");

/*

// getScript is asynchronous
$.getScript(LOAD_SCRIPT_NAVBAR_PARENT_PATH + LOAD_SCRIPT_NAVBAR_PARENT_NAME, 
  function() { }).done(function( script, textStatus ) { DEBUG_NAVBAR_PARENT_POINTER_JS && console.log("Load status for " + LOAD_SCRIPT_NAVBAR_PARENT_NAME + ": [" + textStatus + "]. Script loaded in: [" + (performance.now() - NAVBAR_PARENT_POINTER_START_TIME) + "] ms") });
*/


// --------------------------------------------------------------------------
// START: LOAD script Asynchronously
// ajax can be sync or async so more flexible
$.ajax({
    async: true,
    url: LOAD_SCRIPT_NAVBAR,
    dataType: "script"
}).done(
  function( data, textStatus, jqXHR ) {
    DEBUG_NAVBAR_PARENT_JS && console.log("Asynchronous AJAX Load status for " + LOAD_SCRIPT_NAVBAR_PARENT_NAME + ": [" + textStatus + "]. Script loaded in: " + (performance.now() - NAVBAR_PARENT_POINTER_START_TIME) + " ms"); 
  }
).fail(
  function( jqXHR, textStatus, errorThrown ) {
    DEBUG_NAVBAR_PARENT_JS && console.log("AJAX - An error occurred - Error status for " + LOAD_SCRIPT_NAVBAR_PARENT_NAME + ": [" + textStatus + "]. Error Message: [" + errorThrown + "]. Script loaded in: " + (performance.now() - NAVBAR_PARENT_POINTER_START_TIME) + " ms");
  }
);
// END: LOAD script Asynchronously
// --------------------------------------------------------------------------

