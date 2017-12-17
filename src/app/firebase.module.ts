import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { environment } from '../environments/environment'

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  declarations: []
})
export class FirebaseModule {}
