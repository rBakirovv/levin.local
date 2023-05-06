function is_mobile() {
    var mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 767)
    if (mobile) {
        return true
    } else {
        return false
    }
}

function hoverVideo(e) {
    console.log(e)
    $(this).find('.media-card__video').get(0).play();
}

function hideVideo(e) {
    $(this).find('.media-card__video').get(0).pause();
}
$(document).ready(() => {

    var footerMob = $('.index-footer--mob');
    var footerWidget = $('.widget_o');

    if (footerMob.length > 0 && is_mobile()) {

        footerMob.slideUp();
        footerMob.removeClass('visible')

        $(window).scroll(function (e) {
            if ($(window).scrollTop() >= window.innerHeight) {
                footerMob.slideDown();
                footerWidget.addClass('visible')
                footerMob.addClass('visible')

            } else {
                footerMob.slideUp();
                footerWidget.removeClass('visible')
                footerMob.removeClass('visible')

            }
        });

    }

    $(".media-card-video-hover").hover(hoverVideo, hideVideo);


    if (is_mobile()) {
        var mySwiper = new Swiper('.equipment-swiper.swiper-container', {
            loop: false,
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next-n',
                prevEl: '.swiper-button-prev-n',
            },
            breakpoints: {
                993: {
                    slidesPerView: 'auto'
                }
            }
        })
    }

})


var iphone = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 767)
if (iphone) {
    $('.footer-block__col').each(function () {
        $(this).find('.footer-block__name').click(function (e) {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
                $('.footer-block__col').removeClass('active');

            } else {
                $('.footer-block__col').removeClass('active');

                $(this).parent().addClass('active');


            }
            return false

        });
    });
}



function Scroll_block() {
    if ($(".sidebar-r").length > 0) {
        var scroll_top = $(document).scrollTop();
        $(".sidebar-r__list-item a").each(function () {
            var hash = $(this).attr("href");
            var target = $(hash);
            console.log()
            if (target.position().top <= scroll_top) {
                $(".sidebar-r__list-item a").removeClass("active");
                $(this).addClass("active");
            } else {

            }
        });
    }

}

$(document).on("scroll", Scroll_block);
$(document).ready(() => {
    $(".banner__item").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс

        $('body,html').animate({
            scrollTop: top
        }, 0);

    });

    var mySwiper = new Swiper('.slide-certificates.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: "#certificates-slider-prev",
            nextEl: "#certificates-slider-next"
        },

        on: {
            init: function () {
                if (this.slides.length <= 1) {
                    $('#certificates-slider-prev').hide();
                    $('#certificates-slider-next').hide();
                } else {
                    $('#certificates-slider-prev').show();
                    $('#certificates-slider-next').show();
                }
            },
        },
        breakpoints: {
            993: {
                slidesPerView: 'auto',
                centeredSlides: true
            }
        }
    })
    $(".sidebar-r__list-item").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс

        $('body,html').animate({
            scrollTop: top
        }, 0);

    });
    if (is_mobile()) {
        if ($('.banner__content').outerHeight() >= $('.banner').outerHeight()) {
            $('.banner').height('auto')
            $('.banner').addClass('banner-no-full')

        }
    }

    if (is_mobile()) {
        $('.tab-n:not(.open)').removeClass('active');

        $('.tab-n').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $('.tab-n').removeClass('active');
                $(this).addClass('active');
            }

            var hash = $(this).position().top;
            $('body,html').animate({
                scrollTop: hash
            }, 100);
            return false
        })
    } else {
        // $(".wp-block-lazyblock-tabs").each(function() {
        //     $(this).find('.tab-n').click(function () {})
        // });
        $('.tab-n').click(function () {
            $(this).parent().find('.tab-n').removeClass('active');
            $(this).addClass('active');
            return false
        })
     
    }
    $('#fullheight').css({
        'height': window.innerHeight
    })

    $(".price").each(function () {
        let priceWrap = $(this).find('.price-wrap').height();
        if ($(this).hasClass('price-open')) {
            $(this).find('.price-wrap').css({
                'maxHeight': priceWrap + 'px'
            })
        } else {
            $(this).find('.price-wrap').css({
                'maxHeight': '0'
            })

        }
        $(this).find('.price-header').click(function () {
            if ($(this).parent().hasClass('price-open')) {
                $(this).parent().find('.price-wrap').css({
                    'maxHeight': '0'
                });
            } else {
                $(this).parent().find('.price-wrap').css({
                    'maxHeight': priceWrap + 'px'
                })
            }
            $(this).parent().toggleClass('price-open')
        })
    });
    $('.accordeon').each(function () {
        $(this).addClass('load')
    })
    if ($('.doctor-slider').length > 0) {

        var doctorThumbs = new Swiper('.doctor-thumbs', {
            spaceBetween: 20,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            grabCursor: false,
            watchSlidesProgress: true,

            breakpoints: {
                991: {
                    spaceBetween: 15
                },
                // when window width is >= 640px
                1367: {
                    spaceBetween: 20,
                }
            },

        });

        var bannerTop = new Swiper('.doctor-slider', {
            loop: true,
            speed: 400,
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 24,
            grabCursor: false,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            watchOverflow: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            roundLengths: true,
            thumbs: {
                swiper: doctorThumbs
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.doctor-slider .section-button-next',
                prevEl: '.doctor-slider .section-button-prev',
            },


        });
    }
    if ($(".gallery-new").length > 0) {
        var galleryNewThumbs = new Swiper('.gallery-new-thumbs', {
            spaceBetween: 22,
            slidesPerView: 5,
            draggable: false,
            freeMode: true,
            watchSlidesVisibility: true,
            touchRatio: 0,
            grabCursor: false,
            watchSlidesProgress: true,
        });

        var galleryNew = new Swiper('.gallery-new', {
            loop: true,
            speed: 500,
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 24,
            grabCursor: false,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            watchOverflow: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            roundLengths: true,
            thumbs: {
                swiper: galleryNewThumbs
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.gallery-new .section-button-next',
                prevEl: '.gallery-new .section-button-prev',
            },


        });
    }
    if ($(".slider_screen").length > 0) {
        var galleryTop = new Swiper('.slider_screen', {
            spaceBetween: 0,
            lazy: true,
            loop: true,
            loopedSlides: 4,

            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next-slider',
                prevEl: '.swiper-button-prev-slider',
            }

        });
        var galleryThumbs = new Swiper('.swiper-container.slider_screen_top', {

            spaceBetween: 22,
            centeredSlides: false,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 4,


        });

        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }




    var mySwiper = new Swiper('.swiper-container.swiper-articles', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 27,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-n',
            prevEl: '.swiper-button-prev-n',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 16,

            },
            1750: {
                slidesPerView: 3,
            }
        }
    })
    var mySwiperDoctor = new Swiper('.swiper-container.swiper-doctor', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 26,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-n',
            prevEl: '.swiper-button-prev-n',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1800: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    })
    var mySwiperArticles = new Swiper('.swiper-container.swiper-articles', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 26,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-n',
            prevEl: '.swiper-button-prev-n',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
            1800: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    })
    var mySwiper = new Swiper('.swiper-container.list-block__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-w',
            prevEl: '.swiper-button-prev-w',
        }
    })

    var sliderQuote = new Swiper('.swiper-container.slider-quote', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-quote-next',
            prevEl: '.swiper-quote-prev',
        },
        breakpoints: {
            992: {
                pagination: {}
            }
        }
    })



})
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/js/jquery.justifiedGallery.min.js", function () {

    $('#mygallery .glightbox').addClass('jg-entry')
    if (is_mobile()) {
        if ($("#mygallery").length > 0) {
            $("#mygallery").justifiedGallery({
                lastRow: 'justify',
                rowHeight: 120,
                maxRowsCount: 3,
                margins: 0
            });
        }

    } else {
        if ($("#mygallery").length > 0) {
            $("#mygallery").justifiedGallery({
                lastRow: 'justify',
                rowHeight: 250,
                maxRowsCount: 2,
                margins: 0
            });
        }
    }
})

