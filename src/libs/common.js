


function init() {
	dyHeader();
	events();
}

init();

function dyHeader() {
	//动态header
	if(location.href.indexOf('index.html') != -1) {
		$('.header .list').find('a').eq(0).addClass('cur').siblings().removeClass('cur');
	} else if(location.href.indexOf('about.html') != -1) {
		$('.header .list').find('a').eq(1).addClass('cur').siblings().removeClass('cur');
	} else if(location.href.indexOf('search.html') != -1) {
		$('.header .list').find('a').eq(2).addClass('cur').siblings().removeClass('cur');
	} else if(location.href.indexOf('school.html') != -1) {
		$('.header .list').find('a').eq(3).addClass('cur').siblings().removeClass('cur');
	} else if(location.href.indexOf('download.html') != -1) {
		$('.header .list').find('a').eq(4).addClass('cur').siblings().removeClass('cur');
	} else if(location.href.indexOf('jobs.html') != -1) {
		$('.header .list').find('a').eq(5).addClass('cur').siblings().removeClass('cur');
	}
}

function events(){
	$('.wrap').on('click','.login',function(){
		$('.cover').show().find('.login').show().siblings('.regist').hide();
	})
	$('body').on('click','.cover .bg',function(){
		$('.cover').hide();
	})
	$('body').on('click','.cover #showRegist',function(){
		$('.cover').show().find('.regist').show().siblings('.login').hide();
	})
	$('body').on('click','.cover .hasRegist',function(){
		$('.cover').show().find('.login').show().siblings('.regist').hide();
	})
	
}
