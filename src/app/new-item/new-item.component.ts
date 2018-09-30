import { Component, OnInit } from '@angular/core';

class Newitem {
  constructor(
    public Codigo: string = '',
    public Name: string = '',
    public Cost: string = '',
    public Size: string = '',
    public Color: string = '',
  ) { }
}

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newitems: Newitem[] = [];
  // It maintains registration Model
  regModel: Newitem;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  constructor() {
    let item = {
      codigo: "56",
      nombre: "playera",
      precio: "150",
      size: "S",
      color: "white"
    }
    this.newitems.push(new Newitem('1', 'Short', '150', 'M', 'White'));
    localStorage.setItem("item1", JSON.stringify(item));
  }

  grabar_localstorage(codigo: string, nombre: string, precio: string, size: string, color: string, number: number) {
    let item = {
      codigo: codigo,
      nombre: nombre,
      precio: precio,
      size: size,
      color: color
    }
    localStorage.setItem(codigo, JSON.stringify(item));
  }
  obtener_locarsotage(codigo:string) {
    let item = JSON.parse(localStorage.getItem(codigo));
    }

  ngOnInit() {
  }
  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Newitem();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.newitems.push(this.regModel);
      this.grabar_localstorage(this.regModel.Codigo, this.regModel.Name, this.regModel.Cost, this.regModel.Size, this.regModel.Color, 1);
    } else {
      this.grabar_localstorage(this.regModel.Codigo, this.regModel.Name, this.regModel.Cost, this.regModel.Size, this.regModel.Color, 1);
      // Update the existing properties values based on model.
      this.newitems[this.selectedRow].Codigo = this.regModel.Codigo;
      this.newitems[this.selectedRow].Name = this.regModel.Name;
      this.newitems[this.selectedRow].Cost = this.regModel.Cost;
      this.newitems[this.selectedRow].Size = this.regModel.Size;
      this.newitems[this.selectedRow].Color = this.regModel.Color;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Newitem();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.newitems[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number, codigo:string) {
    // Delete the corresponding registration entry from the list.
    this.newitems.splice(index, 1);
    localStorage.removeItem(codigo);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }
}
