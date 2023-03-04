<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
header("Access-Control-Allow-Origin: *");

    $user = 'root';
    $pass = 'Tigerman6';
    $host = 'otternonesenses.co.za';
    $db_name = 'otter_chat';

    $db = mysqli_connect($host, $user,$pass, $db_name)

    if ($db = mysqli_connect($host, $user,$pass, $db_name)) {
        echo "connected successfully";
    } else {
        die("connection fauiled");
    }

?>