function lazyBg() {
    $('.lazyload-bg').each(function () {
        var lazy = $(this);
        var src = lazy.attr('data-bg');
        $('<img>').attr('src', src).on('load', function () {
            lazy.css('background-image', 'url("' + src + '")');
        });

    })

}
window.onload = function () {

    lazyBg()
    new GLightbox({
        selector: ".glightbox3",
        touchNavigation: !0,
        loopAtEnd: !0
    });
    new GLightbox({
        selector: ".page-gallery-kontakty",
        touchNavigation: !0,
        loopAtEnd: !0
    });
    if ($("#contactsMap").length > 0) {
        $.getScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=4faa739a-3fde-4da7-ad0f-3f9f571a716e", function () {


            ymaps.ready(function () {
                // Построение маршрута.
                // По умолчанию строится автомобильный маршрут.
                if ($(window).width() <= 767) {
                    mapZoom = 15
                    mapZoomFoot = 15
                    mapZoomUnv = 13
                } else if ($(window).width() <= 1025) {
                    mapZoom = 15
                    mapZoomFoot = 15
                    mapZoomUnv = 13
                } else {
                    mapZoom = 17
                    mapZoomFoot = 16
                    mapZoomUnv = 16
                }
                if ($("#contactsMap").length > 0) {
                    var contactsMap = new ymaps.Map('contactsMap', {
                            center: [55.732318, 37.592139],
                            zoom: mapZoom,
                            controls: ['zoomControl'],
                        }, myPlacemark = new ymaps.Placemark([55.732022627516756, 37.589098746032406], {
                            hintContent: 'Парковка',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/parking-map.svg',
                            // Размеры метки.
                            iconImageSize: [29, 34],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-14, -33]
                        }),
                        myPlacemarkLogo = new ymaps.Placemark([55.732120, 37.588526], {
                            hintContent: 'Центр приватной стоматологии Доктор Левин',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/map_logo.svg',
                            // Размеры метки.
                            iconImageSize: [53, 53],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-26.5, -36.5]
                        }),
                    );
                    var multiRoute = new ymaps.multiRouter.MultiRoute({
                        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
                        referencePoints: [
                            [55.73307037420295, 37.592708999365975],
                            [55.732022627516756, 37.589098746032406],
                        ],
                        params: {
                            routingMode: 'auto',
                            multiRoute: true
                        }

                    }, {
                        wayPointVisible: false,

                    });
                    contactsMap.geoObjects.add(myPlacemark);
                    contactsMap.geoObjects.add(myPlacemarkLogo);
                    contactsMap.geoObjects.add(multiRoute);

                    contactsMap.behaviors.disable('multiTouch');
                    contactsMap.behaviors.disable('scrollZoom');

                    if ($(window).width() <= 768) {
                        contactsMap.behaviors.disable('drag');
                        //console.log('drag disabled');
                    }
                }

                if ($("#contactsMapUnv").length > 0) {
                    var contactsMapUnv = new ymaps.Map('contactsMapUnv', {
                            //center: [55.68967684318415,37.527362742012045],
                            center: [55.68973896351863,37.527121343200704],
                            zoom: mapZoomUnv,
                            controls: ['zoomControl'],
                        }, myPlacemark = new ymaps.Placemark([55.69009804741229,37.52770606476594], {
                            hintContent: 'Парковка',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/parking-map.svg',
                            // Размеры метки.
                            iconImageSize: [29, 34],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-0, -33]
                        }),
                        myPlacemarkLogo = new ymaps.Placemark([55.68967684318415,37.527362742012045], {
                            hintContent: 'Центр приватной стоматологии Доктор Левин',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/map_logo.svg',
                            // Размеры метки.
                            iconImageSize: [53, 53],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-32, -63.5]
                        }),
                    );
                    var multiRoute = new ymaps.multiRouter.MultiRoute({
                        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
                        referencePoints: [
                            [55.73307037420295, 37.592708999365975],
                            [55.732022627516756, 37.589098746032406],
                        ],
                        params: {
                            routingMode: 'auto',
                            multiRoute: true
                        }

                    }, {
                        wayPointVisible: false,

                    });
                    contactsMapUnv.geoObjects.add(myPlacemark);
                    contactsMapUnv.geoObjects.add(myPlacemarkLogo);
                    contactsMapUnv.geoObjects.add(multiRoute);

                    contactsMapUnv.behaviors.disable('multiTouch');
                    contactsMapUnv.behaviors.disable('scrollZoom');

                    if ($(window).width() <= 768) {
                        contactsMapUnv.behaviors.disable('drag');
                        //console.log('drag disabled');
                    }
                }
                
                if ($("#contactsMapFoot").length > 0) {

                    var contactsMapFoot = new ymaps.Map('contactsMapFoot', {
                            center: [55.733887, 37.594496],
                            zoom: mapZoomFoot,
                            controls: ['zoomControl'],
                        }, myPlacemark = new ymaps.Placemark([55.732022627516756, 37.589098746032406], {
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/parking-map.svg',
                            // Размеры метки.
                            iconImageSize: [29, 34],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-20.5, -28]
                        }),
                        myPlacemarkLogo = new ymaps.Placemark([55.73226371413773, 37.58854608468744], {
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/map_logo.svg',
                            // Размеры метки.
                            iconImageSize: [53, 53],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-37, -37]

                        }),
                    );

                    var multiRoute = new ymaps.multiRouter.MultiRoute({
                        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
                        referencePoints: [
                            [55.73532231057912, 37.59335272952943],
                            [55.73188260528515, 37.59161823336156],
                            [55.732058, 37.588320],
                        ],

                        params: {
                            routingMode: 'pedestrian'
                        }

                    }, {
                        wayPointVisible: false,

                    });
                    contactsMapFoot.geoObjects.add(multiRoute);
                    contactsMapFoot.geoObjects.add(myPlacemarkLogo);
                    contactsMapFoot.behaviors.disable('scrollZoom')
                    contactsMapFoot.behaviors.disable('multiTouch');
                    contactsMapFoot.behaviors.disable('scrollZoom');
                    if ($(window).width() <= 768) {
                        contactsMapFoot.behaviors.disable('drag');
                        //console.log('drag disabled');
                    }
                }

            });
        })
    }
}
// function mapInit() {
//   initMainMap(mapPoints);
//   initMapRoutes("map420", "55.688627293555,37.574945094011", "55.691311592705,37.588291857147");initMapRoutes("map10", "55.659358,37.749672", "55.665766229466,37.746848");initMapRoutes("map11", "55.674389799548,37.761193847031", "55.665766229466,37.746848");initMapRoutes("map12", "55.651398659626,37.743773455855", "55.665766229466,37.746848");initMapRoutes("map17810", "55.708399598714,37.65825561244", "55.706856,37.66225");initMapRoutes("map17811", "55.705957,37.660701", "55.706856,37.66225");initMapRoutes("map72190", "55.742277,37.653622", "55.740588,37.665264");initMapRoutes("map72191", "55.741115,37.656776", "55.740588,37.665264");       };

