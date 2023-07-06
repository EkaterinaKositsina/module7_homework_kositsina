function func (obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key));
    console.log(key)
  }
}
func({qw: 1, rt: 2, ty:3});