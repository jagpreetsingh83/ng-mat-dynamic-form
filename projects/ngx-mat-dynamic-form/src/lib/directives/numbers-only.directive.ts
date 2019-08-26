import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libNumbersOnly]'
})
export class NumbersOnlyDirective {
  @Input() vtype: string;

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    if (this.vtype === 'number') {
      const input = event.target as HTMLInputElement;
      input.value = input.value.replace(/[^0-9]/g, '').trim();
    }
  }
}
