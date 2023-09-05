import { Component, forwardRef, OnInit, OnDestroy, Output, EventEmitter, Injectable } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import Quill from 'quill';
import { ImageUploaderService } from '../image-upload.service';

@Injectable({
    providedIn: 'root'
})
export class QuillHelper  {
  quill!: Quill;
  value!: string;
  content: string = '';
  quillFile: any;
  meQuillRef: any;
  toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'color': [] }, { 'background': [] }],
  ];


  constructor(
    private imageUploadService: ImageUploaderService
  ) { }


}
