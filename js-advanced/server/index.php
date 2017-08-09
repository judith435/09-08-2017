<?php
    require_once 'connection.php';
    $con1 = new Connection();
    $results = $con1->select('l40_screens');


    while ($row = $results->fetch())
    {
        
        echo  $row["id"] ." ". $row['price'] . " " . $row['model'] ." " .
         $row['size']." " . $row['manufacturer']. "<br>";
    }
  

?>
