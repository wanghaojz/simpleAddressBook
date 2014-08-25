<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Simple Address Book</title>
    <link type="text/css" rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"/>
    [@webBundle path="/js/" type="js"/]
    [@webBundle path="/css/" type="css"/]
    <script>
        var contextPath = "${_r.contextPath}";
    </script>
</head>

<body>
<div class="container">
</div>
 <script type="text/javascript">
     $(function(){
        brite.display("MainView",".container");
     });
 </script>
</body>
</html>