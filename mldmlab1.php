<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab1</title>
    <link rel = "stylesheet" href = "styles/lab1Style.css">
    <script type = "text/javascript" src = "scripts/script.js"> </script>
<body>
    <h1> Лабараторная работа 1 </h1>

    <form action="" method="">

        <table>
            <tr>
                <td>Массив 1: </td>
                <td><input type = "text" id = "Array1" value = "" /></input></td>
            </tr>

            <tr>
                <td>Массив 2: </td>
                <td><input type = "text" id = "Array2" value = "" /></input></td>
            </tr>

            <tr>
                <td><input class = "myButton" type = "button" value = "Объеденение" onclick = "merge();"/></td>
                <td><input class = "myButton" type = "button" value = "Пересечение" onclick = "intersect();"/></td>

            </tr>
            <tr>
                <td><input class = "myButton" type = "button" value = "Дополнение" onclick = "addition();"/></td>
                <td><input class = "myButton" type = "button" value = "Симметричная разность" onclick = "symmetricallySubtract();"/></td>
            </tr>
            <tr>
                <td colspan = "2"><output id = "OutputText"/></output></td>
            </tr>
        </table>
        <!-- Hello -->

    </form>

    <?php
        function printNumbers()
        {
            for($i = 0; $i < 5; $i++)
            {
                echo "Hello " . $i . "<br>";
            }
        }
        //printNumbers(20);
    ?>
</body>
</html>