<!doctype html>
<html>
<head>
<title>
Dingo.js Installer
</title>
<link rel="stylesheet" type="text/css" href="style.css">
<style>
.option{
width:23%;
margin-left:5%;
display:inline-block;
text-align:center;
background-color:white;
border-radius:5%;
border:10px black solid;
vertical-align: top;
padding:5px;
}
.option:hover{
  background-color:#bcbcbc;
}
a{
  color:black;
  text-decoration:none;
}
</style>
</head>
<body style="background-color:#efefef;">
<img src="dingo.jpg" style="border-radius:50%;width:10%;position:absolute;right:0;top:0;">
<div style="width:100%;padding:20px;margin:-10px;">
<h1>
Dingo.js Installer
</h1>
<h2 style="text-align:center;">
Welcome to the best way to create dynamic web applications in pure js.<br>
Select your setup option below to get started!
</h2>
</div>
<a href="installer.php?install=remote">
<div class="option">
<h3>
Remote Host<br>
(Recommended)
</h3>
<p>
Never have to update! All files will be loaded from the main server to ensure you are running the latest version of Dingo! Best for smaller sites or exploration.
</p>
</div>
</a>

<a href="installer.php?install=local">
<div class="option">
<h3>
Local Host
</h3>
<p>
All the files will stay located on your server. Complete control over which version you are running. This is best for companies who want to ensure their external files will be available 24/7 with no possibility of lag.
</p>
</div>
</a>

<a href="https://dingojs.github.io/headless.html">
<div class="option">
<h3>
Headless Setup
</h3>
<p>
Don't have a server running PHP? You can install a simpler version of Dingo that will still allow you to create powerful GUI applications, just without backend support.
</p>
</div>
</a>
</body>
</html>
<?php

?>
