import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor() {}

  getPets() {
    let pets = JSON.stringify(localStorage.getItem('pets'));
    return pets;
  }

  addPet(newPet: any) {
    let pets = JSON.stringify(localStorage.getItem('pets'));
    // pets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(pets));
  }

  deletePet(petid: number, petName: string) {
    let pets = JSON.stringify(localStorage.getItem('pets'));

    localStorage.setItem('pets', JSON.stringify(pets));
  }

  updatePet(petsNew: any) {
    localStorage.setItem('pets', JSON.stringify(petsNew));
  }
}
