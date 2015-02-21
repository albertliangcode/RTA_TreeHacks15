<html>
<head>
  <meta charset="utf-8">

  <title>My Parse App</title>
  <meta name="description" content="My Parse App">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.3.5.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/script.js"></script> 
  <script src="js/ui.js"></script>
  <script>
    $(function(){
      $("#header").load("header.html");
    });
    </script>
</head>
<body>
  <div class="container-fluid">
    <div id="header"></div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Classroom code">
          <span class="input-group-btn"> 
            <button type="button" class="btn btn-default" id="classroom-enter">Enter</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
