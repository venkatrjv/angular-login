import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatNumber]'
})
export class FormatNumberDirective {
  matchPhone = [];
  @Input() set appFormatNumber(phoneNumberString: boolean) {
    debugger;
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    this.matchPhone = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  }

  constructor(private elRef: ElementRef ) { }

  ngOnInit() {
    debugger;
    (this.elRef.nativeElement as HTMLSpanElement).innerText = '(' + this.matchPhone[1] + ') ' + this.matchPhone[2] + '-' + this.matchPhone[3]
  }


}
