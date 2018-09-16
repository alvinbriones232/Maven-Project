import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var ClipboardJS:any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],

})
export class EditorComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  company = new FormControl('');
  occupation = new FormControl('');
  mobile = new FormControl('');

  constructor() { }

  ngOnInit() {
    new ClipboardJS('#copy-clipboard-btn');
  }

}
