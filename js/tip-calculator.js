/*******************************************************
@author Nora P.
@version 6/18/20
 * ASSN8 REQUIREMENTS:
 * SCC WEB150 SpQ2020
 ***********************************************/
//// GLOBAL VARIABLES ////
var tipForm = document.querySelector('form'); // the containing element, the submit input will act as the triggering event, making the form the event object that can be traversed

//// FUNCTIONS ////
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

/* EVENT FUNCTION: logic for tip calculation to be displayed on the same page */
function calcTip(event) {
  event.preventDefault();     // prevent default behavior of form 'submit'; keeps browser from leaving current page

  var form = event.target; // local reference to form Node

  var billInput = parseInt(form.querySelector('#currency').value); // get the value and parse to integer (or NaN) 
  // TODO: the #currency input is type=number - issue for currency?s
  var serviceInput = form.querySelector('#service').value; // references option selected by user

  var peopleInput = parseInt(form.querySelector('#people').value); // TODO: change input to type="number" ?



  //TODO: evaluate value and set tip percentage based on service
    // excellent 20%
    // good: 15 %
    // fair: 15 %; leave a note
    // needs improvement: 15% open yelp to restaurant page to leave a review?

  // TODO: validate form prior to calculation
    // bill can't be negative
    // select has to be chosen before calculation 
    // party of people has to be between 1-10 
        //  10 require 20% tip per person.

}