document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});

jQuery(function($) {

    $('#myModal,#myModal2,#control').on('show.bs.modal', function(e) {
        $("body,html").css({
            "overflow": "hidden !important",
            "height": "100%"

        })
    });
    $('#myModal,#myModal2,#control').on('hide.bs.modal', function(e) {
        $("body,html").css({
            "overflow": "",
            "height": ""

        })
    });
    $('.image-blur').each(function() {
        $(this).wrapAll('<div class="image-blur-wrap"><div class="wrap-image">');
    });

    var pointForse = false

    $('#myModal').on('show.bs.modal', function(e) {
        if(!pointForse) {
            $.getScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=4faa739a-3fde-4da7-ad0f-3f9f571a716e", function() {
                // Universitet
                ymaps.ready(function() {
                    var myMap1 = new ymaps.Map('mapConctUnv', {
                            center: [55.68973896351863,37.527121343200704],
                            controls: ['zoomControl'],
                            zoom: 16
                        }, myPlacemark = new ymaps.Placemark([55.68967684318415,37.527362742012045], {
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/map_logo.svg',
                            // Размеры метки.
                            iconImageSize: [48, 48],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-30, -60]
                        }),
                    )

                    myMap1.behaviors.disable('multiTouch');
                    myMap1.behaviors.disable('scrollZoom');
                    if ($(window).width() <= 768) {
                        myMap1.behaviors.disable('drag');
                        console.log('drag disabled');
                    }

                    myMap1.geoObjects.add(myPlacemark);

                });
                // Park Kultury
                ymaps.ready(function() {
                    var myMap2 = new ymaps.Map('mapConct', {
                            center: [55.73209, 37.58861],
                            controls: ['zoomControl'],
                            zoom: 16
                        }, myPlacemark = new ymaps.Placemark([55.73209, 37.58861], {
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '//doctorlevin.ru/wp-content/themes/sd-03-2_new/img/map_logo.svg',
                            // Размеры метки.
                            iconImageSize: [48, 48],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-36.5, -36.5]
                        }),
            
            
                    )

                    myMap2.behaviors.disable('multiTouch');
                    myMap2.behaviors.disable('scrollZoom');
                    if ($(window).width() <= 768) {
                        myMap2.behaviors.disable('drag');
                        console.log('drag disabled');
                    }

                    myMap2.geoObjects.add(myPlacemark);
                });
            })
        }
        pointForse = true;

    });

    
   

    function is_mobile() {
        var mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 767)
        if (mobile) {
            return true
        } else {
            return false
        }
    }
    if (is_mobile()) {
        $('#sec-1').css('height', $(window).height() - 58);
        $('.sidebar__item').css('height', $(window).height() - 58);

    }

    $(".widget_o").addClass('anim')

    $('[data-toggle="tooltip"]').tooltip({
        boundary: 'window',
        toggleEnabled: true,
    });

    /*****************************************************************
     * Related Posts Ajax
     ****************************************************************/
    $('.js-ajax-load').each(function() {
        var $ajaxLoader = $(this),
            $preloader = $ajaxLoader.find('.js-ajax-load__preloader'),
            $listing = $ajaxLoader.find('.js-ajax-load__listing'),
            $tpl = $ajaxLoader.find('.js-ajax-load__item-tpl'),
            $firstItem = false,
            tplHtml = $tpl.html(),
            url = $ajaxLoader.data('url'),
            id = $ajaxLoader.data('id'),
            got = $ajaxLoader.data('got').split(','),
            finish = false,
            loading = false;

        console.log(tplHtml);


        $(window).on('scroll', function() {
            var scrollBottom = $(window).scrollTop() + $(window).height(),
                firstItemTop = $firstItem && $firstItem.length ? $firstItem.offset().top : 300;


            if (scrollBottom >= firstItemTop && !finish && !loading) {
                loading = true;
                showPreloader();
                $.ajax({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    data: {
                        id: id,
                        got: got.join(',')
                    },
                    success: function(response) {
                        console.log(response);

                        if (!response) {
                            hidePreloader();
                            loading = false;
                        }

                        if (response.items.length) {
                            createItems(response.items);
                        }

                        finish = response.finish;
                    },
                    complete: function() {
                        hidePreloader();
                        loading = false;
                    }
                });
            }
        });



        function showPreloader() {
            $preloader.addClass('active');
        }

        function hidePreloader() {
            $preloader.removeClass('active');
        }

        function processTpl(tpl, vars) {
            for (var key in vars) {
                if (!vars.hasOwnProperty(key)) continue;
                var value = vars[key];

                tpl = tpl.replace('${' + key + '}', value);
            }

            return tpl;
        }

        function createItems(items) {
            for (var k in items) {
                if (!items.hasOwnProperty(k)) continue;
                var item = items[k],
                    $item = createItem(item);

                if (k == 0) {
                    $firstItem = $item;
                }

                got.push(item.id);
            }
        }

        function createItem(item) {
            var itemHtml = processTpl(tplHtml, item),
                $item = $(itemHtml);

            $listing.append($item);

            return $item;
        }
    });
});

/* bundle.js */

function is_mobile() {
    var mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 767)
    if (mobile) {
        return true
    } else {
        return false
    }
}

! function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 101)
}


