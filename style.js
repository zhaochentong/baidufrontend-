$('.btn').on('click', function(event){
	if($('.title').attr('class') === 'title'){
		$('.title').addClass('active');
		$('.dot-left').addClass('dot-left-active');
		$('.dot-right').addClass('dot-right-active');
	}
	else{
		$('.title').removeClass('active');
		$('.dot-left').removeClass('dot-left-active');
		$('.dot-right').removeClass('dot-right-active');
	}
})

