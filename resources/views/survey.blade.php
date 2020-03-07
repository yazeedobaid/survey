<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Survey</title>

        <link rel="stylesheet" type="text/css" href="/css/app.css" />
        <script src="/js/app.js" defer></script>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    </head>
    <body>
    <main id="app">
        <survey-component></survey-component>
    </main>
    </body>
</html>
