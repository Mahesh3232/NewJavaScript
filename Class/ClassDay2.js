let info = {
    FirstName: "Mahesh",
    Lastname: "Aher",
    Age: 23,
    IDno: 56
}

//retrive 
console.log(info.FirstName)
console.log(info["Age"])

//Update 
info.FirstName = "Sandesh"
info["Lastname"] = "Giri"
console.log(info)

//add
info.Language = "Marathi"
info["City"] = "Pune"
console.log(info)

//delete
delete info.City
delete info["Language"]
console.log(info)

//setting the object values outside the class
class Person {
    FullNmae = undefined
    Age = undefined
    City = undefined
    Skills = []
}

let Chetan = new Person

//Update Chetan
Chetan.FullNmae = "Chetan Chaudhari"
Chetan.Age = 34
Chetan.City = "Sinner"
Chetan.Skills = ["Python", "JavaScript"]
console.log(Chetan)

//Additing the new Property
Chetan.Language ="Marathi"
Chetan.BldGrp ="B+"
console.log(Chetan)

//retrive
console.log(Chetan.FullNmae)
console.log(Chetan.City)

//delete
delete Chetan.City
delete Chetan.BldGrp
console.log(Chetan)

//setting the object  values at the time of object creation

class Person2{
    constructor(Fn,CT,IdNo,Lang){
        this.FullName = Fn
        this.City = CT
        this.IdNumber = IdNo
        this.Language = Lang
    }
}

let Rahul =new Person2("Rahul Shelke","Gujrat",455,"Hindi")
console.log(Rahul)

let Vishu = new Person2("Vishali Chavhan","Thane",233,"Marathi")
console.log(Vishu)

class Person3{
    setAg(a){
        this.Age = a
    }
    setFn(Fn){
        this.FullName = Fn
    }
    setRolln(Rn){
        this.RollNo = Rn
    }
    setCt(Ct){
        this.City = Ct
    }
}

let Akash = new Person3()
Akash.setAg(23)
Akash.setFn("Akash Aher")
Akash.setRolln(45)
Akash.setCt("Akole")
console.log(Akash)