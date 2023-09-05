import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { StimulusModule } from "stimulus/src/packages/stimulus.module";
import { XpasPageHeaderComponent } from "nikosera-shell/src/packages";
import { QUILL_CONFIGURATION } from "./quill-config";
import { NbFormFieldModule } from "@nebular/theme";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ImageUploaderService } from "../../core/image-upload.service";

@Component({
  selector: 'xpa-admin',
  templateUrl: './html-content-setup.component.html',
  standalone: true,
  imports: [
    StimulusModule,
  ],
  providers: [ImageUploaderService]

})
export class HtmlContentSetupComponent implements OnInit {

  htmlContentCreateForm: FormGroup;
  quillConfiguration = QUILL_CONFIGURATION;
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  constructor(
    private formBuilder: FormBuilder,
    private imageUploadService: ImageUploaderService
  ) {
    this.htmlContentCreateForm = this.formBuilder.group({
      content: ['', [Validators.required]],
      code: []
    });
  }

  content: string = "";

  test() {
    this.content = this.htmlContentCreateForm.controls["content"].value;
    console.log("Content", this.htmlContentCreateForm)
  }

  convertToHtml() {
    this.htmlContentCreateForm.patchValue({
      content: this.htmlContentCreateForm.controls["code"].value
    })
  }

  @ViewChild('quillFile') quillFileRef: ElementRef | any;
  quillFile: any;
  meQuillRef: any;
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],
      ['image', 'link']
    ],
    // handlers: {
    //   image: (image: any) => {
    //     this.customImageUpload(image);
    //   }
    // }

    //imageResize: true,
  };

  customImageUpload(image: any) {
    console.log(image);
    /* Here we trigger a click action on the file input field, this will open a file chooser on a client computer */
    this.quillFileRef.nativeElement.click();
  }

  getMeEditorInstance(editorInstance: any) {
    this.meQuillRef = editorInstance;
  }


  quillFileSelected(ev: any) {
    console.log("Upload Component is called");
    this.quillFile = ev.target.files[0];
    console.log(ev.target.files[0]);
    const imageData = {
      // id: this.article != null && this.article !== undefined ? this.article.post_id : null,
      title: this.quillFile.name,
      file: this.quillFile
    };
    console.log("title", imageData)
    //After the file is selected from the file chooser, we handle the upload process */
    this.quillFile = ev.target.files[0];
    console.log(ev.target.files[0]);
    // const imageData = {
    //     // id: this.article != null && this.article !== undefined ? this.article.post_id : null,
    //     title: this.quillFile.name,
    //     file: this.quillFile
    // };
    this.imageUploadService.singleImageUpload(this.quillFile, "template").subscribe(
      (response: any) => {
        console.log(response);
        console.log("Dta", response.data)
        console.log("File Names", response.data.fileNames[0]);
        let range: any;
        const img = '<img class="img-within" src="assets/' + response.data.fileNames[0] + '"></img>';
        range = this.meQuillRef.getSelection();
        this.meQuillRef.clipboard.dangerouslyPasteHTML(range.index, img);
      }
    );
  }
  imagePath = '';

}