([function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {
    t.exports = i.p + "../img/author-portrait.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/certificate1.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/certificate2.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/compare-image.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/doctor-card-image.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/doctor-slider-image.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/doctor-tip-portrait.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/hat.png"
}, function (t, e, i) {
    t.exports = i.p + "../img/doctor-feature.png"
}, function (t, e, i) {
    t.exports = i.p + "../img/image-gallery-1.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/image-gallery-2.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/image-gallery-3.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/image-gallery-4.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/image-gallery-5.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/image-gallery-6.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/product-image.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/figure.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/placemark.png"
}, function (t, e, i) {
    t.exports = i.p + "../img/review-card-cal.svg"
}, function (t, e, i) {
    t.exports = i.p + "../img/review-card-doc.svg"
}, function (t, e, i) {
    t.exports = i.p + "../img/review-card-original.jpg"
}, function (t, e, i) {
    t.exports = i.p + "../img/landing-hat.jpg"
}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    ! function (t) {
        "use strict";
        var e = jQuery.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(),
    function (t) {
        "use strict";
        t.fn.emulateTransitionEnd = function (e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", (function () {
                i = !0
            }));
            return setTimeout((function () {
                i || t(n).trigger(t.support.transition.end)
            }), e), this
        }, t((function () {
            t.support.transition = function () {
                var t = document.createElement("bootstrap"),
                    e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (var i in e)
                    if (void 0 !== t.style[i]) return {
                        end: e[i]
                    };
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        }))
    }(jQuery),
    function (t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            i = function (i) {
                t(i).on("click", e, this.close)
            };
        i.VERSION = "3.4.1", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
            var n = t(this),
                o = n.attr("data-target");
            o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), o = "#" === o ? [] : o;
            var s = t(document).find(o);

            function r() {
                s.detach().trigger("closed.bs.alert").remove()
            }
            e && e.preventDefault(), s.length || (s = n.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r())
        };
        var n = t.fn.alert;
        t.fn.alert = function (e) {
            return this.each((function () {
                var n = t(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
            }))
        }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
            return t.fn.alert = n, this
        }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
    }(jQuery),
    function (t) {
        "use strict";
        var e = function e(i, n) {
            this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.isLoading = !1
        };

        function n(n) {
            return this.each((function () {
                var o = t(this),
                    s = o.data("bs.button"),
                    r = "object" == i(n) && n;
                s || o.data("bs.button", s = new e(this, r)), "toggle" == n ? s.toggle() : n && s.setState(n)
            }))
        }
        e.VERSION = "3.4.1", e.DEFAULTS = {
            loadingText: "loading..."
        }, e.prototype.setState = function (e) {
            var i = "disabled",
                n = this.$element,
                o = n.is("input") ? "val" : "html",
                s = n.data();
            e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy((function () {
                n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
            }), this), 0)
        }, e.prototype.toggle = function () {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var o = t.fn.button;
        t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
            return t.fn.button = o, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var i = t(e.target).closest(".btn");
            n.call(i, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        }))
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };

        function n(n) {
            return this.each((function () {
                var o = t(this),
                    s = o.data("bs.carousel"),
                    r = t.extend({}, e.DEFAULTS, o.data(), "object" == i(n) && n),
                    a = "string" == typeof n ? n : r.slide;
                s || o.data("bs.carousel", s = new e(this, r)), "number" == typeof n ? s.to(n) : a ? s[a]() : r.interval && s.pause().cycle()
            }))
        }
        e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, e.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, e.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, e.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, e.prototype.getItemForDirection = function (t, e) {
            var i = this.getItemIndex(e);
            if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
            var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(n)
        }, e.prototype.to = function (t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function () {
                e.to(t)
            })) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, e.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, e.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, e.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, e.prototype.slide = function (n, o) {
            var s = this.$element.find(".item.active"),
                r = o || this.getItemForDirection(n, s),
                a = this.interval,
                l = "next" == n ? "left" : "right",
                c = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var d = r[0],
                u = t.Event("slide.bs.carousel", {
                    relatedTarget: d,
                    direction: l
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                    h && h.addClass("active")
                }
                var p = t.Event("slid.bs.carousel", {
                    relatedTarget: d,
                    direction: l
                });
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), "object" === i(r) && r.length && r[0].offsetWidth, s.addClass(l), r.addClass(l), s.one("bsTransitionEnd", (function () {
                    r.removeClass([n, l].join(" ")).addClass("active"), s.removeClass(["active", l].join(" ")), c.sliding = !1, setTimeout((function () {
                        c.$element.trigger(p)
                    }), 0)
                })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (s.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
            }
        };
        var o = t.fn.carousel;
        t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = o, this
        };
        var s = function (e) {
            var i = t(this),
                o = i.attr("href");
            o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
            var s = i.attr("data-target") || o,
                r = t(document).find(s);
            if (r.hasClass("carousel")) {
                var a = t.extend({}, r.data(), i.data()),
                    l = i.attr("data-slide-to");
                l && (a.interval = !1), n.call(r, a), l && r.data("bs.carousel").to(l), e.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", (function () {
            t('[data-ride="carousel"]').each((function () {
                var e = t(this);
                n.call(e, e.data())
            }))
        }))
    }(jQuery),
    function (t) {
        "use strict";
        var e = function e(i, n) {
            this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };

        function n(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(document).find(n)
        }

        function o(n) {
            return this.each((function () {
                var o = t(this),
                    s = o.data("bs.collapse"),
                    r = t.extend({}, e.DEFAULTS, o.data(), "object" == i(n) && n);
                !s && r.toggle && /show|hide/.test(n) && (r.toggle = !1), s || o.data("bs.collapse", s = new e(this, r)), "string" == typeof n && s[n]()
            }))
        }
        e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
            toggle: !0
        }, e.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, e.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var i, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(n && n.length && (i = n.data("bs.collapse")) && i.transitioning)) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                        n && n.length && (o.call(n, "hide"), i || n.data("bs.collapse", null));
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][l])
                    }
                }
            }
        }, e.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var i = t.Event("hide.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!t.support.transition) return o.call(this);
                    this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                }
            }
        }, e.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, e.prototype.getParent = function () {
            return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function (e, i) {
                var o = t(i);
                this.addAriaAndCollapsedClass(n(o), o)
            }), this)).end()
        }, e.prototype.addAriaAndCollapsedClass = function (t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var s = t.fn.collapse;
        t.fn.collapse = o, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = s, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
            var i = t(this);
            i.attr("data-target") || e.preventDefault();
            var s = n(i),
                r = s.data("bs.collapse") ? "toggle" : i.data();
            o.call(s, r)
        }))
    }(jQuery),
    function (t) {
        "use strict";
        var e = ".dropdown-backdrop",
            i = '[data-toggle="dropdown"]',
            n = function (e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };

        function o(e) {
            var i = e.attr("data-target");
            i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = "#" !== i ? t(document).find(i) : null;
            return n && n.length ? n : e.parent()
        }

        function s(n) {
            n && 3 === n.which || (t(e).remove(), t(i).each((function () {
                var e = t(this),
                    i = o(e),
                    s = {
                        relatedTarget: this
                    };
                i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
            })))
        }
        n.VERSION = "3.4.1", n.prototype.toggle = function (e) {
            var i = t(this);
            if (!i.is(".disabled, :disabled")) {
                var n = o(i),
                    r = n.hasClass("open");
                if (s(), !r) {
                    "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", s);
                    var a = {
                        relatedTarget: this
                    };
                    if (n.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
                    i.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, n.prototype.keydown = function (e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var n = t(this);
                if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var s = o(n),
                        r = s.hasClass("open");
                    if (!r && 27 != e.which || r && 27 == e.which) return 27 == e.which && s.find(i).trigger("focus"), n.trigger("click");
                    var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                    if (a.length) {
                        var l = a.index(e.target);
                        38 == e.which && l > 0 && l--, 40 == e.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                    }
                }
            }
        };
        var r = t.fn.dropdown;
        t.fn.dropdown = function (e) {
            return this.each((function () {
                var i = t(this),
                    o = i.data("bs.dropdown");
                o || i.data("bs.dropdown", o = new n(this)), "string" == typeof e && o[e].call(i)
            }))
        }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = r, this
        }, t(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", (function (t) {
            t.stopPropagation()
        })).on("click.bs.dropdown.data-api", i, n.prototype.toggle).on("keydown.bs.dropdown.data-api", i, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function () {
                this.$element.trigger("loaded.bs.modal")
            }), this))
        };

        function n(n, o) {
            return this.each((function () {
                var s = t(this),
                    r = s.data("bs.modal"),
                    a = t.extend({}, e.DEFAULTS, s.data(), "object" == i(n) && n);
                r || s.data("bs.modal", r = new e(this, a)), "string" == typeof n ? r[n](o) : a.show && r.show(o)
            }))
        }
        e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, e.prototype.show = function (i) {
            var n = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: i
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function () {
                n.$element.one("mouseup.dismiss.bs.modal", (function (e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                }))
            })), this.backdrop((function () {
                var o = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var s = t.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                o ? n.$dialog.one("bsTransitionEnd", (function () {
                    n.$element.trigger("focus").trigger(s)
                })).emulateTransitionEnd(e.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
            })))
        }, e.prototype.hide = function (i) {
            i && i.preventDefault(), i = t.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
        }, e.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }), this))
        }, e.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function (t) {
                27 == t.which && this.hide()
            }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, e.prototype.resize = function () {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, e.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop((function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            }))
        }, e.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, e.prototype.backdrop = function (i) {
            var n = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function (t) {
                        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }), this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
                s ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var r = function () {
                    n.removeBackdrop(), i && i()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r()
            } else i && i()
        }, e.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, e.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, e.prototype.resetAdjustments = function () {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, e.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, e.prototype.setScrollbar = function () {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "";
            var i = this.scrollbarWidth;
            this.bodyIsOverflowing && (this.$body.css("padding-right", e + i), t(this.fixedContent).each((function (e, n) {
                var o = n.style.paddingRight,
                    s = t(n).css("padding-right");
                t(n).data("padding-right", o).css("padding-right", parseFloat(s) + i + "px")
            })))
        }, e.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function (e, i) {
                var n = t(i).data("padding-right");
                t(i).removeData("padding-right"), i.style.paddingRight = n || ""
            }))
        }, e.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var o = t.fn.modal;
        t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
            return t.fn.modal = o, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
            var i = t(this),
                o = i.attr("href"),
                s = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
                r = t(document).find(s),
                a = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, r.data(), i.data());
            i.is("a") && e.preventDefault(), r.one("show.bs.modal", (function (t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", (function () {
                    i.is(":visible") && i.trigger("focus")
                }))
            })), n.call(r, a, this)
        }))
    }(jQuery),
    function (t) {
        "use strict";
        var e = ["sanitize", "whiteList", "sanitizeFn"],
            n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            o = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            r = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function a(e, i) {
            var o = e.nodeName.toLowerCase();
            if (-1 !== t.inArray(o, i)) return -1 === t.inArray(o, n) || Boolean(e.nodeValue.match(s) || e.nodeValue.match(r));
            for (var a = t(i).filter((function (t, e) {
                    return e instanceof RegExp
                })), l = 0, c = a.length; l < c; l++)
                if (o.match(a[l])) return !0;
            return !1
        }

        function l(e, i, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            if (!document.implementation || !document.implementation.createHTMLDocument) return e;
            var o = document.implementation.createHTMLDocument("sanitization");
            o.body.innerHTML = e;
            for (var s = t.map(i, (function (t, e) {
                    return e
                })), r = t(o.body).find("*"), l = 0, c = r.length; l < c; l++) {
                var d = r[l],
                    u = d.nodeName.toLowerCase();
                if (-1 !== t.inArray(u, s))
                    for (var h = t.map(d.attributes, (function (t) {
                            return t
                        })), p = [].concat(i["*"] || [], i[u] || []), f = 0, m = h.length; f < m; f++) a(h[f], p) || d.removeAttribute(h[f].nodeName);
                else d.parentNode.removeChild(d)
            }
            return o.body.innerHTML
        }
        var c = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        c.VERSION = "3.4.1", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            },
            sanitize: !0,
            sanitizeFn: null,
            whiteList: o
        }, c.prototype.init = function (e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                var r = o[s];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var a = "hover" == r ? "mouseenter" : "focusin",
                        l = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, c.prototype.getDefaults = function () {
            return c.DEFAULTS
        }, c.prototype.getOptions = function (i) {
            var n = this.$element.data();
            for (var o in n) n.hasOwnProperty(o) && -1 !== t.inArray(o, e) && delete n[o];
            return (i = t.extend({}, this.getDefaults(), n, i)).delay && "number" == typeof i.delay && (i.delay = {
                show: i.delay,
                hide: i.delay
            }), i.sanitize && (i.template = l(i.template, i.whiteList, i.sanitizeFn)), i
        }, c.prototype.getDelegateOptions = function () {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, (function (t, n) {
                i[t] != n && (e[t] = n)
            })), e
        }, c.prototype.enter = function (e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
            else {
                if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
                i.timeout = setTimeout((function () {
                    "in" == i.hoverState && i.show()
                }), i.options.delay.show)
            }
        }, c.prototype.isInStateTrue = function () {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, c.prototype.leave = function (e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
                if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                i.timeout = setTimeout((function () {
                    "out" == i.hoverState && i.hide()
                }), i.options.delay.hide)
            }
        }, c.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i) return;
                var n = this,
                    o = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    a = /\s?auto?\s?/i,
                    l = a.test(r);
                l && (r = r.replace(a, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var d = this.getPosition(),
                    u = o[0].offsetWidth,
                    h = o[0].offsetHeight;
                if (l) {
                    var p = r,
                        f = this.getPosition(this.$viewport);
                    r = "bottom" == r && d.bottom + h > f.bottom ? "top" : "top" == r && d.top - h < f.top ? "bottom" : "right" == r && d.right + u > f.width ? "left" : "left" == r && d.left - u < f.left ? "right" : r, o.removeClass(p).addClass(r)
                }
                var m = this.getCalculatedOffset(r, d, u, h);
                this.applyPlacement(m, r);
                var g = function () {
                    var t = n.hoverState;
                    n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(c.TRANSITION_DURATION) : g()
            }
        }, c.prototype.applyPlacement = function (e, i) {
            var n = this.tip(),
                o = n[0].offsetWidth,
                s = n[0].offsetHeight,
                r = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
                using: function (t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            "top" == i && c != s && (e.top = e.top + s - c);
            var d = this.getViewportAdjustedDelta(i, e, l, c);
            d.left ? e.left += d.left : e.top += d.top;
            var u = /top|bottom/.test(i),
                h = u ? 2 * d.left - o + l : 2 * d.top - s + c,
                p = u ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(h, n[0][p], u)
        }, c.prototype.replaceArrow = function (t, e, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
        }, c.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle();
            this.options.html ? (this.options.sanitize && (e = l(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
        }, c.prototype.hide = function (e) {
            var i = this,
                n = t(this.$tip),
                o = t.Event("hide.bs." + this.type);

            function s() {
                "in" != i.hoverState && n.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
            }
            if (this.$element.trigger(o), !o.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(c.TRANSITION_DURATION) : s(), this.hoverState = null, this
        }, c.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, c.prototype.hasContent = function () {
            return this.getTitle()
        }, c.prototype.getPosition = function (e) {
            var i = (e = e || this.$element)[0],
                n = "BODY" == i.tagName,
                o = i.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var s = window.SVGElement && i instanceof window.SVGElement,
                r = n ? {
                    top: 0,
                    left: 0
                } : s ? null : e.offset(),
                a = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                l = n ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, a, l, r)
        }, c.prototype.getCalculatedOffset = function (t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {
                top: e.top + e.height / 2 - n / 2,
                left: e.left + e.width
            }
        }, c.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - r.scroll,
                    l = e.top + s - r.scroll + n;
                a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
            } else {
                var c = e.left - s,
                    d = e.left + s + i;
                c < r.left ? o.left = r.left - c : d > r.right && (o.left = r.left + r.width - d)
            }
            return o
        }, c.prototype.getTitle = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, c.prototype.getUID = function (t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, c.prototype.tip = function () {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, c.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, c.prototype.enable = function () {
            this.enabled = !0
        }, c.prototype.disable = function () {
            this.enabled = !1
        }, c.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, c.prototype.toggle = function (e) {
            var i = this;
            e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, c.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide((function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            }))
        }, c.prototype.sanitizeHtml = function (t) {
            return l(t, this.options.whiteList, this.options.sanitizeFn)
        };
        var d = t.fn.tooltip;
        t.fn.tooltip = function (e) {
            return this.each((function () {
                var n = t(this),
                    o = n.data("bs.tooltip"),
                    s = "object" == i(e) && e;
                !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new c(this, s)), "string" == typeof e && o[e]())
            }))
        }, t.fn.tooltip.Constructor = c, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = d, this
        }
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            if (this.options.html) {
                var o = i(n);
                this.options.sanitize && (e = this.sanitizeHtml(e), "string" === o && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === o ? "html" : "append"](n)
            } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
            t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = function (n) {
            return this.each((function () {
                var o = t(this),
                    s = o.data("bs.popover"),
                    r = "object" == i(n) && n;
                !s && /destroy|hide/.test(n) || (s || o.data("bs.popover", s = new e(this, r)), "string" == typeof n && s[n]())
            }))
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(jQuery),
    function (t) {
        "use strict";

        function e(i, n) {
            this.$body = t(document.body), this.$scrollElement = t(i).is(document.body) ? t(window) : t(i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each((function () {
                var o = t(this),
                    s = o.data("bs.scrollspy"),
                    r = "object" == i(n) && n;
                s || o.data("bs.scrollspy", s = new e(this, r)), "string" == typeof n && s[n]()
            }))
        }
        e.VERSION = "3.4.1", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = this,
                i = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function () {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    s = /^#./.test(o) && t(o);
                return s && s.length && s.is(":visible") && [
                    [s[i]().top + n, o]
                ] || null
            })).sort((function (t, e) {
                return t[0] - e[0]
            })).each((function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            }))
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                o = this.offsets,
                s = this.targets,
                r = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
            if (r && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function () {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var o = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = o, this
        }, t(window).on("load.bs.scrollspy.data-api", (function () {
            t('[data-spy="scroll"]').each((function () {
                var e = t(this);
                n.call(e, e.data())
            }))
        }))
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (e) {
            this.element = t(e)
        };

        function i(i) {
            return this.each((function () {
                var n = t(this),
                    o = n.data("bs.tab");
                o || n.data("bs.tab", o = new e(this)), "string" == typeof i && o[i]()
            }))
        }
        e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = i.find(".active:last a"),
                    s = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    r = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var a = t(document).find(n);
                    this.activate(e.closest("li"), i), this.activate(a, a.parent(), (function () {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    }))
                }
            }
        }, e.prototype.activate = function (i, n, o) {
            var s = n.find("> .active"),
                r = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);

            function a() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            s.length && r ? s.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), s.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = i, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, this
        };
        var o = function (e) {
            e.preventDefault(), i.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery),
    function (t) {
        "use strict";
        var e = function e(i, n) {
            this.options = t.extend({}, e.DEFAULTS, n);
            var o = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
            this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };

        function n(n) {
            return this.each((function () {
                var o = t(this),
                    s = o.data("bs.affix"),
                    r = "object" == i(n) && n;
                s || o.data("bs.affix", s = new e(this, r)), "string" == typeof n && s[n]()
            }))
        }
        e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
            offset: 0,
            target: window
        }, e.prototype.getState = function (t, e, i, n) {
            var o = this.$target.scrollTop(),
                s = this.$element.offset(),
                r = this.$target.height();
            if (null != i && "top" == this.affixed) return o < i && "top";
            if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - n) && "bottom";
            var a = null == this.affixed,
                l = a ? o : s.top;
            return null != i && o <= i ? "top" : null != n && l + (a ? r : e) >= t - n && "bottom"
        }, e.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                i = this.$element.offset();
            return this.pinnedOffset = i.top - t
        }, e.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, e.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var n = this.$element.height(),
                    o = this.options.offset,
                    s = o.top,
                    r = o.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != i(o) && (r = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof r && (r = o.bottom(this.$element));
                var l = this.getState(a, n, s, r);
                if (this.affixed != l) {
                    null != this.unpin && this.$element.css("top", "");
                    var c = "affix" + (l ? "-" + l : ""),
                        d = t.Event(c + ".bs.affix");
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(c).trigger(c.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == l && this.$element.offset({
                    top: a - n - r
                })
            }
        };
        var o = t.fn.affix;
        t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
            return t.fn.affix = o, this
        }, t(window).on("load", (function () {
            t('[data-spy="affix"]').each((function () {
                var e = t(this),
                    i = e.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(e, i)
            }))
        }))
    }(jQuery)
}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {
    "use strict";
    i.r(e);
    i(2), i(3), i(4), i(5), i(6), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14), i(15), i(16), i(17), i(18), i(19), i(20), i(21), i(22), i(23), i(24), i(25), i(26), i(27);
    i(0);

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var o = function () {
        var item = e
        function t(e) {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.accordeon = e, this.closedHeight = e.querySelector(".accordeon__head").clientHeight, this.openHeight = e.querySelector(".accordeon__head").clientHeight + e.querySelector(".accordeon__body").clientHeight, this.open = this.open.bind(this), this.close = this.close.bind(this), this.init = this.init.bind(this)
        }
      
        var e, i, o;
        return e = t, (i = [{
            key: "open",
            value: function () {
                var he = $('.accordeon_open .accordeon__head').outerHeight()
             
               
                $('.accordeon_open').attr('data-isopen', 'false');
                $('.accordeon_open').css({"maxHeight":he})
                $('.accordeon_open').removeClass('accordeon_open')
                this.accordeon.classList.add("accordeon_open"), this.accordeon.style.maxHeight = "".concat(this.openHeight, "px"), this.accordeon.dataset.isopen = "true"
                if (is_mobile()) {
                    var hash = $('.accordeon_open').position().top;
                    $('body,html').animate({
                        scrollTop: hash
                    }, 100);
                }

            }
        }, {
            key: "close",
            value: function () {
                this.accordeon.classList.remove("accordeon_open"), this.accordeon.style.maxHeight = "".concat(this.closedHeight, "px"), this.accordeon.dataset.isopen = "false"
            }
        }, {
            key: "init",
            value: function () {
                var t = this,
                    e = this.accordeon;
                    
                window.addEventListener("resize", (function () {
                    t.closedHeight = e.querySelector(".accordeon__head").clientHeight, t.openHeight = e.querySelector(".accordeon__head").clientHeight + e.querySelector(".accordeon__body").clientHeight, e.classList.contains("accordeon_open") ? t.accordeon.style.maxHeight = "".concat(t.openHeight, "px") : t.accordeon.style.maxHeight = "".concat(t.closedHeight, "px")
                })), e.classList.contains("accordeon_open") ? (this.open(), e.dataset.isopen = "true") : (this.close(), e.dataset.isopen = "false"), e.querySelector(".accordeon__head").addEventListener("click", (function () {
                    "true" === e.dataset.isopen ? t.close() : "false" === e.dataset.isopen && t.open()
                }))
            }
        }]) && n(e.prototype, i), o && n(e, o), t
    }();
    jQuery(document).ready((function (t) {
        $.fn.setCursorPosition = function (pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        $('.callback-form .phone').click(function () {
            $(this).setCursorPosition(4); // set position number
        });
        t(".callback-form .phone").mask("+7 (999) 999-99-99"), t("#acceptance-672").click((function () {
            t(this).is(":checked") ? t(".callback-form__submit").removeAttr("disabled") : t(".callback-form__submit").attr("disabled", !0)
        })), t("#myModal2").on("hidden.bs.modal", (function (e) {
            t(this).removeClass("response")
        })), t(".cnss-social-icon li a").attr("rel", "nofollow"), t(".agree-trap").prop("checked", !1), t(".depth-1").remove(), t("#menu-main-menu .dropdown-toggle").click((function () {
            var e = t(this).text();
            t(".dropdown-menu__header .header-text").text(e)
        })), t(".dropdown-header a").each((function () {
            "#" == t(this).attr("href") && (t(this).addClass("no-hover"), t(this).closest("li").addClass("no-hover"))
        }));
        new Blazy({
            offset: 100
        }), new GLightbox;

        //if (t(".sidebar").length && (t("li.services .sub-menu").addClass("services"), t(".site-menu__list > .menu-item.menu-item-has-children:not(.services)").each((function() {
        if (t(".sidebar").length && (t("li.services .sub-menu").addClass("services"), t(".site-menu__list > .menu-item.menu-item-has-children").each((function () {
                var e = t(this).find(" > .sub-menu"),
                    i = t(this).find(" > a").text();
                e.prepend('<header class="sub-menu__head"><a href="/services/">' + i + "</a></header>")
            })), t(".site-menu__list > .menu-item.menu-item-has-children").each((function () {
                var e = t(this).find(" > .sub-menu"),
                    i = t(this);
                e.prepend('<button class="sub-menu__trigger"><i class="icon-trigger"></i></button>'), i.prepend('<button class="sub-menu-mobile__trigger"><i class="icon-trigger"></i></button>')
            })), t(".site-menu__list > .menu-item.menu-item-has-children").each((function () {
                var e = t(this).find("> .sub-menu"),
                    i = t(this).find("> a"),
                    n = t(".sub-menu__trigger"),
                    o = t(this).find(".sub-menu-mobile__trigger");
                t(i).on("click", (function () {
                    t(this).parent().hasClass("site-menu__item_active") && "#" != this.getAttribute("href") ? console.log(this.hash) : t(this).parent().hasClass("site-menu__item_active") && "#" == this.getAttribute("href") ? (t(".sub-menu-mobile__trigger").removeClass("sub-menu-mobile__trigger_active"), t(".site-menu__item_active").removeClass("site-menu__item_active"), t(".sub-menu_active").removeClass("sub-menu_active")) : (t(".sub-menu-mobile__trigger").removeClass("sub-menu-mobile__trigger_active"), o.addClass("sub-menu-mobile__trigger_active"), t(".site-menu__item_active").removeClass("site-menu__item_active"), t(this).parent().addClass("site-menu__item_active"), event.preventDefault(), t(".sub-menu_active").removeClass("sub-menu_active"), e.addClass("sub-menu_active"))
               return false
                })), t(n).on("click", (function () {
                    event.preventDefault(), t(".sub-menu-mobile__trigger").removeClass("sub-menu-mobile__trigger_active"), t(".site-menu__item_active").removeClass("site-menu__item_active"), t(".sub-menu_active").removeClass("sub-menu_active")
                })), t(o).on("click", (function () {
                    event.preventDefault(), t(this).hasClass("sub-menu-mobile__trigger_active") ? (t(".sub-menu-mobile__trigger").removeClass("sub-menu-mobile__trigger_active"), t(".site-menu__item_active").removeClass("site-menu__item_active"), t(".sub-menu_active").removeClass("sub-menu_active")) : (t(".sub-menu-mobile__trigger").removeClass("sub-menu-mobile__trigger_active"), o.addClass("sub-menu-mobile__trigger_active"), t(".site-menu__item_active").removeClass("site-menu__item_active"), t(this).parent().addClass("site-menu__item_active"), event.preventDefault(), t(".sub-menu_active").removeClass("sub-menu_active"), e.addClass("sub-menu_active"))
                }))
            })), document.querySelectorAll(".doctor-card").length > 0 && document.querySelectorAll(".doctor-card").forEach((function (t) {
                var e = t.querySelector(".doctor-card__name").textContent.split(" ");
                t.querySelector(".doctor-card__name").textContent = e[0], t.querySelector(".doctor-card__surname").textContent = "".concat(e[1], " ").concat(e[2])
            })), document.querySelector("#wrapper").addEventListener("click", (function (e) {
                document.querySelector(".sidebar").classList.remove("sidebar_active"), document.querySelector("#wrapper").classList.remove("shade"), t(".sub-menu-mobile__trigger").removeClass("sub-menu-mobile__trigger_active"), t(".site-menu__item_active").removeClass("site-menu__item_active"), t(".sub-menu_active").removeClass("sub-menu_active"), document.querySelector(".mobile-header").classList.remove("mobile-header_active"), document.querySelector(".mobile-header__trigger").classList.remove("mobile-header__trigger_active"), document.querySelector(".sidebar").style.display = "", document.querySelector(".mobile-header").dataset.mobileOpen = "false"
            })), document.querySelectorAll(".sidebar").forEach((function (t) {
                t.classList.add("sidebar_on")
            }))), document.querySelectorAll(".extendable").length >= 1) {

        }

        var i = [];
        if (document.querySelectorAll(".question").forEach((function (t) {
                i.push(new o(t)), i[i.length - 1].init()
            })), 1 === document.querySelectorAll("#reviews-masonry").length) new Masonry(document.querySelector("#reviews-masonry"), {
            itemSelector: ".review-item",
            gutter: 20
        });
        if (1 === document.querySelectorAll(".image-gallery").length) {
            document.querySelectorAll(".image-gallery").forEach((function (t) {
                t.querySelectorAll(".image-gallery__item").forEach((function (t) {
                    1 === t.querySelectorAll("img").length && (Number(t.querySelector("img").getAttribute("width").match(/[0-9]*/)) > Number(t.querySelector("img").getAttribute("height").match(/[0-9]*/)) ? t.classList.add("image-gallery__item_h") : t.classList.add("image-gallery__item_v"))
                }))
            }));
            new GLightbox({
                selector: "image-gallery__item",
                touchNavigation: !0,
                loopAtEnd: !0
            })
        }
        if (document.querySelectorAll("#certificate-slider").length >= 1) new Swiper("#certificate-slider", {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: !0,
            loopedSlides: 4,
            threshold: 10,
            centeredSlides: !0,
            centerInsufficientSlides: !0,
            pagination: {
                el: "#certificate-slider-pagination",
                type: "bullets",
                bulletClass: "swiper-slider__bullet",
                bulletActiveClass: "swiper-slider__bullet_active",
                clickable: !0
            },
            navigation: {
                prevEl: "#certificate-slider-prev",
                nextEl: "#certificate-slider-next"
            }
        }), new GLightbox({
            selector: "certificate",
            touchNavigation: !0,
            loopAtEnd: !0
        });
        if (1 === document.querySelectorAll(".hat__person").length) {
            var n = document.querySelector(".hat__name"),
                s = n.querySelector(".hat__name > div:nth-child(1)").textContent.split(" "),
                r = s[0],
                a = s[1],
                l = s[2];
            n.querySelector(".hat__name > div:nth-child(1)").textContent = "".concat(r), n.querySelector(".hat__name > div:nth-child(2)").textContent = "".concat(a, " ").concat(l)
        }
        if (document.querySelectorAll(".doctor-item").length > 0 && document.querySelectorAll(".doctor-item").forEach((function (t) {
            if (1 === t.querySelectorAll(".doctor-item__video").length) {
                var e = !1,
                i = t.querySelector(".doctor-item__video"),
                n = new GLightbox({
                    elements: [{
                        href: i.dataset.video,
                        type: "video",
                        source: "youtube"
                    }]
                });
                n.onOpen = function () {
                    e = !0
                }, n.onClose = function () {
                    e = !1
                }, i.onclick = function () {
                    e ? n.close() : n.open()
                }
            }
        })))

        if (document.querySelectorAll(".doctor-card").length > 0 && document.querySelectorAll(".doctor-card").forEach((function (t) {
                if (1 === t.querySelectorAll(".doctor-card__button").length) {
                    var e = !1,
                        i = t.querySelector(".doctor-card__button"),
                        n = new GLightbox({
                            elements: [{
                                href: i.dataset.video,
                                type: "video",
                                source: "youtube"
                            }]
                        });
                    n.onOpen = function () {
                        e = !0
                    }, n.onClose = function () {
                        e = !1
                    }, i.onclick = function () {
                        e ? n.close() : n.open()
                    }
                }
            })), 1 === document.querySelectorAll("#reviews-slider").length) new Swiper("#reviews-slider", {
            slidesPerView: 1,
            loop: !0,
            threshold: 10,
            spaceBetween: 20,
            autoHeight: !0,
            pagination: {
                el: "#reviews-slider-pagination",
                type: "bullets",
                bulletClass: "swiper-slider__bullet",
                bulletActiveClass: "swiper-slider__bullet_active",
                clickable: !0
            },
            navigation: {
                prevEl: "#reviews-slider-prev",
                nextEl: "#reviews-slider-next"
            }
        });


        if (1 === document.querySelectorAll("#portfolio-slider").length) var portfolioSlider = new Swiper("#portfolio-slider", {
            slidesPerView: 1,
            loop: false,
            threshold: 10,
            spaceBetween: 20,
            autoHeight: !0,
            pagination: {
                el: "#portfolio-slider-pagination",
                type: "bullets",
                bulletClass: "swiper-slider__bullet",
                bulletActiveClass: "swiper-slider__bullet_active",
                clickable: !0
            },
            navigation: {
                prevEl: "#portfolio-slider-prev",
                nextEl: "#portfolio-slider-next"
            },
            on: {
                init: function () {
                    if (this.slides.length <= 1) {
                        $('#portfolio-slider-prev').hide();
                        $('#portfolio-slider-next').hide();
                    } else {
                        $('#portfolio-slider-prev').show();
                        $('#portfolio-slider-next').show();
                    }
                },
            }

        });



        // portfolioSlider.on('slideChange', function (perm) {
        //   if (portfolioSlider.activeIndex==0) {
        //     $('#portfolio-slider-prev').hide()
        //     $('#portfolio-slider-next').show()
        //   }
        //   // most right postion
        //   else if (portfolioSlider.activeIndex == portfolioSlider.slides.length-1) {
        //   $('#portfolio-slider-prev').show()
        //     $('#portfolio-slider-next').hide()
        //   }
        //   // middle positions
        //   else {
        //     $('#portfolio-slider-prev').show()
        //     $('#portfolio-slider-next').show()
        //   }
        // });


        if (1 === document.querySelectorAll("#doctor-list-slider").length) new Swiper("#doctor-list-slider", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: !0,
            threshold: 10,
            autoHeight: !0,
            pagination: {
                el: "#doctor-list-slider-pagination",
                type: "bullets",
                bulletClass: "swiper-slider__bullet",
                bulletActiveClass: "swiper-slider__bullet_active",
                clickable: !0
            },
            navigation: {
                prevEl: "#doctor-list-slider-prev",
                nextEl: "#doctor-list-slider-next"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                560: {
                    slidesPerView: 2
                },
                1201: {
                    slidesPerView: 3
                }
            }
        });
        if (document.querySelectorAll(".compare").forEach((function (t) {
                var e = t.querySelectorAll(".compare__tab"),
                    i = t.querySelectorAll(".compare__item");
                e.forEach((function (t, n) {
                    t.addEventListener("click", (function () {
                        e.forEach((function (t) {
                            t.classList.remove("tab_active")
                        })), t.classList.add("tab_active"), i.forEach((function (t, e) {
                            n === e ? t.classList.add("compare__item_active") : t.classList.remove("compare__item_active")
                        }))
                    }))
                }))
            })), document.querySelectorAll(".content-table__link, .tab-bar__tab , .banner__link").length > 0 && document.querySelectorAll(".content-table__link, .tab-bar__tab,.banner__link").forEach((function (t) {
                t.addEventListener("click", (function (e) {
                    e.preventDefault(),
                        function (t) {
                            var e = document.querySelector(t);
                            window.scrollTo({
                                top: e.offsetTop,
                                behavior: "smooth"
                            })
                        }(t.getAttribute("href"))
                }))
            })),
            document.querySelectorAll(".sidebar").length >= 1 && document.querySelectorAll(".mobile-header").length >= 1) {
            var c = document.querySelector(".mobile-header"),
                d = document.querySelector(".sidebar"),
                u = function () {
                    document.querySelector("#wrapper").classList.remove("shade"), c.classList.remove("mobile-header_active"), c.querySelector(".mobile-header__trigger").classList.remove("mobile-header__trigger_active"), d.style.display = "", d.classList.remove("sidebar_active"), c.dataset.mobileOpen = "false"
                };
            u(), c.querySelector(".mobile-header__trigger").addEventListener("click", (function () {
                "true" === c.dataset.mobileOpen ? u() : "false" === c.dataset.mobileOpen && (document.querySelector("#wrapper").classList.add("shade"), c.classList.add("mobile-header_active"), c.querySelector(".mobile-header__trigger").classList.add("mobile-header__trigger_active"), d.style.display = "block", d.classList.add("sidebar_active"), c.dataset.mobileOpen = "true")
            }))
        }

    }));
    i(28), i(29), i(30), i(31), i(32), i(33);
    i(34), i(35), i(36), i(37), i(38), i(39), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(1);
    i(59), i(60), i(61), i(62), i(63);
    i(64), i(65), i(66), i(67), i(68), i(69), i(70), i(71), i(72), i(73), i(74), i(75), i(76), i(77), i(78), i(79), i(80), i(81), i(82), i(83), i(84), i(85), i(86), i(87), i(88), i(89), i(90), i(91), i(92), i(93), i(94), i(95), i(96), i(97), i(98), i(99), i(100)
}]);