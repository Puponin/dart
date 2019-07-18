$(function () {
    $('.play_video').on('click', function () {
        $('.video video').attr('controls', '');
        $('.button_play').attr('id', 'delete_button');
        $("video")[0].play();
    });

    $('.additional-service-info__headline').on('click', function () {
        $(this).next().slideToggle(500);
        $('.additional-service-info__content').not($(this).next()).slideUp(500);
    });

    $('.tab-item').not(':nth-child(2)').hide();
    $('.tab-box').on('click', function () {
        $('.tab-box').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn(500);
    });
    $('.comments button').on('click', function () {
        $('.feedback').fadeOut(150, function () {
            $(this).fadeIn(true);
        });
    });
    /* $('.arrow-bottom').on('click', function(){
        $('.feedback').fadeOut(500);
    }) */
});

window.onload = function () {
    var menuStyle = getComputedStyle(navbar);
    btn.onclick = function () {
        if (menuStyle.display == "none") {
            navbar.classList.add("active");
            btn.classList.add("active");
        } else {
            navbar.classList.remove("active");
            btn.classList.remove("active");
        }
    };
    class slider {
        constructor(settings) {
            this.item = settings;
            this.btn_prev = this.item.querySelector('.arrow-top');
            this.btn_next = this.item.querySelector('.arrow-bottom');
            this.customer = this.item.querySelectorAll('.feedback .customer');
            this.i = 0;

            this.btn_prev.onclick = () => {
                this.customer[this.i].classList.remove('active');
                this.i--;
                if (this.i < 0) {
                    this.i = this.customer.length - 1;
                }
                this.customer[this.i].classList.add('active');
            };

            this.btn_next.onclick = () => {
                this.customer[this.i].classList.remove('active');
                this.i++;
                if (this.i > this.customer.length - 1) {
                    this.i = 0;
                }
                this.customer[this.i].classList.add('active');
            };
        }
    }
    var sliders = document.querySelectorAll('.carousel');
    for (let i of sliders) {
        i = new slider(i);
    }
};