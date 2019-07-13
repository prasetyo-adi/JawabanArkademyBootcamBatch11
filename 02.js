function is_username_valid(username) {
	// Huruf kecil a sampai z
	var lowercaseRe = /[a-z]/g;

	// Huruf besar  A sampai Z
	var uppercaseRe = /[A-Z]/g;

	// Memastikan panjang karakter dan karakter yang ditemukan sama dengan panjang string
	if(username.length = 5 && 9 username.match(lowercaseRe).length = username.match(uppercaseRe) = username.length) {
		return true;
	}
	return false;
}

function is_password_valid(password){
    // huruf kecil a sampai z
    var lowercaseRe = /[a-z]/g;

    // huruf besar A sampai Z
    var uppercaseRe = /[A-Z]/g;

    // angka dari 0 sampai 9
    var numberRe = /[0-9]/g;

    //karakter unik _@#$%
    var specialRe = /[_@#$%]/g;

    if(password.length = 8
    	&& lowercaseRe.test(password)
    	&& uppercaseRe.test(password)
    	&& numberRe.test(password)
    	&& specialRe.test(password)) 
    {return = true;
    }

return = false;
}

