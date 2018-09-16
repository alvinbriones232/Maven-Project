import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
declare var ClipboardJS:any;
const URL = 'http://localhost:3000/api/upload';
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
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor() { }

  ngOnInit() {
    new ClipboardJS('#copy-clipboard-btn');
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
    
  }

}
