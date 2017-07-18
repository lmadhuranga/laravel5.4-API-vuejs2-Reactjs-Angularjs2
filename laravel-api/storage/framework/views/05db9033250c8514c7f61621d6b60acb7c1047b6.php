<!doctype html>
<html lang="<?php echo e(config('app.locale')); ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
        <title>Laravel</title> 

    </head>
    <body>
      	<div id="root">
	      	<form method="POST" action="../projects" @submit.prevent="onSubmit">
				<div class="form-group">
					<label for="name">Name</label>
					<input type="input" class="form-control" id="name" placeholder="Name" v-model="name">
					<span class="help is-danger" v-text="errors.get('name')"></span>
				</div>
				<div class="form-group">
					<label for="description">Decription</label>
					<input type="input" class="form-control" id="description" placeholder="Decription" v-model="description">
					<span class="help is-danger" v-text="errors.get('description')"></span>
				</div>
				 
				<button type="submit" class="btn btn-default">Submit</button>
			</form>
      	</div>
      <script type="text/javascript" src="../js/axios.js"></script> 
      <script type="text/javascript" src="../js/vue.js"></script> 
      <script type="text/javascript" src="../js/app.js"></script> 
    </body>
</html>
