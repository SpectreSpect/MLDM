const INPUT_FORMAT = 'bcii';

function isDigit(char)
{
    if(char >= '0' && char <= '9')
        return true;
    return false;
}

function isAlpha(char)
{
    if(((char >= 'a') && (char <= 'z')) || ((char >= 'A') && (char <= 'Z')))
        return true;
    return false;
}

function validate(str, format)
{
    let isValid = true;
        if(str.length == format.length)
        {
            for(let i = 0; i < format.length; i++)
            {
                switch(format[i])
                {
                    case 'c':
                    {
                        if(!isDigit(str[i]))
                        {
                            i = format.length;
                            isValid = false;
                        }
                        break;
                    }
                    case 'b':
                    {
                        if(!isAlpha(str[i]))
                        {
                            i = format.length;
                            isValid = false;
                        }
                        break;
                    }
                    case 'i':
                    {
                        if(!isDigit(str[i]))
                        {
                            i = format.length;
                            isValid = false;
                        }else
                        {
                            if((str[i] % 2) != 0)
                            {
                                i = format.length;
                                isValid = false;
                            }
                        }
                        break;
                    }
                    case 'j':
                    {
                        if(!isDigit(str[i]))
                        {
                            i = format.length;
                            isValid = false;
                        }else
                        {
                            if((str[i] % 2) == 0)
                            {
                                i = format.length;
                                isValid = false;
                            }
                        }
                        break;
                    }
                }
            }
        }else
            isValid = false;
    return isValid;
}

function validate2D(str2D, format)
{
    for(let i = 0; i < str2D.length; i++)
        if(!validate(str2D[i], format))
            return false;
    return true;
}

function outputValidationError2D(splitArray1, splitArray2, outputTextFieldID)
{
    let valid1 = validate2D(splitArray1, INPUT_FORMAT);
    let valid2 = validate2D(splitArray2, INPUT_FORMAT);

    if(!valid1 && !valid2)
    {
        //document.getElementById(outputTextFieldID).innerText = "Incorrect format in both arrays, correct format is " + "\"" + INPUT_FORMAT + "\"";
        document.getElementById(outputTextFieldID).innerText = "Не корректный формат в обоих массивах, корректный формат это " + "\"" + INPUT_FORMAT + "\"";
        return false;
    }
    else if(!valid1)
    {
        //document.getElementById(outputTextFieldID).innerText = "Incorrect format in array 1, correct format is " + "\"" + INPUT_FORMAT + "\"";
        document.getElementById(outputTextFieldID).innerText = "Не корректный формат в обоих массивах, корректный формат это " + "\"" + INPUT_FORMAT + "\"";
        return false;
    }else if(!valid2)
    {
        //document.getElementById(outputTextFieldID).innerText = "Incorrect format in array 2, correct format is " + "\"" + INPUT_FORMAT + "\"";
        document.getElementById(outputTextFieldID).innerText = "Не корректный формат в обоих массивах, корректный формат это " + "\"" + INPUT_FORMAT + "\"";
        return false;
    }
    return true;
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

function add(array2D1, array2D2)
{
    for(let i = 0; i < array2D1.length; i++)
    {
        if(find(array2D2, array2D1[i]))
        {
            array2D1.splice(i, 1);
            i--;
        }
    }
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

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    if(!outputValidationError2D(splitArray1, splitArray2, "OutputText"))
        return;

    let result = array1.value + ' ' + array2.value;

    result = result.split(' ');
    removeRepetitions(result);

    //document.getElementById("OutputText").innerText = "Result: " + result;
    document.getElementById("OutputText").innerText = "Результат: " + result;
}

function intersect()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    if(!outputValidationError2D(splitArray1, splitArray2, "OutputText"))
        return;

    let result = getIntersection(splitArray1, splitArray2);
    //document.getElementById("OutputText").innerText = "Result: " + result;
    document.getElementById("OutputText").innerText = "Результат: " + result;
}

function addition1to2()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    if (!outputValidationError2D(splitArray1, splitArray2, "OutputText"))
        return;

    add(splitArray1, splitArray2);
    //document.getElementById("OutputText").innerText = "Result: " + splitArray1;
    document.getElementById("OutputText").innerText = "Результат: " + splitArray1;
}

function addition2to1()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    if (!outputValidationError2D(splitArray1, splitArray2, "OutputText"))
        return;

    add(splitArray2, splitArray1);
    //document.getElementById("OutputText").innerText = "Result: " + splitArray1;
    document.getElementById("OutputText").innerText = "Результат: " + splitArray2;
}

function symmetricallySubtract()
{
    let array1 = document.getElementById("Array1");
    let array2 = document.getElementById("Array2");

    let splitArray1 = array1.value.split(' ');
    let splitArray2 = array2.value.split(' ');

    if(!outputValidationError2D(splitArray1, splitArray2, "OutputText"))
        return;

    let result = getSymmetricallySubtracted(splitArray1, splitArray2);
    //document.getElementById("OutputText").innerText = "Result: " + result;
    document.getElementById("OutputText").innerText = "Результат: " + result;
}


