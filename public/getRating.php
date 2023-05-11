<?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: https://www.fgentili.it');
    $con = mysqli_connect("localhost", "root", "", "portfolio");
    $query = "SELECT AVG(`vote`) AS `avg` FROM `rating`";
    $res = mysqli_query($con, $query);
    echo "{avg:".round(mysqli_fetch_assoc($res)['avg'],1)."}";
?>