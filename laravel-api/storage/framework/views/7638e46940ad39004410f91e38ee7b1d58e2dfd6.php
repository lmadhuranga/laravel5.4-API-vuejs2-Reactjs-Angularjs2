<!doctype html>
<html lang="<?php echo e(config('app.locale')); ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
        <title>Laravel</title> 

    </head>
    <body>
      <div id="root">
        <h1>jlsdjflsdj</h1>
        <ul>
          <li v-for="skill in skills">{{ skill }}</li>
        </ul>
      </div>
      <script type="text/javascript" src="./js/axios.js"></script> 
      <script type="text/javascript" src="./js/vue.js"></script> 
      <script type="text/javascript" src="./js/app.js"></script> 
    </body>
</html>
