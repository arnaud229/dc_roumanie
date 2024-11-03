import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { UtilsService } from '../services/utils/utilis.service';


@Component({
  selector: 'app-pictuer-picker',
  templateUrl: './pictuer-picker.component.html',
  styleUrls: ['./pictuer-picker.component.scss']
})
export class PictuerPickerComponent {

  @Input() multiple: boolean = false;
  @Input() preview: boolean = true;
  @Input() displayMode: 'input' | 'empty' = 'input';
  @Input() fileTypes: string[] = ['image/*'];
  @ViewChild('fileInput') fileInput!: ElementRef;
 
  maxFileSize = 10;
  @Input() initialValues: any[] = [];

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() change: EventEmitter<any[]> = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onRemovePicture: EventEmitter<any[]> = new EventEmitter();
  selectedImages: any[] = [];
  removedImages: any[] = [];
  message = '';

  constructor(private platform: Platform, public utilsService: UtilsService) { }
  ngOnInit(): void {

    // this.selectedImages = this.ImagesOfEdit;
    console.log('ImageOfEdit :>> ', this.initialValues);
  }


  async ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValues']) {
      // Perform actions when the inputValue changes
      const initialValues = changes['initialValues'].currentValue;
      this.selectedImages = initialValues
      console.log('initialValues :>> ', initialValues);

    }
  }
  async emitChangeEvent() {
    // const isMobile = this.platform.is('mobile');

    if (this.multiple) {
      this.change.emit(this.selectedImages);
    }

    if (!this.multiple) {
      this.change.emit(this.selectedImages[0]);
    }
  }
  unselectImage(index: number) {
    this.removedImages.push(this.selectedImages[index])
    this.selectedImages.splice(index, 1);
    this.emitChangeEvent();
    this.onRemovePicture.emit(this.removedImages)
  }
  acceptedFormat() {
    return (this.fileTypes || ['image/*']).join(',');
  }
  async onFileChange(evt: any) {
    console.log('evt', evt);
    let files = [...evt.target.files];
    evt.target.value = null;
    const invalidFile = files.find(
      (e) => e.size / 1024 / 1024 > this.maxFileSize
    );
    if (invalidFile) {
      // this.utilsService.presentAlert({
      //   header: 'Fichier volumineux !',
      //   message:
      //     'La taille du fichier ' +
      //     invalidFile.name +
      //     ' excede la taille maximale autorisee',
      
      // });

      this.message = "La taille de votre fichier depasse 10MB, veuillez choisi un fichier moins de  10MB"


      return;
    }
    // .filter(e=>e.type.trim().length>0);
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      element.file = element;
      element.previewUrl = await this.fileToBase64(element);
    }
    this.selectedImages = this.multiple
      ? [...this.selectedImages, ...files]
      : [...files];
    this.emitChangeEvent();
    // this.selectedImages = new Array(10).fill({}).map(e=>files[0])
    console.log('this.selectedImages', this.selectedImages);
  }
  pickFile(options?: { accept: string }) {
    console.log('has click', this.fileInput);
    setTimeout(() => {
      this.fileInput.nativeElement.click();
    }, 500);
  }

  fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }
  fileIs(type: string, file: any) {
    return file.type && (file.type.startsWith(type) || file.type === type);
  }

}
