var names= {
  myName:"Ameena", 
  getName:function () {
    console.log(this.myName);
},
setName:function(newName) {
    this.myName=newName;
}
} 
names.getName();
names.setName("AmeenaJadallah");
names.getName();