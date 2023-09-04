// (function(){


// })

function greenColor(){
    let colorBank = JSON.parse(localStorage.getItem('objColor'));
    // console.log(colorBank['background'])
    let objColor = {
        'background': 'green'
    }
    if(colorBank == null || colorBank == undefined){
        localStorage.setItem('objColor', JSON.stringify(objColor))
    }else{
        // document.body.style.backgroundColor = colorBank['background']
        alert('there is color');
    }
    document.body.style.backgroundColor = objColor['background']
    
}

// let red = document.getElementById('red');
// red.addEventListener('dblclick', function(){
//     document.body.style.backgroundColor = 'red'
// })