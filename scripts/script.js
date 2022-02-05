
//var array1;

function validate(str)
{
    if(str.length > 0)
    {
        return true
    }else
        return false
}

function isAlpha(array)
{
    for(let x = 0; x < array.length; x++)
        for(let y = 0; y < array[x].length; y++)
        {
            if(array[x][y] <= 'a' || array[x][y] >= 'z')
            {
                return false;
            }
        }
    return true;
}



function calculate()
{
    let str = document.getElementById("mass3");

    document.getElementById("OutputText").innerText = "Гыы";


    /*
    let result = true;
    if(validate(str.value))
    {
        let array = str.value.split(' ');
        if(isAlpha(array))
            alert("The text entered right! Congratulations!");
        else
            alert("The text entered wrong!");
    }else
        alert("Array must be filled!");
     */
}

function removeRepetitions(array2D)
{
    for(let x = 0; x < array2D.length; x++)
        for(let y = 0; y < array2D.length; y++)
        {
            if((x != y) && (array2D[x] == array2D[y]))
            {
                array2D.splice(y, 1);
                y--;
            }
        }
}



function merge()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");
    let result = array1.value + ' ' + array2.value;

    result = result.split(' ');
    removeRepetitions(result);

    document.getElementById("OutputText").innerText = result;
}


