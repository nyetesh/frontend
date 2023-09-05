import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';


@Component({
  selector: 'scl-file-uploader',
  templateUrl: './file-uploader.html',
  standalone: true,
  imports: [
    CommonModule,
    NgxFileDropModule,
    NbButtonModule
  ],
  host: {
     class: 'scl-file-uploader'
  }
})
export class SclFileUploader {
  files: NgxFileDropEntry[] = [];
  @Input() heading = 'Drag and Drop files to upload';
  @Input() description = 'Only JPG, JPEG, and PNG of max file size 5 MB are allowed';

  @Output() uploadFile: EventEmitter<any> = new EventEmitter();

  dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
       if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.uploadFile.emit(file); 
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        this.uploadFile.emit(fileEntry)
      }
    }
  }
 
  fileOver(event:any){
  }
 
  fileLeave(event: any){
  }
}
