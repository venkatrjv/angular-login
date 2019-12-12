import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData = [{
    "id": 1,
    "first_name": "Loleta",
    "last_name": "Lorand",
    "email": "test@gmail.com",
    "phone": "5303864400",
    "pass": "test123"
  }, {
    "id": 2,
    "first_name": "Valentine",
    "last_name": "Puddefoot",
    "email": "vpuddefoot1@harvard.edu",
    "phone": "1693077281",
    "pass": "test123"
  }, {
    "id": 3,
    "first_name": "Ofilia",
    "last_name": "Issac",
    "email": "oissac2@va.gov",
    "phone": "4754371964",
    "pass": "test123"
  }, {
    "id": 4,
    "first_name": "Neila",
    "last_name": "Molines",
    "email": "nmolines3@bizjournals.com",
    "phone": "7672940133",
    "pass": "test123"
  }, {
    "id": 5,
    "first_name": "Arri",
    "last_name": "Hedgeley",
    "email": "ahedgeley4@umn.edu",
    "phone": "1121560327",
    "pass": "test123"
  }, {
    "id": 6,
    "first_name": "Damian",
    "last_name": "Knapp",
    "email": "dknapp5@nyu.edu",
    "phone": "8462133950",
    "pass": "test123"
  }, {
    "id": 7,
    "first_name": "Ingram",
    "last_name": "Sawood",
    "email": "isawood6@bandcamp.com",
    "phone": "3125916202",
    "pass": "test123"
  }, {
    "id": 8,
    "first_name": "Charissa",
    "last_name": "Clerk",
    "email": "cclerk7@prweb.com",
    "phone": "1371133361",
    "pass": "test123"
  }, {
    "id": 9,
    "first_name": "Cecilia",
    "last_name": "Brugemann",
    "email": "cbrugemann8@cyberchimps.com",
    "phone": "5037195874",
    "pass": "test123"
  }, {
    "id": 10,
    "first_name": "Brody",
    "last_name": "Carrel",
    "email": "bcarrel9@mozilla.com",
    "phone": "4049135620",
    "pass": "test123"
  }]
  constructor() { }

  validateLogin(email: string, pass: string) {
    return this.userData.find(x => x.email === email && x.pass === pass)
  }

  getUserById(userID) {
    return this.userData.find(x => x.id === userID);
  }
}
