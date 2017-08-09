<?php
    require_once '../connection.php';
    $con1 = new Connection();
    $results = $con1->select('l40_screens');
    $resultsCount = $results->rowCount();
    
    
    $i = 0;
    echo "[";
    while ($row = $results->fetch())
    {
        echo "{";

        echo  '"id":';
        echo $row["id"];
        echo ",";

        echo '"price":';
        echo $row['price'];
        echo ",";

        echo '"model":';
        echo '"';
        echo $row['model'];
        echo '"';
        echo ",";
        
        echo '"size":';
        echo $row['size'];
        echo ",";

        echo '"manufacturer":';
        echo '"';
        echo $row['manufacturer'];
        echo '"';


        echo "}";
        if ($resultsCount -1> $i)
            echo ",";
        $i++;
    }

    echo "]";

?>
