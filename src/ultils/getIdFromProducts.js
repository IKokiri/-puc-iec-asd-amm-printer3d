const getIdFromProducts = (array, id) => {

  for(let index in array)
  {
    if(array[index].id == id){
      return array[index]
    }
  }
}

export default getIdFromProducts