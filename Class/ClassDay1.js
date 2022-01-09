let Mahesh = {
    FullName: "Mahesh Aher",
    Age: 23,
    RollNo: 45
}

let Shrikant = {
    FullName: "Shrikant Patil",
    Age: 34,
    RollNo: 87
}

//Retrive 
console.log(Mahesh.FullName)
console.log(Shrikant["FullName"])

//Update
Mahesh.FullName = "Akash Mhaske"
Shrikant["FullName"] = "Sandesh Giri"

//Add 
Mahesh.Language = "Marathi"
Shrikant["Height"] = 78

//delete
delete Mahesh.Language
delete Shrikant["Height"]

//Object literals

class Vehical {
    Name = undefined
    Type = undefined
    Colour = undefined
    RegNo = undefined
}
let Car1 = new Vehical()
let Car2 = new Vehical()
console.log(Car1)
console.log(Car2)

//Updating the Values outside the class


Car1.Name = "Audi"
Car1.Type = "Xuv"
Car1.RegNo = 1234
Car1.Colour = "Blue"
console.log(Car1)

Car2["Name"] = "BMW"
Car2["RegNo"] = 4567
Car2["Type"] = "Sport"
Car2["Colour"] ="Red"
console.log(Car2)

//Adding the Property
Car2.Company = "Maruti"
Car1["Company"] = "Ford"
console.log(Car1)
console.log(Car2)

//updating the values at the time of object creation

class Person{
    constructor (FstName,LName,Hght,Cty){
        this.FirstName = FstName
        this.LastName = LName
        this.Height =Hght
        this.City = Cty
    }
}

let Vishal = new Person("Vishal","Chavhan",81,"Shirur")
console.log(Vishal)

let Akshay = new Person("Akshay","Shelke",67,"Akole")
console.log(Akshay)

class student{
    constructor(Stdname,INo,Add,Cls){
        this.StudentName = Stdname
        this.IdNo = INo
        this.Address = Add
        this.Class = Cls       
    }
}

let Karan =new student("Karan Jadhav",34,"Pune","Fybcs")
console.log(Karan)

let Sayali =new student("Sayali Aher",66,"Sangamaner","Bpharm")
console.log(Sayali)

let Suhasani = new student("Suhasani Salagare",56,"Solapur","MBA")
console.log(Suhasani)

//Set Method 
class Colors {
    setcolorname(cln){
        this.ColourName = cln
    }

    setShade(Sh){
        this.Shade =Sh
    }

    setThikness(thk){
        this.Thikness =thk
    }
    
}

let Red = new Colors()
console.log(Red)

Red.setShade("Faint")
Red.setcolorname ( "Red")
Red.setThikness ("hard")
console.log(Red)

let Yellow = new Colors
Yellow.setThikness("Medium")
Yellow.setcolorname("Yellow")
Yellow.setShade("Dark")
console.log(Yellow)

class Person2 {
    setNme(FN){
        this.FullName =FN
    }
    setCity(ct){
        this.City =ct
    }
    setLang(lang){
        this.Language = lang
    }
}

let Poonam = new Person2
Poonam.setNme("Poonam Mense")
Poonam.setCity("Belgum")
Poonam.setLang("Marathi")
console.log(Poonam)

let Swamini = new Person2
Swamini.setNme("Swamini Datir")
Swamini.setCity("Mumbai")
Swamini.setLang("English")
console.log(Swamini)

