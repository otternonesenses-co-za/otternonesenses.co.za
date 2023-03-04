<?php

    include("conf.php");

    if (isset($_GET['user']) && isset($_GET['pass'])) {
        $username = $_GET['user'];
        $password = $_GET['pass'];

        $query = "SELECT * FROM accounts WHERE username ='$username' AND password ='$password'";

        if ($res = $db->query($query)) {
            $row = $res->fetch_assoc();
            echo json_encode($row);
        }
    }

?>