import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

    constructor(public db: AngularFireDatabase) {}

      getData(){
        return this.db.object('cv').valueChanges();
      }
}