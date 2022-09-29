// highlight all internal links on a page green

var href = document.getElementsByTagName('a');
for(var i =0; i < href.length; i ++){
    href[i].style.backgroundColor = 'green'
}

// highlight all H1 Tags on a page orange

var heading = document.getElementsByTagName('h1');
for(var h = 0; h < heading.length; h++){
    heading[h].style.backgroundColor = 'orange';
}

// highlight all paragraph Tags purple

var paragraph = document.getElementsByTagName('p');
for(var p = 0; paragraph.length; p++){
    paragraph[p].style.backgroundColor = 'purple';
}
