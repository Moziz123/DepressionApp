<html>
<body>
<?php
session_start();
$_SESSION['formdata1'] = $_POST;
?>

Welcome <?php echo $_POST["firstname"]; ?><br>
Last name: <?php echo $_POST["lastname"]; ?>

</body>
</html> 
