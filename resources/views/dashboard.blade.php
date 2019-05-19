<!DOCTYPE html>
<html lang="es-MX" >
<head>
    <meta charset="UTF-8">
    <title>To do list by Gabriel Chavez</title>
    <meta charset="utf-8">
    <meta name="author" content="https://gabrielchavez.me">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://use.fontawesome.com/478e097f2b.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato:300|Oswald" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>To-Do List</h1>
    <div id="app" class="container">
        <div class="row">
            <form  action="post" v-on:submit.prevent="addTask">
                {{ csrf_field() }}
                <input placeholder="Ingresa una tarea" type="text" id="task" v-model="task" name="task" class="col-xs-8 col-sm-9">
                <div class="input-buttons col-xs-4 col-sm-3">
                    <button type="submit" class="add-todo"><i class="fa fa-plus fa-2x"></i></button>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="error">
                <a href="#"><i class="fa fa-times"></i></a>
                <p>Tienes que ingresar una tarea</p>
            </div>
            <ul v-for="task in tasks" class="todo-list col-xs-12">
                <li class="todo">@{{ task.task }}
                    <span>
                        <a v-on:click="completeTask(task)" href="#" class="check"><i class="fa fa-check fa-lg"></i></a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>
</html>
