var updateObjectWithKeyAndValue = function(object, key, value){
  var newObj = object
  newObj[key] = value
  return newObj
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value
  return object
}

deleteFromObjectByKey = function(object, key){
  var newObj = object
  delete newObj[key]
  return newObj
}

destructivelyDeleteFromObjectByKey = function(object, key){
  delete obejct.key
  return object
}
