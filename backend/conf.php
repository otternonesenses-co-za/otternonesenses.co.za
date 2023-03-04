<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
header("Access-Control-Allow-Origin: *");

    $user = 'ciaran';
    $pass = '*4YUkrZgbgUnhVC5';
    $host = 'localhost';
    $db_name = 'otter_chat';

    $db = new mysqli($host, $user, $pass, $db_name);
    if (!$db) {
        die ("connection failed");
    }

?>