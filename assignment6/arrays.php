#!/usr/local/bin/php
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Arrays and Art</title>
    <link href="http://schoolwebserver.edu/idef/web-dev/arrays.css" rel="stylesheet" type="text/css" /> 
</head>

 
<body bgcolor="#2C2C2C">
	<?php
		/* 	GLOBAL VARIABLES */
		$length = 16;
		$width = 13;
		
		# Colors
		$transparent = "pixel_transparent.gif";
		$lightGreen = "pixel_lightGreen.gif";
		$brown = "pixel_brown.gif";
		$orange = "pixel_orange.gif";
		$yellow = "pixel_yellow.gif";
		$black = "pixel_black.gif";
		$pink = "pixel_pink.gif";
		
		# Zelda
		$linkImgArr = array(# 0
							array( $transparent, $transparent, $transparent, $transparent, 
									$lightGreen, $lightGreen, $lightGreen, $lightGreen, 
									$lightGreen, $lightGreen, $transparent, $transparent,
									$transparent ),
							# 1
							array( $transparent, $transparent, $transparent, $lightGreen, 
									$lightGreen, $lightGreen, $lightGreen, $lightGreen, 
									$lightGreen, $lightGreen, $lightGreen, $transparent,
									$transparent ),
							# 2
							array( $transparent, $orange, $transparent, $lightGreen, 
									$brown, $brown, $brown, $brown, 
									$brown,  $brown, $lightGreen, $transparent,
									$orange ),
							# 3
							array( $transparent, $orange, $transparent, $brown, 
									$brown, $brown, $brown, $brown, 
									$brown, $brown, $brown, $transparent,
									$orange ),
							# 4
							array( $transparent, $orange, $orange, $brown, 
									$orange, $lightGreen, $orange, $orange, 
									$lightGreen, $orange, $brown, $orange,
									$orange ),
							# 5
							array( $transparent, $orange, $orange, $brown, 
									$orange, $brown, $orange, $orange, 
									$brown, $orange, $brown, $orange,
									$orange ),
							# 6
							array( $transparent, $transparent, $orange, $orange, 
									$orange, $orange, $orange, 
									$orange, $orange, $orange, $orange, $orange,
									$brown ),
							# 7
							array( $transparent, $transparent, $transparent, $lightGreen, 
									$orange, $orange, $brown, $brown, 
									$orange, $orange, $lightGreen, $lightGreen,
									$brown ),
							# 8
							array( $transparent, $brown, $brown, $brown, 
									$brown, $brown, $orange, $orange, 
									$orange, $lightGreen, $lightGreen, $lightGreen,
									$orange ),
							# 9
							array( $brown, $brown, $orange, $brown, 
									$brown, $brown, $brown, $lightGreen, 
									$lightGreen, $lightGreen, $lightGreen, $lightGreen,
									$orange ),
							# 10
							array( $brown, $orange, $orange, $orange, 
									$brown, $brown, $orange, $brown, 
									$brown, $lightGreen, $lightGreen, $brown,
									$transparent ),
							# 11
							array( $brown, $brown, $orange, $brown, 
									$brown, $brown, $orange, $lightGreen, 
									$brown, $brown, $brown, $lightGreen,
									$transparent ),
							# 12
							array( $brown, $brown, $orange, $brown, 
									$brown, $brown, $orange, $brown, 
									$brown, $lightGreen, $lightGreen, $lightGreen,
									$transparent ),
							# 13
							array( $brown, $brown, $brown, $brown, 
									$brown, $brown, $orange, $lightGreen, 
									$lightGreen, $lightGreen, $brown, $transparent,
									$transparent ),
							# 14
							array( $transparent, $orange, $orange, $orange, 
									$orange, $orange, $transparent, $transparent, 
									$brown, $brown, $brown, $transparent,
									$transparent ),
							# 15
							array( $transparent, $transparent, $transparent, $transparent, 
									$transparent, $transparent, $transparent, $transparent, 
									$transparent, $brown, $brown, $transparent,
									$transparent )
		);
		
		# Princess Zelda
		$zeldaImgArr = array(# 0
							array( $transparent, $transparent, $transparent, $transparent, 
									$brown, $brown, $brown, $brown, 
									$brown,  $brown, $transparent, $transparent,
									$transparent ),
							# 1
							array( $transparent, $transparent, $transparent, $yellow, 
									$brown, $brown, $yellow, $yellow, 
									$brown,  $brown, $yellow, $transparent,
									$transparent ),
							# 2
							array( $transparent, $transparent, $transparent, $yellow, 
									$brown, $brown, $brown, $brown, 
									$brown,  $brown, $yellow, $transparent,
									$transparent ),
							# 3
							array( $transparent, $transparent, $brown, $brown, 
									$brown, $black, $yellow, $yellow,  
									$black, $brown, $brown, $brown, 
									$transparent ),
							# 4
							array( $transparent, $transparent, $brown, $brown, 
									$yellow, $black, $yellow, $yellow,  
									$black, $yellow, $brown, $brown, 
									$transparent ),
							# 5
							array( $transparent, $transparent, $brown, $brown, 
									$yellow, $yellow, $yellow, $yellow,  
									$yellow, $yellow, $brown, $brown, 
									$transparent ),
							# 6
							array( $transparent, $transparent, $brown, $brown, 
									$brown, $yellow, $orange, $orange,  
									$yellow, $brown, $brown, $brown, 
									$transparent ),
							# 7
							array( $transparent, $transparent, $brown, $brown, 
									$pink, $pink, $yellow, $yellow,  
									$pink, $pink, $brown, $brown, 
									$transparent ),
							# 8
							array( $transparent, $brown, $brown, $yellow, 
									$pink, $pink, $pink, $pink,  
									$pink, $pink, $yellow, $brown, 
									$brown ),
							# 9
							array( $transparent, $brown, $brown, $yellow, 
									$yellow, $pink, $pink, $pink,  
									$pink, $yellow, $yellow, $brown, 
									$brown ),
							# 10
							array( $transparent, $brown, $brown, $yellow, 
									$pink, $brown, $yellow, $yellow,  
									$brown, $pink, $yellow, $brown, 
									$brown ),
							# 11
							array( $transparent, $yellow, $yellow, $pink, 
									$pink, $pink, $pink, $pink,  
									$pink, $pink, $pink, $yellow, 
									$yellow ),
							# 12
							array( $transparent, $brown, $brown, $pink, 
									$pink, $pink, $pink, $pink,  
									$pink, $pink, $pink, $brown, 
									$brown ),
							# 13
							array( $transparent, $brown, $pink, $pink, 
									$pink, $pink, $pink, $pink,  
									$pink, $pink, $pink, $pink, 
									$brown ),
							# 14
							array( $transparent, $brown, $pink, $pink, 
									$pink, $pink, $pink, $pink,  
									$pink, $pink, $pink, $pink, 
									$brown ),
							# 15
							array( $pink, $pink, $pink, $pink, 
									$pink, $pink, $pink, $pink,  
									$pink, $pink, $pink, $pink, 
									$pink )
		);
		
		/* 	FUNCTIONS */
		/* 
			Iterates through two-dimensional array and prints each image into
			its own cell in the table
		*/
		function createImage( $imgArr )
		{
			global $length, $width;
			
			for( $row = 0; $row < $length; $row++ )
			{
				echo "\t\t\t\t<tr>\n";
				for( $col = 0; $col < $width; $col++ )
				{
					echo "\t\t\t\t\t<td>\n";
					echo "\t\t\t\t\t\t<img src=\"http://schoolwebserver.edu/idef/".$imgArr[$row][$col]."\" alt=\"\" />\n";
					echo "\t\t\t\t\t</td>\n";
				}
				echo "\t\t\t\t</tr>\n";
			}
		}
	?>	
	<div id="container">
		<div id="header">
			<h3>
			Assignment 6 - Using a Two-dimensional Array<br />
			Susana C Delgadillo
			</h3>
		</div>
		
		<div id="link">
			<table>
				<?php
					# Print Link image
					createImage($linkImgArr);
				?>
			</table>
		</div>
		
		<div id="zelda">
			<table>
					<?php
						# Print Zelda image
						createImage($zeldaImgArr);
					?>
			</table>
		</div>
		
		<div id="footer">
			<h3>
			Link and Princess Zelda<br />
			from the Legend of Zelda<br />
			<a href="http://schoolwebserver.edu/idef/index.html">Return Home</a>
			</h3>
		</div>
	</div>
</body> 
</html>