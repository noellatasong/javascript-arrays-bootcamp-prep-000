var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  chocolateBars = ['mars', ...chocolateBars] 
  // return array here ['mars','snickers',' hundred grand', 'kitkat', 'skittles']
  chocolateBars // ['snickers', 'hundred grand', 'kitkat', 'skittles']
}

function destructivelyAddElementToBeginningOfArray() {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  chocolateBars.unshift('mars');
  // return array here ['mars', 'snickers', 'hundred grand', 'kitkat', 'skittles']
}

function addElementToEndOfArray() {
  var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles']
  chocolateBars = [...chocolateBars, 'mars']
}

function destructivelyAddElementToEndOfArray() {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
  chocolateBars.push('mars');
}