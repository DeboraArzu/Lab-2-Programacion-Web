import { Component, OnInit } from '@angular/core';
import { Cloth } from '../cloth';
import {CLOTHES} from '../mock-clothes';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothes = CLOTHES;
  selectedCloth: Cloth;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cloth: Cloth): void{
    this.selectedCloth = cloth;
  }

}
