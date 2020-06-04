var updateObjectWithKeyAndValue = function(object, key, value){
  var newObj = object
  newObj[key] = value
  return newObj
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value
  return object
}

var deleteFromObjectByKey = function(object, key){
  var newObj = object
  delete newObj[key]
  return newObj
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete obejct[key]
  return object
}
