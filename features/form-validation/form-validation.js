(function() {

  'use strict'

  Array.prototype.slice.call($(".needs-validation")).forEach(function (form) {
    form.submit(function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.addClass('was-validated');
    }, false)
  });

})()