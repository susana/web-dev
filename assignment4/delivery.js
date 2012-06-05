/* JavaScript file for delivery.html */

/* global vars for sales tax, polyester, cotton and linen material prices,
streamer price, balloon price and total order price */
var salesTax 	= .0875;
var polyPrice 	= 8.00;
var cottonPrice = 20.00;
var linenPrice  = 30.00;
var strmerPrice = 0.02;
var blnPrice    = 0.50;
var total		= 0.00;

/* global vars for user input */
var clothMaterial;
var clothNum;
var streamerLength;
var balloonNum;


/* calculates total cost of purchases */
function calcTotal( form )
{
	/* tablecloths */
	var clothMaterials = form.clothMaterial;
	for(var i=0; i<clothMaterials.length; i++)
	{
		if(clothMaterials[i].checked)
		{
			clothMaterial = clothMaterials[i].value;
		}
	}
	if( clothMaterial == "polyester" )
	{
		var clothPrice = polyPrice;	
	}
	else if( clothMaterial == "cotton" )
	{
		var clothPrice = cottonPrice;
	}
	else
	{
		var clothPrice = linenPrice;
	}
	clothNum = parseInt(form.clothNum.value);
	/* streamers */
	streamerLength = parseInt(form.streamerLength.value);
	/* balloons */
	balloonNum = parseInt(form.balloonNum.value);
	
	total = (clothPrice*clothNum)+(streamerLength*strmerPrice)+(balloonNum*blnPrice);
	var totalWithTax = total*(1+salesTax);
	document.getElementById( "total" ).innerHTML = "Total: $ " + total.toFixed(2) + "<br />With tax: $ " + totalWithTax.toFixed(2);
}

/* checks if user is returning user. if user is returning, display welcome message; if not, display data entry form */
function verifyUser()
{
	var shippingInfoFS = document.getElementById("shippingInfo");
	var welcomeMsg = document.getElementById("welcomeMsg");
	
	if( !isReturningUser() )
	{
		welcomeMsg.style.display="none";
	}
	else
	{
		shippingInfoFS.style.display="none";
		document.getElementById( "welcomeMsg" ).innerHTML = 'Welcome! Are you <b>' + getCookieVal("name") +
			'</b>?<br />If not, click the button below to enter your shipping information. <br />' + 
			'<input value="Enter shipping info" type="button" onclick="showShippingForm()" />';
	}
}

/* removes the welcome message and displays the shipping info form */
function showShippingForm()
{
	var welcomeMsg = document.getElementById("welcomeMsg");
	var shippingInfoFS = document.getElementById("shippingInfo");
	
	welcomeMsg.style.display="none";
	shippingInfoFS.style.display="inline";
}

/* sets ALL cookies from shipping information provided */
function bakeCookies( form )
{
	var fullName = form.fullName.value;
	var phone    = form.phone.value;
	var street   = form.street.value;
	var city     = form.city.value;
	var state    = form.state.value;
	var zip      = form.zip.value;
	
	/* cookie names and values */
	setCookie( "name", fullName );
	setCookie( "phone", phone );
	setCookie( "street", street );
	setCookie( "city", city );
	setCookie( "state", state );
	setCookie( "zip", zip );
}

/* creates and sets the value of a single cookie */
function setCookie( varName, val )
{
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate()+1);
	document.cookie=varName + "=" + val + ";expires=" + expireDate.toUTCString();
}

/* takes a string containing the name of a cookie and returns its value */
function getCookieVal( cookieName )
{
	var thisCookie = document.cookie.split(";");
	for(var i=0; i<thisCookie.length; i++)
	{
		if (thisCookie[i].indexOf(cookieName) != -1)
		{
			return thisCookie[i].split("=")[1];
		}
	}
}

/* checks to see if one of the cookies (name) that has been set for this site is empty. if it's empty
return false because either all the cookies have been filled or none have been. */
function isReturningUser( )
{
	var thisCookie = document.cookie.split(";");
	for(var i=0; i<thisCookie.length; i++)
	{
		if( thisCookie[i].split("=")[0] == "name" && thisCookie[i].split("=")[1] != "" )
		{
			return true;
		}
	}
	return false;
}

