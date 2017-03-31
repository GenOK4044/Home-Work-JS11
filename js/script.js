$(function() {
	$('span').carusel();
})

$(function() {

	var html = $('#test').html();
	var articles = [
	{
		title:'First name',
		content:'Eugene'
	},
	{
		title:'Second name',
		content:'Spirkov'
	},
	{
		title:'Work',
		content:'DTEC'
	},
	{
		title:'Telefone',
		content:'093 480 40 29'
	}
	];



	var content = tmpl(html, {
		data: articles
	});

	$('body').append(content);

})