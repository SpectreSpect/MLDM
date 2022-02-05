
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


function find(array, element)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == element)
            return true;
    }
    return false;
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

function getIntersection(array2D1, array2D2)
{
    let resultArray2D = [];
    for(let x = 0; x < array2D1.length; x++)
    {
        if(find(array2D2,array2D1[x]))
            if(!find(resultArray2D, array2D1[x]))
            {
                resultArray2D.push(array2D1[x]);
            }
    }
    return resultArray2D;
}

function getAddition()
{

}

function getSymmetricallySubtracted(array2D1, array2D2)
{
    let resultArray2D = [];
    for(let x = 0; x < array2D1.length; x++)
    {
        if(!find(array2D2,array2D1[x]))
            if(!find(resultArray2D, array2D1[x]))
            {
                resultArray2D.push(array2D1[x]);
            }
    }

    for(let x = 0; x < array2D2.length; x++)
    {
        if(!find(array2D1,array2D2[x]))
            if(!find(resultArray2D, array2D2[x]))
            {
                resultArray2D.push(array2D2[x]);
            }
    }
    return resultArray2D;
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

function intersect()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    let result = getIntersection(splitArray1, splitArray2);
    document.getElementById("OutputText").innerText = result;
}

function add()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2")
}

function symmetricallySubtract()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    let result = getSymmetricallySubtracted(splitArray1, splitArray2);
    document.getElementById("OutputText").innerText = result;
}


