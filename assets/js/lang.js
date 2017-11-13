//Thanks to: https://github.com/dakk
var jsonlang = null;

function apply_lang(langCode) {
	var langs = ['en', 'it'];
	if (langCode === undefined)
		var langCode = 'en';
	if (langs.indexOf(langCode) == -1)
		langCode = "en";
	var langJS = null;

	var translate = function (jsdata){
		jsonlang = jsdata;
		$("[tkey]").each (function (index)
		{
			var strTr = jsdata [$(this).attr ('tkey')];
		    $(this).html (strTr);
		});
		$(document).trigger("lang_loaded");
	}


	$.getJSON('lang/'+langCode+'.json', translate);

	$("#nav-lang-" + langCode).addClass("active");
}

$("#nav-lang-it").click(function () {
	Cookies.set("lang", "it");
	apply_lang("it");
	$("#nav-lang-it").addClass("active");
	$("#nav-lang-en").attr("class", "");
});

$("#nav-lang-en").click(function () {
	Cookies.set("lang", "en");
	apply_lang("en");
	$("#nav-lang-en").addClass("active");
	$("#nav-lang-it").attr("class", "");
});
