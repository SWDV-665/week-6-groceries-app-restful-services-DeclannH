import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Share } from '@capacitor/share'; //I switched to Capacitor because Cordova was genuinely not working. The documentation on the Ionic framework site no logner exists. The workaround from third parties didn't work on bringing up a share. Capacitor it is - at least it works.. 



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {





  
constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
}

itemName = ""



items = [
 "Milk",

  "Bread",

  "Eggs",

  "Chickens **NO ROOSTERS**"

]



itemCount = 4



public removeItem(index:number){
  let id =this.items[index]
  let newArray = this.items.filter((e, i) => i !== index);
  this.items = newArray

  this.itemCount -= 1
}

async shareItem(index:number){
  let message =this.items[index]
  console.log(message)  

  await Share.share({
    text: message,
  }); //https://ionicframework.com/docs/v6/native/share#api

  
}

addItem() {
  if (this.itemName.length > 0) {
    let item = this.itemName;
    this.items.push(item);
    this.itemName = "";

  }
}

async updateItem(index:number) {
  let alert = await this.alertCtrl.create({
    header: 'Update Item?',
    message: 'Type in your new item to update.',
    inputs: [{ name: 'editItem', placeholder: 'Item' }],
    buttons: [{ text: 'Cancel', role: 'cancel' },
              { text: 'Update', handler: data => {  
                this.items[index] = data.editItem; }}]
  });
await alert.present();
}


//addItem(): void{
  //console.log("Adding Item");
  //this.itemCount += 1
  //this.items.push(this.itemName)
  
//}

public addButtons = ['OK'];
  public addInputs = [
    {
      placeholder: 'Grocery Item',
    },



  ];

  public deleteButtons = ['OK'];


  public deleteInputs = [
    {
      placeholder: 'Grocery Item',
    },

  ];

}










