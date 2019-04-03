import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transferHtmlContent'
})
export class TransferHtmlContentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const oParser = new DOMParser();
    const oDOM = oParser.parseFromString(value, 'text/html');
    const text = oDOM.body.innerText;
    return text;
  }

}
