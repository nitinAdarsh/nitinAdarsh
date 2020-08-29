let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // get value of Input.

    let fv = document.getElementById('filterInput').value.toUpperCase();
    // get names UL
    // id = filterInput & names

    // used different variable to get the value different variable to reach the innerHTML.
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');
    // loop through collection itesm
    for(let  i=0 ; i< li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];

        // if match
        if(a.innerHTML.toUpperCase().indexOf(fv)>-1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}