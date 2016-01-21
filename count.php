<?php
   
   $dbhost = "172.20.217.216";
   $dbuser = "root";
   $dbpass = "";
   $dbname = "flipscm";
   
   //Connect to MySQL Server
   mysql_connect($dbhost, $dbuser, $dbpass);
   
   //Select Database
   mysql_select_db($dbname) or die(mysql_error());
   
   //build query
   $query = "SELECT * FROM seller_details";

   //Execute query
   $qry_result = mysql_query($query) or die(mysql_error());
   
   // Insert a new row in the table for each person returned
   while($row = mysql_fetch_array($qry_result)) {
      echo "<br/>";
      echo " Seller: ".$row['seller_name']." ratings:".$row['review_rating'];
      echo "View count: ".$row['views'];
      echo "Engagement: ".$row['engagement'];
      echo "<br/>";
      echo "<br/>";
   }

?>
