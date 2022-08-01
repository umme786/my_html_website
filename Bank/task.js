// load start
    var myVar;
    
    function myFunction() {
    myVar = setTimeout(showPage, 1000);
    }
    
    function showPage() {
    document.getElementById("loader-web").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    }
// load end

// text animation start
        var scroll = window.requestAnimationFrame ||
        function(callback){ window.setTimeout(callback, 5000/120)};
        var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

        function loop() {

        Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
        element.classList.add('is-visible');
        } else {
        element.classList.remove('is-visible');
        }
        });

        scroll(loop);
        }
        loop();
        function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
        (rect.top <= 0
        && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
        }
// text animation end

// tag slider start
        $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
        });
// tag slider end

// nav start
// nav res
        function onNavToggle() {
            const body = document.querySelector('body');
            body.classList.toggle('menu-open');
        }

 // nav scroll
 let excetued = false;
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('nav').addClass('fixed');
                document.getElementById("myImg").src="images/zolve_logo-svg.png";
            } else {
                $('nav').removeClass('fixed');
                document.getElementById("myImg").src="images/zolve_logo_w.svg";
            }
            // reward section animation should work on scroll
            const reward = document.querySelector('.all-reward')
            const offsetTopReward =  reward.offsetTop;
            if(isElementInViewport(reward) && !excetued && window.scrollY > offsetTopReward) {
                animateValue(document.getElementById('value'));
                excetued = true;
            }
        });

    // nav sub menu plus minus
        function myFunctionsub(plus) {
            plus.classList.toggle("fa-minus");
        }
// nav end

// reward start
// reward 1
          function animateValue(obj, start = 100, end = null, duration = 3000) {
            if (obj) {
                var textStarting = obj.innerHTML;
                end = end || parseInt(textStarting.replace(/\D/g, ""));
                var range = end - start;
                var minTimer = 1;
                var stepTime = Math.abs(Math.floor(duration / range));
                stepTime = Math.max(stepTime, minTimer);
                var startTime = new Date().getTime();
                var endTime = startTime + duration;
                var timer;
                function run() {
                    var now = new Date().getTime();
                    var remaining = Math.max((endTime - now) / duration, 0);
                    var value = Math.round(end - (remaining * range));
                    obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
                    if (value == end) {
                        clearInterval(timer);
                    }
                }
                timer = setInterval(run, stepTime);
                run();
            }
        }
        //  animateValue(document.getElementById('value'));

// reward 2
            function animateValue(obj, start = 100, end = null, duration = 3000) {
        if (obj) {
            var textStarting = obj.innerHTML;
            end = end || parseInt(textStarting.replace(/\D/g, ""));
            var range = end - start;
            var minTimer = 1;
            var stepTime = Math.abs(Math.floor(duration / range));
            stepTime = Math.max(stepTime, minTimer);
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer;
            function run() {
                var now = new Date().getTime();
                var remaining = Math.max((endTime - now) / duration, 0);
                var value = Math.round(end - (remaining * range));
                obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
                if (value == end) {
                    clearInterval(timer);
                }
            }
            timer = setInterval(run, stepTime);
            run();
        }
        }
        animateValue(document.getElementById('value2'));
// reward end

// Faqs text start
        var acc = document.getElementsByClassName("accordion");
        var panel = document.getElementsByClassName('panel');

        for (var i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                var setClasses = !this.classList.contains('active');
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
                
                if (setClasses) {
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        }

        function setClass(els, className, fnName) {
            for (var i = 0; i < els.length; i++) {
                els[i].classList[fnName](className);
            }
        }
// javascript Faqs text end
