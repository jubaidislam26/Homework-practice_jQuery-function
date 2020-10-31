$(document).ready(function(){

        //alert
        $('#btn1').click(function(){
             alert("This is Fucntion no 1");
          });
        //hide
        $('#hide').click(function(){
             $('h2').hide()
          });
         //show
        $('#show').click(function(){
             $('h2').show()
          });
         //toggle
        $('#toggle').click(function(){
             $('h3').toggle(1500)
          });
        
         //dbltoggle
        $('#dbltoggle').dblclick(function(){
             $('h4').toggle()
          });
        //moseover
        $('#over').mouseover(function(){
             $('h5').toggle()
          });
        //fadeout
        $('#fadeout').click(function(){
            $('p').fadeOut(1000)
        })
        //fadeout
        $('#fadein').click(function(){
            $('p').fadeIn(1000)
        })
         //fadetoggle
        $('#fadetoggle').click(function(){
            $('p').fadeToggle(1000)
        })
        //slide
        $('.top').click(function(){
            $('.box').slideToggle(slow)
        })
        //keydown
        $( "#target" ).keydown(function() {
          alert( "Handler for .keydown() called." );
        });
        // Start animation
        $( "#go" ).click(function() {
          $( "#move" ).animate({ left: "+=100px" }, 2000 );
        });
        // Stop animation when button is clicked
        $( "#stop" ).click(function() {
          $( "#move" ).stop();
        });
        // Start animation in the opposite direction
        $( "#back" ).click(function() {
          $( "#move" ).animate({ left: "-=100px" }, 2000 );
        });
        //mousehover
        $( "li" )
        .odd()
        .hide()
        .end()
        .even()
        .hover(function() {
          $( this )
          .toggleClass( "active" )
          .next()
          .stop( true, true )
          .slideToggle();
        });
        //measure
        function showHeight( element, height ) {
            $( ".hei" ).text( "The height for the " + element + " is " + height + "px." );
      }
      $( "#getp" ).click(function() {
          showHeight( "paragraph", $( "p" ).height() );
      });
      $( "#getd" ).click(function() {
          showHeight( "document", $( document ).height() );
      });
      $( "#getw" ).click(function() {
          showHeight( "window", $( window ).height() );
      });
            });        
