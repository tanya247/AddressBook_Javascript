let NameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let addressRegex = RegExp("^.{4,}$");
let cityRegex = RegExp("^[a-zA-Z]{4,}$");
let stateRegex = RegExp("^[a-zA-Z]{4,}$");
let zipRegex = RegExp("^[1-9]{1}[0-9]{5,}");
let phoneRegex = RegExp("^[0-9]{10}$");
let emailRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");

class AddressBook{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.Mobile_Number = params[5];
        this.email = params[6];
        this.zip = params[7];
    }
    get firstName(){return this._firstName;}
    set firstName(firstName){
        if(NameRegex.test(firstName)){
            this._firstName = firstName;
        }else throw 'Incorrect Name';
        
    }
    get lastName(){return this._lastName;}
    set lastName(lastName){
        if(NameRegex.test(lastName)){
            this._lastName = lastName;
        }else throw 'Incorrect Last Name';
            
        
    }
    get address(){return this._address;}
    set address(address){
        if(addressRegex.test(address)){
            this._address = address;
        }
        else throw 'Incorrect Address';
    }    
    get city(){return this._city;}

    set city(city){
        if(cityRegex.test(city)){
            this._city = city;
        }
        else throw 'Incorrect City';
    }
    get state(){return this._state;}
    set state(state){
        if(stateRegex.test(state)){
            this._state = state;
        }
        else throw 'Incorrect State';
    }
    get Mobile_Number(){return this._Mobile_Number;}
    set Mobile_Number(Mobile_Number){
        if(phoneRegex.test(Mobile_Number)){
            this.__Mobile_Number = Mobile_Number;
        }
        else throw 'Incorrect Mobile Number';
    }
    get email(){return this._email;}
    set email(email){
        if(emailRegex.test(email)){
            this._email = email;
        }
        else throw 'Incorrect Email';
    }
    get zip(){return this._zip;}
    set zip(zip){
        if(zipRegex.test(zip)){
            this._zip = zip;
        }
        else throw 'Incorrect Zip';
    }

    toString(){
        return "firstName: "+this.firstName +" lastname: "+this.lastName+
            " address: "+this.address +" city: "+this.city+" state: "+
            this.state+" PhoneNo: "+this.Mobile_Number+
            " Email: "+this.email+" pinCode: "+this.zip;
    }
}
let addressBookArrays = new Array();
try{
     addressBookArrays.push(new AddressBook("Tanya", "Kansal", "Chandi Road", "Hapur","Uttar_Pradesh", "89478596447", "tanya@gmail.com",24578));
     addressBookArrays.push(new AddressBook("Prashant","Rathore","Kannauj","Kanpur","Uttar_Pradesh","8745962578","prashantk@gmail.com",245874));
     console.log(addressBookArrays);
}catch(e){
    console.log(e);
}