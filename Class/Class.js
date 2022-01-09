let Mahesh = {
    FstName :"Mahesh",
    LastNme :"Aher",
    City:"Sangamaner",
    Pin : 422605
}

//retrive 
console.log(Mahesh.City)
console.log(Mahesh["FstName"])

//Update 
Mahesh.City = "Akole"
Mahesh["LastNme"] = "Ambre"
console.log(Mahesh)

//Add
Mahesh.Language ="Marathi"
Mahesh["Skills"] =["JavaScript","Java","Css"]
console.log(Mahesh)

//delete
delete Mahesh.City
delete Mahesh["Language"]
console.log(Mahesh)

class Student {
    FullName = undefined
    Age = undefined
    Language =undefined
    Pin = undefined
}

let Sonu = new Student
console.log(Sonu)

let Mahi = new Student
console.log(Mahi)


// 1 type - setting the property value outside the class
//updating the value
Sonu.FullName = "Mahesh Aher"
Sonu.Age = 23
Sonu["Language"] = "Marathi"
Sonu["Pin"] = 422605
console.log(Sonu)


Mahi.FullName = "Sonu Aher"
Mahi.Age = 26
Mahi["Language"] = "Marathi"
Mahi["Pin"] = 422605
console.log(Mahi)

//
