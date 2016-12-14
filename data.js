var employee = {
    listWorker: [
        new person(0,"x","k",12,1250)
    ],
    insModEmployee: function(id,name,surname,level,salary){
        var len = this.listWorker.length;
        if(id==-1){
            var tmp = this.listWorker.length;
            this.listWorker.push(new person(len,name,surname,level,salary));
        }
        else{
            if(id>=len){
                for(var i=len;i<=id;i++){
                    this.listWorker.push(this.emptyEmployee(i));
                }
                this.listWorker.splice(id,0,this.emptyEmployee(id));
            }
            this.listWorker[id].Id=id;
            this.listWorker[id].Name=name;
            this.listWorker[id].Surname=surname;
            this.listWorker[id].Level=level;
            this.listWorker[id].Salary=salary;
        }
    },
    showEmployee: function(id){
        return this.listWorker[id];  
    },
    emptyEmployee: function(id){
        return (new person(id,"","",'',''));
    },
    deleteEmployee: function(id){
          this.listWorker.splice(id,1,this.emptyEmployee(id));
    }
}
//costruttore di una persona
function person(id,name,surname,level,salary){
    this.Id = id;
    this.Name = name;
    this.Surname = surname;
    this.Level = level;
    this.Salary = salary;
}
//per permettere alle altre pagine di poter attingere ad employee
module.exports = employee;