// nav
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

// day night
    function darkmode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }      

// filter
    $(document).ready(function(){
        $(".filter-act").click(function(){
        $(".filter-active").toggle();
        });
    });

     //  bottom image bg
     $('.night').on('click',function(){
        $(".greycolor").toggleClass('ButtonbgClicked');
        });

       // nav
        $('.night').on('click',function(){
        $(".navbar").toggleClass('ButtonClicked');
        });

        // image
        $('.night').on('click',function(){
        $("#imagejs1").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs2").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs3").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs4").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs5").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs6").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs7").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs8").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs9").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs10").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs11").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs12").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs13").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs14").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs15").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs16").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs17").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs18").toggleClass('imageClicked');
        });

        $('.night').on('click',function(){
        $("#imagejs19").toggleClass('imageClicked');
        });
        
        $('.night').on('click',function(){
        $("#imagejs20").toggleClass('imageClicked');
        });

        // slider 1
        $(document).on('ready', function () {
            $(".center").slick({
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 5,
                slidesToScroll: 3
            });
        });

        // footer
        $('.night').on('click',function(){
            $(".faq").toggleClass('faqClicked');
        });
        // image coins
        $('.night').on('click',function(){
            $(".kill").toggleClass('killClicked');
        });
        // filter hover
        $('.night').on('click',function(){
            $(".fill").toggleClass('fillClicked');
        });
        
        