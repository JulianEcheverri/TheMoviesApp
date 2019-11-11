import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsanitizer'
})

export class DomsanitizerPipe implements PipeTransform {

  // the output of the image by default
  imageFormat: string;
  constructor(private dom: DomSanitizer) {}

  // used for transform the base64String to image
  // source represents the saved image-base64String
  transform(source: string) {
    this.imageFormat = 'data:image/png;base64,';
    return this.dom.bypassSecurityTrustResourceUrl(this.imageFormat + source);
  }
}
