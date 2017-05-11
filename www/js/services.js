angular.module('starter.services', [])

.factory('Services', function() {
  // Might use a resource here that returns a JSON array

  // Servie page content
  var services = [{
    id: 0,
    text: "Complete the online registration process by clicking 'get started' above, then enter your personal details",
    image: 'img/service-step-1.png'
  }, {
    id: 1,
    text: 'Upon completion of your registration you will be asked to sign and send to us by either fax or email or SMS  the completed search and authority form(s) that will contain your registrtion details.',
    image: 'img/service-step-2.png'
  }, {
    id: 2,
    text: 'You will be guided to our payment gateway to pay for the consolidation of your superannuation accounts. This fee is $250.00.',
    image: 'img/service-step-3.png'
  }, {
    id: 3,
    text: 'We will lodge your search request with our team. The results can take up to 28 days to reach our office.',
    image: 'img/service-step-4.png'
  }, {
    id: 4,
    text: 'You will receive an email and SMS to notify you that your results are ready to view online under your Find My Super profile.',
    image: 'img/service-step-5.png'
  }, {
    id: 5,
    text: 'A consolidation kit will be prepared and uploaded for you to print and sign then send directly to your superannution fund to enable them to contact all the funds that are holding super on your behalf.',
    image: 'img/service-step-6.png'
  }];

  return {
    all: function() {
      return services;
    }
  };
});
