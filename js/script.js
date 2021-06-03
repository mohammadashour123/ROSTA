$(function () {
   
    $(window).scroll(function () {
        
        if($(window).scrollTop() >= 400){
        
            
            if($('.scroll').is(':hidden'))
                {
                    
                      $('.scroll').fadeIn(200) ; 
                }
            }
        
        
               else{
                   $('.scroll').fadeOut(200) ;  
                   
               };
        
              $('.scroll').click(function (event) {
                 event.preventDefault(); 
                  
                  $('html , body').animate({
                     scrollTop : 0 
                  } , 500);
                  event.stop() ; 
         });
   
    });
    
   $('.menu').click(function (){
       
       $('.navbar').animate({
          
           right : 0 
           
       } , 555);
       
       
   });
     $('.exit').click(function (){
       
       $('.navbar').animate({
          
           right : '-240' 
           
       } , 555);
       
       
   });  
    
    
    
    
    
    
    
    
    
    
    
    
});