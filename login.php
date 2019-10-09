<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Demo</title>
    <link href="css/bootstrap.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Include the above in your HEAD tag -->
  </head>
  <body>



    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img src="http://www.ionvalley.ro/wp-content/uploads/2019/06/logo_1-3.png" id="icon" alt="User Icon" />
        </div>

        <!-- Login Form -->
        <form class="login-container" action="login.php" method="post" autocomplete="off">
          <input class="charInput" type="text" name="username" value="" placeholder="Username" id="login" class="fadeIn second">
          <input class="charInput" type="password" name="password" value="" placeholder="Password" id="password" class="fadeIn third">
          <input type="submit" name="login" value="Log in" class="fadeIn fourth">
        </form>


        <?php


        if(isset($_POST["login"])) {

          require "config.php";
          $user = $_POST["username"];
        	$pass = $_POST["password"];
          $mysql_qry = "SELECT * from credentials where username='$user' AND password=password('$pass')";
          // echo $mysql_qry;
          $result = mysqli_query($conn, $mysql_qry);

          if ( mysqli_num_rows($result) > 0 ) {
            // echo 'Hello '.$user."!";
            $_SESSION['username'] = $user;
            $_SESSION['password'] = $password;
            header("Location: index.php");
            exit;
          } else {
            echo '<div class="loginFail fadeIn fifth">Login failed!</div>';
          }

        }

        ?>

      </div>
    </div>


    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </body>
</html>
