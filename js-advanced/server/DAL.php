<?php
namespace DAL; 
require_once 'connection.php';

class SqlTable {
    private $table_name;
}

class Screens extends SqlTable {

    function __construct() {
        $table_name = 'l40_screens';
    }

    public function selectFromScreens($_params) {
        $tempCon = new Connection();
        return $tempCon->select($this->table_name, $_params);
    }
}

?>