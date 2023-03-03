<?php

header("Access-Control-Allow-Origin: *");

    $user = 'root';
    $pass = 'Tigerman6';
    $host = 'localhost';
    $dn_name = 'otter_chat';

    $db = new mysqli($host, $user,$pass, $db_name) or die ("die connection failed");

?>