<?php
// Obtain the data: name, username and password from the form
$input1 = $_POST['uname'];
$input2 = $_POST['password'];
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0;url=pages/index.html">
<title>WinkMeUp</title>
<script language="javascript">
    window.location.href = "pages/index.php?user=<?php echo $input1 ?>"
</script>
</head>
<body>
Go to <a href="pages/index.html">/pages/index.html</a>
</body>
</html>

