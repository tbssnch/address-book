//Business Logic
function Contact(first, last, street, city, state, zip) {
  this.firstName = first;
  this.lastName = last;
  this.streetName = street;
  this.cityName = city;
  this.stateName = state;
  this.zipCode = zip;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();
    var inputtedStreet = $("#new-street-name").val();
    var inputtedCity = $("#new-city-name").val();
    var inputtedState = $("#new-state-name").val();
    var inputtedZip = $("#new-zip-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState, inputtedZip);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street-name").text(newContact.streetName);
      $(".city-name").text(newContact.cityName);
      $(".state-name").text(newContact.stateName);
      $(".zip-name").text(newContact.zipCode);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street-name").val("");
    $("input#new-city-name").val("");
    $("input#new-state-name").val("");
    $("input#new-zip-name").val("");

  });//Submit end
});//Ready end
