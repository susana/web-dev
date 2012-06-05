/* JavaScript file for zodiac.html */


// global vars for month and day of birth
var month;
var day;

// global var for number of days per month
var numDaysPerMon = new Array(
	0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
// global var for fortunes
var fortunes = new Array();
fortunes[ 0 ] = "Invalid birthdate. Try again!";
fortunes[ 1 ] = "You're an Aquarius!<br/>" +
	"You will find money in the back pocket of your favorite pants.";
fortunes[ 2 ] = "You're a Pisces!<br/>" + 
	"Your driving skills will be impeccable today."; 
fortunes[ 3 ] = "You're an Aries!<br/>" + 
	"Avoid that long line and you'll find what you need elsewhere."; 
fortunes[ 4 ] = "You're a Taurus!<br/>" + 
	"Don't take the shortcut!"; 
fortunes[ 5 ] = "You're a Gemini!<br/>" + 
	"Stay inside the line."; 
fortunes[ 6 ] = "You're a Cancer!<br/>" + 
	"Watch out for a white rabbit."; 
fortunes[ 7 ] = "You're a Leo!<br/>" + 
	"Steer clear of suspiciously empty train cars."; 
fortunes[ 8 ] = "You're a Virgo!<br/>" + 
	"Don't make that purchase yet. Wait until Saturday. "; 
fortunes[ 9 ] = "You're a Libra!<br/>" + 
	"Invest in a scoop of ice cream."; 
fortunes[ 10 ] = "You're a Scorpio!<br/>" + 
	"Keep calm, things will look up."; 
fortunes[ 11 ] = "You're a Sagittarius!<br/>" + 
	"Take it a step at a time."; 
fortunes[ 12 ] = "You're a Capricorn!<br/>" + 
	"Buy a coat. A heavy, warm one!";
	
// global var array to hold zodiac symbols
var symbols = new Array();
symbols[ 0 ] = "";
symbols[ 1 ] = '<img src="aquarius.jpg" alt=""/>';
symbols[ 2 ] = '<img src="pisces.jpg" alt=""/>';
symbols[ 3 ] = '<img src="aries.jpg" alt=""/>';
symbols[ 4 ] = '<img src="taurus.jpg" alt=""/>';
symbols[ 5 ] = '<img src="gemini.jpg" alt=""/>';
symbols[ 6 ] = '<img src="cancer.jpg" alt=""/>';
symbols[ 7 ] = '<img src="leo.jpg" alt=""/>';
symbols[ 8 ] = '<img src="virgo.jpg" alt=""/>';
symbols[ 9 ] = '<img src="libra.jpg" alt=""/>';
symbols[ 10 ] = '<img src="scorpio.jpg" alt=""/>';
symbols[ 11 ] = '<img src="sagitarius.jpg" alt=""/>';
symbols[ 12 ] = '<img src="capricorn.jpg" alt=""/>';
	
// loads appropriate number of days according to the month chosen
function loadDays(form)
{
	month = form.monthList.value;
	document.menus.dayList.options.length = 1;
	for(var i=0;i<numDaysPerMon[ month ] + 1;i++)
	{
		if( i == 0 )
			document.menus.dayList.options[ i ] = new Option( "Day", i );
		else 
			document.menus.dayList.options[ i ] = new Option( i, i );
	}
}

// displays birthdate, zodiac symbol and fortune according to selected month and date
function displayFortune(form)
{
	day = form.dayList.value;
	var displayedMonth;
	
	// error check
	if( month == 0 || day == 0 )
	{
		document.getElementById( "results" ).innerHTML = fortunes[ 0 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 0 ];
	}
	// Aquarius
	else if( ( month == 1 && day >= 21 && day <= 31 ) || 
		( month == 2 && day >=  1 && day <= 19 ) )
	{
		if( month == 1 )
		{
			displayedMonth = "January";
		}
		else
		{
			displayedMonth = "February";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 1 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 1 ];
	}
	// Pisces
	else if ( ( month == 2  &&  day >= 20 && day <= 29 ) ||
			( month == 3 && day >=  1 && day <= 20 ) )
	{
		if( month == 2 )
		{
			displayedMonth = "February";
		}
		else
		{
			displayedMonth = "March";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 2 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 2 ];
	}
	// Aries
	else if ( ( month == 3 && day >= 21 && day <= 31 ) ||
			( month == 4 && day >=  1 && day <= 20 ) )
	{
		if( month == 3 )
		{
			displayedMonth = "March";
		}
		else
		{
			displayedMonth = "April";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 3 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 3 ];
	}
	// Taurus
	else if ( ( month == 4 && day >= 21 && day <= 30 ) ||
			( month == 5 && day >=  1 && day <= 21 ) )
	{
		if( month == 4 )
		{
			displayedMonth = "April";
		}
		else
		{
			displayedMonth = "May";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 4 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 4 ];
	}
	// Gemini
	else if ( ( month == 5 && day >= 22 && day <= 31 ) ||
			( month == 6 && day >=  1 && day <= 21 ) )
	{
		if( month == 5 )
		{
			displayedMonth = "May";
		}
		else
		{
			displayedMonth = "June";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 5 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 5 ];
	}
	// Cancer
	else if ( ( month == 6 && day >= 22 && day <= 30 ) ||
			( month == 7 && day >=  1 && day <= 22 ) )
	{
		if( month == 6 )
		{
			displayedMonth = "June";
		}
		else
		{
			displayedMonth = "July";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 6 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 6 ];
	}
	// Leo
	else if ( ( month == 7 && day >= 23 && day <= 31 ) ||
			( month == 8 && day >=  1 && day <= 22 ) )
	{
		if( month == 7 )
		{
			displayedMonth = "July";
		}
		else
		{
			displayedMonth = "August";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 7 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 7 ];
	}
	//Virgo
	else if ( ( month == 8 && day >= 23 && day <= 31 ) ||
			( month == 9 && day >=  1 && day <= 21 ) )
	{
		if( month == 8 )
		{
			displayedMonth = "August";
		}
		else
		{
			displayedMonth = "September";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 8 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 8 ];
	}
	// Libra
	else if ( ( month == 9 && day >= 22 && day <= 30 ) ||
			( month == 10 & day >=  1 && day <= 22 ) )
	{
		if( month == 9 )
		{
			displayedMonth = "September";
		}
		else
		{
			displayedMonth = "October";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 9 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 9 ];
	}
	// Scorpio
	else if ( ( month == 10 && day >= 23 && day <= 31 ) ||
			( month == 11 && day >=  1 && day <= 21 ) )
	{
		if( month == 10 )
		{
			displayedMonth = "October";
		}
		else
		{
			displayedMonth = "November";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 10 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 10 ];
	}
	// Sagittarius
	else if ( ( month == 11 && day >= 22 && day <= 30 ) ||
			( month == 12 && day >=  1 && day <= 21 ) )
	{
		if( month == 11 )
		{
			displayedMonth = "November";
		}
		else if( month == 12 )
		{
			displayedMonth = "December";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 11 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 11 ];
	}
	// Capricorn
	else if ( ( month == 12 && day >= 21 && day <= 31 ) ||
			( month == 1 && day >=  1 && day <= 20 ) )
	{
		if( month == 12 )
		{
			displayedMonth = "December";
		}
		else
		{
			displayedMonth = "January";
		}
		document.getElementById( "results" ).innerHTML = 
			"Your birthday is " + displayedMonth + " " + day + ".<br/>" + fortunes[ 12 ];
		document.getElementById( "symbol" ).innerHTML = symbols[ 12 ];
	}
}