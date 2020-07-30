import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Target } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
})
export class PetFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.onFormPets();
  }

  loading: boolean = false;
  formPet!: FormGroup;
  nameFileSelected: string = 'No se ha seleccionado una imagen';
  typeFilePhoto = ['jpeg', 'png', 'webp'];

  onFormPets(): void {
    this.formPet = new FormGroup({
      name: new FormControl('', Validators.required),
      species: new FormControl('', Validators.required),
      breed: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      dataPolicy: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.formPet.value);
  }

  datafile(data: any): void {
    // console.log(data.target.files);
    if (this.typeFilePhoto.includes('image/' + data.target.files[0].type)) {
      this.nameFileSelected = data.target.files[0].name; //rename imageFileBinary to imageUrl

      let imageBinary = userDetails.imageFileBinary; //image binary data response from api
      let imageBase64String = btoa(imageBinary);
      this.imageUrl = 'data:image/jpeg;base64,' + imageBase64String;
    } else {
      this.formPet.controls['photo'].setValue(null);
      this.nameFileSelected =
        'Por favor selecciona un archivo tipo: ' +
        this.typeFilePhoto.toString();
    }
  }

  //#region Util methods

  private downloadDataAsBase64(url: string): Observable<string> {
    return this.httpSvc.get(url, { responseType: 'blob' }).pipe(
      flatMap((blob) => {
        return this.blobToBase64(blob);
      })
    );
  }

  private blobToBase64(blob: Blob): Observable<any> {
    const fileReader = new FileReader();
    const observable = new Observable((observer) => {
      fileReader.onloadend = () => {
        observer.next(fileReader.result);
        observer.complete();
      };
    });
    fileReader.readAsDataURL(blob);
    return observable;
  }

  //#region Util methods
}
