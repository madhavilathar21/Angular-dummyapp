

import { HttpClient } from '@angular/common/http';
//import {​​​​​​​​ Http, Response, RequestOptions, Headers }​​​​​​​​ from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

const URL1 = 'http://localhost:4444/api/excel/upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
declare var $;
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    responseData ;
      
      
      uploadClickedFlag:boolean;
      uploader: FileUploader;
      hasBaseDropZoneOver: boolean;
      hasAnotherDropZoneOver: boolean;
      fileValid: boolean;
      files: File;
      successFlag:boolean;
      failFlag:boolean=false;
     
      constructor(private SpinnerService: NgxSpinnerService, private http: HttpClient , private messageService: MessageService) {
        this.uploader = new FileUploader({
          url: URL,
          disableMultipart: true,
          formatDataFunctionIsAsync: true,
          allowedFileType: ['xls', 'xlsx', 'doc', 'docx', 'pdf', 'odt', 'txt', 'ods', 'csv'],
      
          maxFileSize: 10 * 1024 * 1024,
          formatDataFunction: async (item) => {
            return new Promise((resolve, reject) => {
              resolve({
                name: item._file.name,
                length: item._file.size,
                contentType: item._file.type,
              });
            });
          }
        });
     
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
     
      }
     
      ngOnInit() {
        this.fileValid = false;
        this.successFlag = false;
        this.failFlag = false;
        this.SpinnerService.show();
     
        setTimeout(() => {
          this.SpinnerService.hide();
        }, 1000);
        console.log("queue", this.uploader.queue)
        this.uploadClickedFlag = false;
      }
      dropped(event) {
        this.successFlag=false;
        this.failFlag=false;
        console.log("file eveent", event)
        this.files = event[0];
        console.log("queue", this.uploader.queue)
      }
      onAction(files) {
        console.log("file ", files)
      }
     

      addSingle() {
        this.messageService.add({ severity: 'success', summary: 'Upload Service', detail: 'File upload is start' });
        }
        addInfoSingle() {
        this.messageService.add({ severity: 'info', summary: 'Upload Service', detail: 'File upload is In progress' });
        }
        
        addSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Upload Service', detail: 'File uploaded sucessfully' });
        }
        addError() {
          this.messageService.add({ severity: 'error', summary: 'Upload Service', detail: 'File not uploaded' });
          }


      uploadFile() {
        this.addSingle();
        this.uploadClickedFlag=true;
        
        let formdata: FormData = new FormData();
        formdata.append('file', this.files)
        console.log("formdata", formdata)
        this.http.post(URL1, formdata).subscribe(data => {
            this.addInfoSingle();
       this.responseData = data;
          console.log("api response ", this.responseData.Status);
          if(this.responseData.Status=="Success"){
              this.addSuccess();
              this.successFlag =true;
              this.failFlag =false;
              this.uploadClickedFlag=false;
              this.uploader.clearQueue();
          }
          else if(this.responseData.Status=="Fail"){
            this.addError();
            this.successFlag =false;
              this.failFlag =true;
              this.uploadClickedFlag=false;
          }
        })
     
      }

}

