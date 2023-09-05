import { FocusMonitor } from "@angular/cdk/a11y";
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { NbToastrService } from "@nebular/theme";
import { NgxUploaderModule, UploadInput, UploadOutput, UploaderOptions } from "ngx-uploader";
import { Subscription, delay, distinctUntilChanged, of } from "rxjs";
import { AppConstants } from "../../app.constants";
import { ImageUploaderService } from "../../core/image-upload.service";
import { PromotionService } from "../../pages/cms/promotion/promotion.service";
import { StimulusModule } from "stimulus/src/packages/stimulus.module";
import { CommonModule } from "@angular/common";

export interface ImageUploaderFile {
    file?: File;
    name: string;
    progress?: string;
    src?: SafeUrl;
    id?: string;
    status?: 'PENDING' | 'UPLOADED';
}

@Component({
    selector: 'xpa-image-uploader',
    templateUrl: './image-uploader.component.html',
    host: {
        class: 'uploader',
        '[class.dragged-over]': 'draggedOver'
    },
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageUploaderComponent),
            multi: true
        },
        NgxUploaderModule
    ],
    standalone: true,
    imports: [StimulusModule, CommonModule]
})
export class ImageUploaderComponent implements OnInit {

    pendingRequest!: Subscription;
    options: UploaderOptions = {
        concurrency: 1,
        maxUploads: 1,
        maxFileSize: 5 * 1024 * 1024,
        allowedContentTypes: ['image/jpeg', 'image/png']
    };

    imgName!: string;
    file!: ImageUploaderFile | null;
    draggedOver = false;
    uploadInput = new EventEmitter<UploadInput>();
    titleMessage = 'Upload your screenshots';
    imageType: any
    showInitialView = true;
    showCompletedView = false;

    @Input()
    set title(title: string) {
        if (title) {
            this.titleMessage = title;
        }
    }

    @Input()
    set type(type: string) {
        if (type) {
            this.imageType = type;
        }
    }

    @Input()
    set imagepath(value: string) {

        if (value && this.imgName) {
            if (value.charAt(value.length - 1) !== '/') {
                value += '/';
            }
            this.file = {
                name: this.imgName,
                src: this.domSanitizer.bypassSecurityTrustUrl(value + this.imgName
                )
            };
            this.showInitialView = false;
            this.showCompletedView = true;
        }
    }

    @Output()
    uploadedFileInfo = new EventEmitter();

    constructor(
        private domSanitizer: DomSanitizer,
        private focusMonitor: FocusMonitor,
        private elRef: ElementRef,
        public appConstants: AppConstants,
        // private offerService: ProductService,
        private toastrService: NbToastrService,
        private imageUploaderService: ImageUploaderService,
        private promotionService: PromotionService

    ) {

    }

    ngOnInit(): void {
    }

    writeValue(imageName: string): void {
        if (imageName) {
            this.imgName = imageName;
        }
    }

    onUploadOutput(output: UploadOutput): void {
        console.log("output :" + output);
        switch (output.type) {
            case 'addedToQueue':
                if (output.file) {
                    const file: File | undefined = output.file.nativeFile;
                    if (file) {
                        this.file = {
                            file: file,
                            name: output.file.name,
                            src: this.imageSrc(file),
                            id: output.file.id,
                            status: 'PENDING',
                        };
                        console.log(this.file.src);
                        console.log(this.file.name);
                        this.updatedFiles(this.file);
                    } else {
                        console.log('output.file.nativeFile is undefined');
                    }
                } else {
                    console.log('output.file is undefined');
                }
                break;
            case 'dragOver':
                this.updateDraggedOver(true).subscribe(() => {
                    this.draggedOver = true;
                });
                break;
            case 'dragOut':
            case 'drop':
                this.updateDraggedOver(false).subscribe(() => {
                    this.draggedOver = false;
                });
                break;
            case 'rejected':
                let message = '';
                console.log('invalid type');
        }
    }






    private imageSrc(file: File) {
        const url = window.URL.createObjectURL(file);
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }

    updatedFiles(file: ImageUploaderFile) {
        if (file.file) {
            this.pendingRequest = this.imageUploaderService.singleImageUpload(file.file, this.imageType).subscribe(
                (response) => {
                    if (response.data && response.data.fileNames[0]) {
                        this.showInitialView = false;
                        this.showCompletedView = true;

                        if (this.imageType === "PROMOTION_IMAGE") {
                            this.promotionService.setImgPathResponseFileName(response.data.fileNames[0]);
                        }
                        this.uploadedFileInfo.emit(this.file);
                    }
                },
                (error) => {
                    this.removeImage();
                    console.log(error.message);
                }
            );
        }
    }



    removeImage(): void {
        this.uploadInput.emit({ type: 'remove', id: this.file?.id });
        this.file = null;
        this.uploadedFileInfo.emit(this.file);
        if (this.showCompletedView) {
            this.showCompletedView = false;
        }
        this.showInitialView = true;
    }

    updateDraggedOver(value: boolean) {
        return of(value).pipe(
            delay(300),
            distinctUntilChanged()
        );
    }

}