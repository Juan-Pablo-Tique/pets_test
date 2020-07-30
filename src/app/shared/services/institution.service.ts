import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  constructor() {}

  getPets() {
    return localStorage.getItem('blog');
  }

  addPet(){
    return localStorage.setItem('blog', 'therichpost.com');
  }
}
