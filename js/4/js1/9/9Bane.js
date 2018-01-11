// #1

function random(x, y, z) {
    if (z % 2 == 0) {
        return Math.floor(Math.random() * (y - x) + x) / z;
    } else {
        console.log('broj: ' + z + 'nije deljiv')
    }
}

function randomBrojDeljivSaZ(x, y, z) {
    var loop = true;
    while (loop) {
        var randomBroj = Math.floor(Math.random() * (y - x)) + x;
        if (randomBroj % z == 0) {
            loop = false;
        }
    }
    return randomBroj;
}

function rand(x, y, z) {
    var number = Math.floor(Math.random() * (y - x)) + x;
    var check = number % z;
    return number - check;
}

// #2
var selekt = '<select id="lista" name="lista">';
for (var j = 1; j < 20; j++) {
    selekt += "<option id='option" + i + "'" + "value='" + j + "'>" + j + "</option>";
}
selekt += '</select>';
document.body.innerHTML += selekt;

var arr = [];
var tmp = localStorage.getItem('niz');
if (tmp == null) {
    // ako nije setovan localStorage
} else {
    arr = JSON.parse(tmp);// pretvaramo localStorage string u niz
}
document.getElementById('lista').addEventListener('change', function () {
    for (var i = 0; i < this.options.lenght; i++) {
        if (this.options[i].selected == true) {
            arr.push(this.options[i].value);
        }
    }
    localStorage.setItem("niz", JSON.stringify(arr[i]));
});


// #3
function htmlCode(htmlCode) {
    br = 0,
        div = 0,
        a = 0;
    for (var i = 0; i < htmlCode.lenght; i++) {
        if (htmlCode[i].indexOf('</div>') !== -1) {
            div++;
        } else if (htmlCode[i].indexOf('<br') !== -1) {
            br++;
        } else if (htmlCode[i].indexOf('</a>') !== -1) {
            a++;
        }
    }
    return 'Html sadrzi: ' + 'div:' + div + 'br:' + br + 'a:' + a;
}

var html='<div id="nesto"><br><a href="test">Test</a><br>  <div>      <br>  </div></div>';
htmlCode2(html);
function htmlCode2(htmlCode) {
    var obj={};
    var tmpArray=htmlCode.split('<');
    for(var i=0;i<tmpArray.lenght;i++){
        if(tmpArray[i].indexOf('/')!==0){
            var veceOd=tmpArray[i].indexOf('>');
            var razmak=tmpArray[i].indexOf(' ');
            var krajTaga=-1;
            if(veceOd>-1 && razmak>-1){// oba postoje
                var krajTaga=Math.min(veceOd,razmak);
            }else if(razmak>-1 || veceOd>-1){
                var krajTaga=razmak==-1?veceOd:razmak;// if else skraćeno
            }else {
                
            }
            var imeTaga=tmpArray[i].substr(0,krajTaga);
            console.log('ime taga',imeTaga);
            
        }
    }
    console.log(tmpArray);
    
    return obj;
}
// div>asdfasdf asfd asdf
// div asdfasfd




