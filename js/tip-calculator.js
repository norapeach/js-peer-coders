/*******************************************************
@author Nora P.
@version 6/18/20
 * SCC WEB150 SpQ2020 ASSN8 REQUIREMENTS:
 * Code a web page that demonstrates a minimum of 4 JQuery * interactions, widgets, or effects 
 * 
 * Incomplete development version of a unique tip
 * calculator utilizing
 * jQUery UI effects, themes and widgits
 * 
 *  TODO: complete commented pseudo code
 ***********************************************/
//// GLOBAL VARIABLES ////
var tipForm = document.querySelector('form'); // the containing element, the submit input will act as the triggering event, making the form the event object that can be traversed

//// FUNCTIONS ////
function getTipPercent(value, tipPercent, message) {
  /***
   * Parameters: 
   * value =the option value selected by the user
   * tipPercent = existing variable to be modified and passed back to calcTip function
   * message = variable to store content about the importance of tipping to pass back to page 
   ***/

  // switch: evaluate user selection and modify the tipPercent and message assignments accordingly - then return to tipCalc()
  switch (value) {
    case "ex":
      tipPercent = 0.25;
      message = "Something positive about appreciating good service."
      break;
    case "good":
      tipPercent = 0.20;
      message = "Info about origin of 15% as a tip and why more is encouraged"
      break;
    case "fair":
      // default tipPercent unchanged
      message = "Even fair service deserves a living wage";
      break;
    case "bad":
      // default tipPercent unchanged
      message = "Prompt that service should still be acknowledged. Something about leaving a yelp review - delay, page will be embedded?";
      break;
    // no default necessary  
  } // end switch 
} // end function getTipPercent

function isLargeParty(value, tipPercent, message) {
   /***
   * Parameters: 
   * value = the number of people entered by the user
   * tipPercent = existing variable to be modified and passed back to calcTip function
   * message = variable to add content about larger group size dynamically before calculation (TODO)
   * Return: a boolean if a larger party
   ***/
  var isLarge = true; 
  if (value > 10 && value < 20) {
    tipPercent = 0.25;
    message += "append content about importance of tipping with larger groups";
    return isLarge;
  } else if (value >= 20) {
    tipPercent = 0.30;
    message += "append content - larger groups, event planning. Resources required deserve additional compensation.";
    return isLarge
  }
  return isLarge = false;  // no default or else - allows for values less than 10 to be determined by getTipPercent
 
} // end function

$(function () { // IFFE 
    $('.service').hide();
    $('.people').hide();
    // TODO: add query for asside to hide then show once calculation is complete? or build dynamically?

    $('#currency').on('input', function(){
      $('.service').fadeIn(800);
    });

    $('.service').on('input', function(){
      $('.people').fadeIn(800);
    });

    $('.people').on('input', function(){
      $('input:submit').fadeIn(800);
    });

    tipForm.addEventListener("submit", calcTip, false); /* Attaches Event listener to the Form  for the click on the submit button
    boolean relates to event propagation: false --> bubbling: inner most element's event is handled first
    */
}); // END IFFE ? Q: do the functions go inside this?

/* EVENT FUNCTION: logic for tip calculation to be displayed on the same page */
function calcTip(event) {
  event.preventDefault();     // prevent default behavior of form 'submit'; keeps browser from leaving current page

  var tipPercent = 0.15 
  /* Default 15% tip is passed regardless of user input --> this is the point. Depending on <option value='x'> return default may change */

  var message = ""; 
  /* default empty string; will store info about tipping to dispay */

  // ACCESS DOM TREE via EVENT OBJECT // 
  var form = event.target; // local reference to form Node

  var billInput = form.querySelector('#currency').value; // removed parseInt - HTML has input validation constraint for type="number"

  var serviceInput = form.querySelector('#service').value; // references option selected by user

  getTipPercent(serviceInput, tipPercent, message); // function below - validates selection options and modifies tipPercent / message assignments

  var peopleInput = form.querySelector('#people').value; // Q: change input to type="number" don't have to parseInt since input is now number? 

  var isLarge = isLargeParty(peopleInput, tipPercent, message); // modifies parameter values before returning boolean TODO: use in display <aside>

  var totalTip = billInput * tipPercent; // calculate total tip (cached to append to DOM Tree)

  var ppTipAmount = totalTip / peopleInput; // calc per person Tip amount - total tip (cached to append to DOM Tree)

  // display total with effect
} // end function calcTip

