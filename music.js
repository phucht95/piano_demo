var _notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

var major = [1,0,0,0,1,0,0,1,0,0,0,0];
var minor = [1,0,0,1,0,0,0,1,0,0,0,0];
var sev   = [1,0,0,0,1,0,0,1,0,0,1,0];
var msev  = [1,0,0,0,1,0,0,1,0,0,0,1];
var sus2  = [1,0,1,0,0,0,0,1,0,0,0,0];
var sus4  = [1,0,0,0,0,1,0,1,0,0,0,0];
var dim   = [1,0,0,1,0,0,1,0,0,0,0,0];
var aug   = [1,0,0,0,1,0,0,0,1,0,0,0];

function shiftLeft(arr, steps){
    for (let i=0; i < steps; i++){
        var first = arr[0];
        for (let j=0; j < arr.length - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = first;
    }
    return arr;
}
function determineMajor(notes, desirenote){
    var deg = notes.indexOf(desirenote);
    var newnotes = shiftLeft(notes, deg);
    return newnotes;
}