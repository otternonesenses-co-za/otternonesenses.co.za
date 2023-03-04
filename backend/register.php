<?php

    include('conf.php');

    if (isset($_GET['name']) && isset($_GET['surname']) && isset($_GET['user']) && isset($_GET['pass'])) {
        $name  = $_GET['name'];
        $surname = $_GET['surname'];
        $username = $_GET['user'];
        $password = $_GET['pass'];

        $query = "INSERT INTO accounts (name, surname, username, password) VALUES ('$name','$surname','$username','$password)";
        $res = $db->query($query);
    }

?>