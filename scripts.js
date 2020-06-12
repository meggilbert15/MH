

gsap.to('.MH', {
    scale: 2.2,
    opacity: 1,
    duration: 1.3,
    delay: .2,
  });

  
lightGallery(document.getElementById('lightgallery'), {
  
  mode: 'lg-zoom-out',
  speed: 200,
  download: false ,
  
  
});

$("#contact").validate({
  rules: {
    website: {
      required: false,
      url: false
    }
  },
  submitHandler: function(form) {
    form.submit();
  }
 });

 $("#contact").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
});
