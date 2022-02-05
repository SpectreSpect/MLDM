<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab1</title>
    <link rel = "stylesheet" href = "/styles/lab1Style.css">
    <script type = "text/javascript" src = "scripts/script.js"> </script>
<body>
    <h1> Lab1 </h1>

    <form action="" method="">

        <table>
            <tr>
                <td>Array 1: </td>
                <td><textarea id = "Array1" value = "" /></textarea><br> </td>
            </tr>

            <tr>
                <td>Array 2: </td>
                <td><textarea id = "Array2" value = "" /></textarea></td>
            </tr>

            <tr>
                <td><input type = "button" value = "Объеденение" onclick = "merge();"/></td>
                <td><input type = "button" value = "Пересечение" onclick = "intersect();"/></td>
                <td><input type = "button" value = "Дополнение" onclick = "add();"/></td>
                <td><input type = "button" value = "Симметричная разность" onclick = "symmetricallySubtract();"/></td>
            </tr>
            <tr>
                <td colspan = "2"><output id = "OutputText""/> Hello  </output></td>
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