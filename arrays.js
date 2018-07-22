var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  chocolateBars = ['mars', ...chocolateBars] 
}

function destructivelyAddElementToBeginningOfArray() {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  chocolateBars.unshift('mars');
}

function addElementToEndOfArray() {
  var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles']
  chocolateBars = [...chocolateBars, 'mars']
}

function destructivelyAddElementToEndOfArray() {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
  chocolateBars.push('mars');
}