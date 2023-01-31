$(function(){
    //-----------------------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03'],
        responsiveWidth:768,
        afterLoad: function(origin, destination, direction){
            
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
            destination.index==0 ? $('.right').fadeIn() : $('.right').fadeOut();
           
            
        }
        
    });


    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on');
        $('.all').fadeToggle();
    });
    
    $('.all a').on('click', function(){
        $('.all').fadeToggle();
        $('.cover_btn').removeClass('on');
    })


    $('.p_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:2000,
        fade:true,
        slidesToShow:1,
    });
    


    
    //-----------------------------------------------------------------
    })