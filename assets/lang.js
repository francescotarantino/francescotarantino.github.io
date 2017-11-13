//Thanks to: https://github.com/dakk

var langs = ['en', 'it'];
var langCode = '';
var langJS = null;
var jsonlang = null;


var translate = function (jsdata){
	jsonlang = jsdata;
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
	$(document).trigger("lang_loaded");
}


langCode = navigator.language.substr (0, 2);

if (langs.indexOf(langCode) == -1)
	langCode = "en";

$.getJSON('lang/'+langCode+'.json', translate);
