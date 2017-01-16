function openNav() {
    document.getElementById("navPush").style.marginRight = "80%";
    document.getElementById("mySidenav").style.width = "80%";
       
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navPush").style.marginRight= "0";
    document.getElementById("navigation").style.width = "100%";	
}

$(function() {     
    $("a").on("click", function() {
         var str = $(this).find('img');
         $("a").each( function(){
         if($(this).find('img').attr('src') != undefined){                           
              var image = $(this).find('img');
              var f = image.attr('src').substr(0, image.attr('src').lastIndexOf('.'));

              /**if this icon link has been clicked on but is not active
              then make it active**************************************/

              if ((image.attr('src') == str.attr('src')) && (str.parents("a").attr("class") != "active")){
                   image.attr('src', f + '1.png' );
              }

              /**if this icon link has not been clicked on but is active
              then make it not active**********************************/

              if((image.attr('src') != str.attr('src')) && (image.parents("a").attr("class") == "active")){
                   f = image.attr('src').substr(0, image.attr('src').lastIndexOf('1'));
                   image.attr('src', f + '.png' );
              }
         }                      
         });
         $("a").removeClass("active");                
	  $(this).addClass("active");
         if($(this).attr('id') == 'menu'){
		openNav();		   
	  }         
    });
});
