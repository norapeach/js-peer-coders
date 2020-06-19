/*******************************************************
@author Nora P.
@version 6/18/20
 * ASSN8 REQUIREMENTS:
 * SCC WEB150 SpQ2020
 ***********************************************/
//// GLOBAL VARIABLES ////
var tipForm = document.querySelector('form'); // the containing element, the submit input will act as the triggering event, making the form the event object that can be traversed

$(function () { // IFFE 

    $('.service').hide();
    $('.people').hide();

    $('#currency').on('input', function(){
      $('.service').fadeIn(800);
    });

    $('.service').on('input', function(){
      $('.people').fadeIn(800);
    });

    $('.people').on('input', function(){
      $('input:submit').fadeIn(800);
    });


});

//// FUNCTIONS ////
/* EVENT FUNCTION: logic for tip calculation to be displayed on the same page */
function calcTip(event) {
  event.preventDefault();     // prevent default behavior of form 'submit'; keeps browser from leaving current page
}