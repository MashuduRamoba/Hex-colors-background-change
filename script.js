function changeColor(){

    var hex_num = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode = '';

    for (var i = 0; i < 6; i++) {
        var random_index = Math.floor(math.random() * hex_num.length);
        hexcode += hex_num[random_index];
        
    }

    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByName("body")[0].style.background ="#" + hexcode;

}