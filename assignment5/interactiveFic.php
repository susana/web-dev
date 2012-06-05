#!/usr/local/bin/php
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Interactive Fiction</title>
    <link href="http://schoolwebserver.edu/idef/web-dev/interactiveFic.css" rel="stylesheet" type="text/css"> 
</head>

 
<body bgcolor=#C3E780>
<div id="content">
<?php
	/* 	GLOBAL VARIABLES */	
	# Narrative components vars
	$noun1 = $_POST['noun1'];
	$adverb1 = $_POST['adverb1'];
	$title = $_POST['title'];
	$time = $_POST['time'];
	$location = $_POST['location'];
	$transport = $_POST['transport'];
	$dialogue = $_POST['dialogue'];
	$openEnding = $_POST['openEnding'];
	
	# Page display vars
	$bgColor = $_POST['bgColor'];
	$fontColor = $_POST['fontColor'];
	$fontFam = $_POST['fontFam'];
	$fontSize = $_POST['fontSize'];
	$headerColor = $_POST['headerColor'];
	
	# Title of narrative
	echo "<h3 id=\"ficTitle\">$title</h3>\n";
	
	
	/* FUNCTIONS */
	function validateFields( )
	{
		global $adverb1;
		$returnVal = true;
		
		foreach( $_POST as $key=>$var )
		{
			# echo error message if ANY field is empty
			if ( !isset( $_POST[ $key ] ) || $_POST[ $key ] == "" )
			{
				if( $key == "noun1" )
					$key = "creature";
				if( $key == "adverb1" )
					$key = "adverb";				
				echo "ERROR: An empty field(".$key.") was detected.<br />\n";
				$returnVal = false;
			}
			else
			{
				# make sure the adverb ends in -ly
				$ending = substr( $adverb1, -2 );
				if( $key == "adverb1" && $ending != "ly" && $ending != "LY" )
				{
					echo "ERROR: Adverbs end in -ly!<br />\n";
					$returnVal = false;
				}
			}
		}
		if( $returnVal == true )
			return true;
		else
			return false;
	}	
	
	# JavaScript to set style of page output
	function setDisplay( )
	{
		global $bgColor, $fontColor, $fontFam, $fontSize, $headerColor;
		echo "<script type=\"text/javascript\">\n";
		echo "\tdocument.body.style.background = \"$bgColor\";\n";
		echo "\tdocument.getElementById(\"ficTitle\").style.color = \"$headerColor\";\n";
		echo "\tdocument.getElementById(\"content\").style.background = \"$bgColor\";\n";
		echo "\tdocument.getElementById(\"content\").style.color = \"$fontColor\";\n";
		echo "\tdocument.getElementById(\"content\").style.fontFamily = \"$fontFam\";\n";
		echo "\tdocument.getElementById(\"content\").style.fontSize = \"$fontSize\";\n";
		echo "\tdocument.getElementById(\"content\").style.textTransform = \"none\";\n";
		echo "</script>\n \n";
	}
		
	# echo narrative using user's fields
	function echoNarrative( )
	{
		global $noun1, $adverb1, $time, $location, $transport, $dialogue, $openEnding;
		echo "<br /><br />\n";
		echo "It was a chilly $time in the city when the doors of your home closed behind you. \n";
		if( $time == "morning" )
			echo "The streets were eerily vacant as you made your way to your \n";
		else if( $time == "afternoon" )
			echo "You zigzagged your way through the  afternoon crowds as you made your way to your \n";
		else # night
			echo "You traversed the sidewalks and streets carefully, both heavy with night traffic, as you made your way to your \n";
		if( $transport == "walk" )
			echo "class. Running 10 minutes late already, you turn the corner of the block, \npicking up your pace when you suddenly bump into a door. \n";
		else if( $transport == "bus" )
			echo "usual bus. Eventually you hop on the bus. Soon enough you're at your destination. \nYou turn to thank the driver and step off the vehicle. You look up and suddenly your gaze is met by a door. \n";
		else # train
			echo "usual train. Eventually you hop on the train. Soon enough you're at your destination. \nNoticing the time, you run up the stairs to the fresh air above. When you look up, your gaze is met by a door. \n";
		echo "After a few seconds of consideration, you place your hand on the door's knob and turn it $adverb1. \n";
		echo "A wash of light blinds you for some seconds but then you can see it. \nThe place you've seen in your dreams... $location, land of the $noun1. \n";
		echo "It's $time here, like it was in your world. Overwhelmed by the sights and sound of this new place, \nyou begin to run, shouting to anyone or anything that may hear: \"$dialogue!\" \n";
		if( $openEnding == false )
		{
			echo "<br /><br />All around you it feels as though the air is trembling. What could it be? \n";
			echo "You look to the distance and see a $noun1 approaching. When it gets close enough it waits. \n";
			echo "Slowly, you mount the creature's back and in the blink of an eye it's off, moving in the direction of a castle like structure. \n";
			echo "Years later you become the ruler of $location, marry and watch the people thrive under joint rule. You and your spouse live happily ever after.\n"; 
		}
	}
	
	function main( )
	{
		$formIsComplete = validateFields( );
		if( $formIsComplete == true )
		{
			setDisplay( );
			echoNarrative( );
		}
		else
			echo "Click the back button on your browser and complete the form correctly.<br />\n";
	}
	
	# Execute main
	main( );
?>
</div>
</body> 
</html>