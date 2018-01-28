<?php


// Obtain the data: name, username and password from the form
$input1 = $_POST['input1'];
$input2 = $_POST['input2'];
$input3 = $_POST['input3'];

?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/stylish-portfolio.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

</head>

<body>

    <!-- Header -->
    <header id="top" class="header">
        <div class="text-vertical-center">
            <h1 style="color:CDD5E5">Welcome to WinkMeUp <?php echo $input1 ?>! <br> Kick off the day the FUN way! </h1>
            <br>
            <a href="http://localhost/hackathon" class="btn btn-dark btn-lg">Sign in</a>
        </div>
    </header>
</body>

</html>
<?php
?>