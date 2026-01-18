<?php
$host = "sql301.infinityfree.com" ;
$dbname = "if0_40916254_visitor_portfolio";
$username = "if0_40916254" ;
$password = "dB6tsLpVWC76Mpu" ;
$charset = "utf8" ;
$errConn = false ;
    try {
        $conn =  new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) ;
    }
    catch (PDOException $e) {
        $errConn = true ;
    }
?>