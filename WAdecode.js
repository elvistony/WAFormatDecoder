function WAdecode() {
  elements = document.getElementsByClassName('WAdecode');
  console.log(elements.length);
  for (var j = 0; j < elements.length; j++) {
    italic = bold = strike = comment = space=0;
    str = elements[j].innerHTML;
    console.log(elements[0].innerHTML);
    newtext="";
    for (var i = 0; i < str.length; i++) {
      letter = str.charAt(i);
      //console.log(letter);
      if (letter == " "){
        space = 1;
        newtext= newtext +" ";
        continue;
      }else if (space) {
        space=0;
        if (letter == "_"){
          italic=1;
          newtext= newtext +"<i>";
        }else if (letter == "*") {
          bold = 1;
          newtext= newtext +"<b>";
        }else if (letter == "`") {
          comment=comment+1;
          newtext= newtext +"<quote>";
        }else{
          newtext= newtext +letter;

        }
      }else{
        if (letter == "_"){
          newtext= newtext +"</i>";italic=0;
        }else if (letter == "*") {
          newtext= newtext +"</b>";bold=0;
        }else if (letter == '\n') {
          newtext= newtext +"</br>";
        }else if (letter == '\t') {
          newtext= newtext +"     ";
        }else if (letter == "`") {
          newtext= newtext +"</quote>";comment=0;
        }else{
          newtext= newtext +letter;
        }
      }
    }
    elements[j].innerHTML=newtext;
  }
}

WAdecode();
