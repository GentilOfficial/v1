<?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: https://www.fgentili.it');
    if(isset($_POST["value"])) {
        $value = $_POST["value"];

        $con = mysqli_connect("localhost", "root", "", "portfolio");
        
        $query = "INSERT INTO `rating` (`Vote`) VALUES ('$value')";
        $res = mysqli_query($con, $query);
        
        var_dump($res);
    } else {
        echo 'error';
    }

?>