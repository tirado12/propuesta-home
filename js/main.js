$(document).ready(function(){
	var item = 1;
	$(".nosotros").on("click", function(){
		if($("#indicadorNosotros").hasClass("fa-caret-down")){
			$("#indicadorNosotros").removeClass("fa-caret-down");
			$("#indicadorNosotros").addClass("fa-caret-up");
		}else{
			$("#indicadorNosotros").removeClass("fa-caret-up");
			$("#indicadorNosotros").addClass("fa-caret-down");
		}
		if(!$(".menuNosotros").hasClass("ocultar") && !$(".menuNosotros").hasClass("mostrar")){
			$(".menuNosotros").addClass("ocultar");
		}
		if($(".menuNosotros").hasClass("ocultar")){
			$(".menuNosotros").removeClass("ocultar");
			$(".menuNosotros").addClass("mostrar");
		}else{
			$(".menuNosotros").removeClass("mostrar");
			$(".menuNosotros").addClass("ocultar");
		}
	});

	$(".soluciones").on("click", function(){
		if($("#indicadorSoluciones").hasClass("fa-caret-down")){
			$("#indicadorSoluciones").removeClass("fa-caret-down");
			$("#indicadorSoluciones").addClass("fa-caret-up");
		}else{
			$("#indicadorSoluciones").removeClass("fa-caret-up");
			$("#indicadorSoluciones").addClass("fa-caret-down");
		}
		if(!$(".menuSoluciones").hasClass("ocultar") && !$(".menuSoluciones").hasClass("mostrar")){
			$(".menuSoluciones").addClass("ocultar");
		}
		if($(".menuSoluciones").hasClass("ocultar")){
			$(".menuSoluciones").removeClass("ocultar");
			$(".menuSoluciones").addClass("mostrar");
		}else{
			$(".menuSoluciones").removeClass("mostrar");
			$(".menuSoluciones").addClass("ocultar");
		}
	});

	$('.img-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    	$(".imgInvalid").magnificPopup({
    	delegate: 'img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element;
            }
        }
    });

    	$('#some-button').magnificPopup({
    items: {
      src: 'path-to-image-1.jpg'
    },
    type: 'image' // this is default type
});
    	$('.some-button').on("click", function(){
    		item = parseInt(this.getAttribute('id'), 10);
    	})

// Example with multiple objects
$('.some-button').magnificPopup({
    items: [
      {
        src: 'images/galeria/1.png'
      },
      {
        src: 'images/galeria/2-1.png'
      },
      {
        src: 'images/galeria/3-1.png'
      },
      {
        src: 'images/galeria/4-1.png'
      },
      {
        src: 'images/galeria/5.png'
      },
      {
        src: 'images/galeria/6-1.png'
      },
      {
        src: 'images/galeria/7.png'
      }
    ],
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] 
    },
    index: 1,    
    type: 'image',
	mainClass: 'mfp-img-mobile',
	callbacks: {
  		open: function(){
  			console.log(item);
  			$('.some-button').magnificPopup('goTo',item);
  		}
  	}

});

});