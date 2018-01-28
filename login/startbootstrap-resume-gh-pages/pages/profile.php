<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
</head>
<body background="img/wall.jpg">

<h1 style="text-align:center">Winky profile</h1>

<div class="card">
  <img src="img/lol.jpg" alt="John" style="width:100%">
  <h1>EL ZEN TEAM: 500 winks</h1>
  <p class="title"></p>
  <h2 style="color:black">Love rock and roll music! Get ready to wake up to some loud music!</h2>
  <div style="margin: 24px 0;">
    <a href="#"><i class="fa fa-music"></i></a> 
    <a href="#"><i class="fa fa-instagram"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
 </div>
 <a href="index.php?user=<?php echo $_GET['user'];?>"><p><button>Go back</button></p></a>
</div>

</body>
</html>
