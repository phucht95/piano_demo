var _delay = 0;

var _classnames = ["whitenote c", "blacknote cs", "whitenote d", "blacknote ds", "whitenote e", "whitenote f",
                   "blacknote fs", "whitenote g", "blacknote gs", "whitenote a", "blacknote as", "whitenote b"];

function addOctave(classnames, notes, octave, delay){
    var result = ``;
    for (let index = 0; index < classnames.length; index++) {
        var idnote = notes[index] + octave;
        var classname = classnames[index];
        var instrument = 0;
        var note = notes[index];

        var piano = `<li class="${classname}" id="${idnote}"
                    onclick="playSingleNote(${instrument}, '${note}', ${octave}, ${delay})">
                        <a class="denote">${idnote}</a>
                     </li>`;
        result += piano;
    }
    return result;
}

var firstOctave = `<li class="whitenote a" id="A0"
                    onclick="playSingleNote(0, 'A', 0, ${_delay})">
                        <a class="denote">"A0"</a>
                    </li>
                    <li class="blacknote as" id="A#0"
                    onclick="playSingleNote(0, 'A#', 0, ${_delay})">
                        <a class="denote">"A#0"</a>
                    </li>
                    <li class="whitenote b" id="B0"
                    onclick="playSingleNote(0, 'B', 0, ${_delay})">
                        <a class="denote">"B0"</a>
                    </li>`;
firstOctave += addOctave(_classnames, _notes, 1, _delay);
firstOctave += addOctave(_classnames, _notes, 2, _delay);
firstOctave += addOctave(_classnames, _notes, 3, _delay);
firstOctave += addOctave(_classnames, _notes, 4, _delay);
firstOctave += addOctave(_classnames, _notes, 5, _delay);
firstOctave += addOctave(_classnames, _notes, 6, _delay);
firstOctave += addOctave(_classnames, _notes, 7, _delay);
firstOctave += `<li class="whitenote C" id="C8"
                onclick="playSingleNote(0, 'C', 8, ${_delay})">
                    <a class="denote">"C8"</a>
                </li>`

//var _pianokeystring = createPianoKeys(_classnames, _notes, 5);

function createHTML(){
    var p = document.getElementById("piano");
    p.innerHTML = firstOctave;
}


// newNode.appendChild(document.createTextNode(result));

/*
e --> c
ds --> cs
cs --> ds 
c --> e
b --> f
as --> fs
a --> g
g --> a
fs --> as
f --> b
*/