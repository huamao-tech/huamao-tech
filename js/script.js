document.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var headerShadow = document.getElementById("header");
    if (headerShadow != null)
        if (scrollTop > 10)
            headerShadow.classList.replace("header-absolute","header-fixed")
        else
            headerShadow.classList.replace("header-fixed","header-absolute")
    else
        var headerShadow = document.getElementById("other-header");
        if (scrollTop > 10)
            headerShadow.classList.add("header-fixed")
        else
            headerShadow.classList.remove("header-fixed")
}

feather.replace()

var tesObj = document.getElementsByName("carousel");
	//设置 value 值为 0 选中
	for(var i=0; i < tesObj.length; i++){
		if (tesObj[i].value=="0"){
			tesObj[i].checked = true;
			break;
			}
	}
