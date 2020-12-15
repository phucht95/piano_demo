function addChord(notename, note, scaletype, taledenote) {
  var chord = ``;
  if (notename.includes("/")){
    notename = notename.split(" / ")[0] + taledenote + " / " + notename.split(" / ")[1];
  }
  notename += taledenote;
  chord += `<td>
                <div class="chord-cell">
                  <div class="notename">
                        <span>${notename}</span></div>
                        <div class="button-cell">
                            <button class="btn btn-danger mb-2" onmousedown="createChord('${note}', ${scaletype})"
                            onmouseup="removeActiveClass()">1</button>
                            <div class="row">

                            </div>
                            <button class="btn btn-success" onmousedown="playChord('${note}', ${scaletype})"
                            onmouseup="asyncRemoveActiveClass()">2</button>
                            <div class="row">

                            </div>
                        </div>
                        
                    </div>
                
            </td>`;
  return chord;
}

var _chordList = ["C", "C<sup>#</sup> / D<sup>b</sup>", "D", "D<sup>#</sup> / E<sup>b</sup>", "E", 
"F", "F<sup>#</sup> / G<sup>b</sup>", "G",  "G<sup>#</sup> / A<sup>b</sup>", "A",  "A<sup>#</sup> / B<sup>b</sup>", "B"];

function addChordRow(chordList, notes, scaletypename, scaletype, taledenote) {
  var stringTemp = `<tr><td><div class="chord-cell"><span class="chord-cell-span">${scaletypename}</span></div></td>`;
  for (let i = 0; i < chordList.length; i++) {
    stringTemp += addChord(chordList[i], notes[i], scaletype, taledenote);
  }
  stringTemp += `</tr>`;
  return stringTemp;
}

var stringTemp = addChordRow(_chordList, _notes, "Major", "major", "");
stringTemp += addChordRow(_chordList, _notes, "Minor", "minor", "m");
stringTemp += addChordRow(_chordList, _notes, "7", "sev", "7");
stringTemp += addChordRow(_chordList, _notes, "Major7", "msev", "maj7");
stringTemp += addChordRow(_chordList, _notes, "Sus2", "sus2", "sus2");
stringTemp += addChordRow(_chordList, _notes, "Sus4", "sus4", "sus4");
stringTemp += addChordRow(_chordList, _notes, "Dim", "dim", "dim");
stringTemp += addChordRow(_chordList, _notes, "Aug", "aug", "aug");

function createChordRow() {
  var div = document.getElementById("table-chord_id");
  div.innerHTML = `<table class="table">
                    <thead>
                        <td>
                            <span>Transpose</span>
                            <div class="transpose">
                            <button class="btn btn-danger p-1">-</button>
                            0
                            <button class="btn btn-success p-1">+</button>
                            </div>
                        </td>
                        <td>I</td>
                        <td>I<sup>#</sup> / II<sup>b</sup></td>
                        <td>II</td>
                        <td>II<sup>#</sup> / III<sup>b</sup></td>
                        <td>III</td>
                        <td>IV</td>
                        <td>IV<sup>#</sup> / V<sup>b</sup></td>
                        <td>V</td>
                        <td>V<sup>#</sup> / VI<sup>b</sup></td>
                        <td>VI</td>
                        <td>VI<sup>#</sup> / VII<sup>b</sup></td>
                        <td>VII</td>
                    </thead>
                    <tbody id="chords-row">
                    </tbody>
                    </table>`;
  var p = document.getElementById("chords-row");
  p.innerHTML = stringTemp;
}
