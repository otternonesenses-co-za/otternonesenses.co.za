<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
header("Access-Control-Allow-Origin: *");

    $user = 'root';
    $pass = 'Tigerman6';
    $host = 'localhost';
    $db_name = 'otter_chat';

    if ($db = mysqli_connect($host, $user,$pass, $db_name)) {
        
    } else {
        die("connection fauiled");
    }

?>