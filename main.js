console.log("hello")


var pw1=$('.pw1').val()
var pw2=$('.pw2').val()

function invalidatePassword() {

if (pw1)!==(pw2)
  $('field 2').text("Incorrect password")
}
//
// $('.send_form').click(function(){
//   event.preventDefault()
//
//
//
// })
// $(".box_1").click(function(){
//   event.preventDefault(); //default when click on link it goes to the top of the page but here we have a # next to the link so it's an anchor to this point on the page so we want to prevent the default -so we need this code to prevent the default from happening . note: this can only work on links and buttons
//   $("#show-this-on-click").slideDown()
//   $(".back-to-top").show()
// })
// $(".back-to-top a").click(function(){
//   event.preventDefault();
//   $("#show-this-on-click").slideUp()
//   $(".back-to-top").hide()
// })

      //
      // $(".background_corp").click(function (){
      //   event.preventDefault()
      //      $('.background_corp').animate({ //not sure this line
      //          scrollTop: $("portfolio.html/#corporate").offset().top
      //      }, 2000);
      //  });
      //  $('a[href*="portfolio.html/#corporate#"]').on('click', function(e){
      //          e.preventDefault();
      //
      //  if (window.location.hash) {
      //         var hash = window.location.hash;
      //         $('html, body').animate({
      //             scrollTop :  $('#corporate').offset().top
      //         }, 500);
      //     };
      // });
//
// $('.background_corp').click(function(){
//   // event.preventDefault()
//   // $('body,html')scrollTo('porfolio.html/#corporate', 800, {easing:'elasout'})
//   console.log('test')
// })
