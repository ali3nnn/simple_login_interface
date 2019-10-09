<?php session_start(); ?>
<?php

require 'config.php';
$user = $_SESSION['username'];
if (!$user) {
  header('Location: login.php');
  exit;
}

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Zentiva DEMO</title>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <img src="http://www.ionvalley.ro/wp-content/uploads/2019/06/logo_1-3.png" height="45" class="d-inline-block align-top" alt="">
      </a>
      <button type="button" class="btn btn-warning">
        <a href="logout.php">Logout</a>
      </button>
    </nav>

    <div class="container-custom" style="max-width: 80%; margin: 0 auto;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <br>
            <h1>Anything you've ever wished</h1>
          </div>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src='js/cdn.js'></script>
    <script type="text/javascript" src="js/gauge.min.js"></script>
    <script type="text/javascript" src='js/chart.js'></script>
    <script type="text/javascript" src='js/Chart.min.js'></script>
    <script src="js/momentum.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </body>
</html>