/* checks if cart is empty or not by checking the total price of the cart */
function checkCart(form)
{
	var validationMsg = "";
	calcTotal( form );
	
	if( total <= 0 )
	{
		validationMsg += "Error: You did not select any items to purchase!";
	}
	return validationMsg;
}

/* checks if shipping info has been entered and returns error messages if any fields are left blank */
function validateShippingInfo( form )
{
	var validationMsg = "";
	
	if ( form.fullName.value == "" )
	{
		validationMsg += "\nError: Shipping info incomplete. Please enter your full name.";
	}
	if( form.phone.value == "" )
	{
		validationMsg += "\nError: Shipping info incomplete. Please enter your phone number.";
	}        
	if ( form.street.value == "" || form.city.value == "" || form.zip.value == "" )
	{
		validationMsg += "\nError: Shipping info incomplete. Please enter your address (street, city, state and zip).";
	}
	return validationMsg;
}


/* prints receipt based on form data */
function printReceipt( form )
{
	document.write( "<h1>Thank you for your purchase!</h1>");
	document.write( "<h2>The following is your shipping and purchase information as received.</h2>" );
	document.write( "<hr />");
	
	document.write( "<h3>Shipping Information</h3>" );
	document.write( "<p><b>Name</b>: " + getCookieVal("name") + "</p>" );
	document.write( "<p><b>Phone number:</b> " + getCookieVal("phone") + "</p>" );
	document.write( "<p><b>Address:</b> " + getCookieVal("street") + "</p>" );
	document.write( "<p>" + getCookieVal("city") + ", " + getCookieVal("state") + " " + getCookieVal("zip") + "</p>" );
	document.write( "<br />" );
	
	document.write( "<h3>Purchases</h3>" );
	if( clothNum > 0 )
	{
		document.write( "<b>Number of tablecloths:</b> " + clothNum );
		document.write( "<p><b>Tablecloth Material:</b> " + clothMaterial + "<p>");
		document.write( "<p><b>Tablecloth color:</b> " + form.clothColor.value + "<p>");
	}
	if( streamerLength > 0 )
	{
		var streamerColor = form.streamerColor.value;
		document.write( "<p><b>Streamer roll length:</b> " + streamerLength + " feet<p>");
		document.write( "<p><b>Streamer color:</b> " + streamerColor + "<p>");
	}
	if( balloonNum > 0 )
	{
		var balloonColor = form.balloonColor.value;
		document.write( "<p><b>Number of balloons:</b> " + balloonNum + "<p>");
		document.write( "<p><b>Balloon color:</b> " + balloonColor + "<p>");
	}
	document.write( "<p><b>Setup assistance:</b> " );
	if( form.setup.checked )
		document.write( "Yes</p>" );
	else
		document.write( "No</p>" );
	document.write( "<p><b>Additional services:</b> " + form.requests.value + "</p>" );	
	var totalWithTax = total*(1+salesTax);
	document.write( "<p><h3>Total: $ " + total.toFixed(2) + "<br />With tax: $ " + totalWithTax.toFixed(2) + "</h3></p>" );
	document.close();
}


/* checks if there are any validation errors in the shipping info and if the cart is empty, and calls printReceipt()
if there are no errors. */
function processForm( form )
{
	var welcomeMsg = document.getElementById("welcomeMsg");
	var shippingInfoFS = document.getElementById("shippingInfo");
	/* if user is recognized as a returning user and they've selected to re-enter their data, check the fields and re-bake
	cookies */
	if( isReturningUser() && welcomeMsg.style.display == "none" && shippingInfoFS.style.display == "inline" )
	{
			var errors = checkCart( form );
			errors += validateShippingInfo( form );
			if( errors == "" )
			{
				bakeCookies( form );
				printReceipt( form );
			}
			else
			{
				alert( errors );
			}		
	}
	else if( isReturningUser() )
	{
		var errors = checkCart( form );
		if( errors == "" )
		{
			printReceipt( form );
		}
		else
		{
			alert( errors );
		}
	}
	else
	{
		var errors = checkCart( form );
		errors += validateShippingInfo( form );
		if( errors == "" )
		{
			bakeCookies( form );
			printReceipt( form );
		}
		else
		{
			alert( errors );
		}
	}
}