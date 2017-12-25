import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  ElementRef,
  Renderer
} from '@angular/core'
import { OnInit } from '@angular/core'

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') private isCollapsed
  @Input()
  private set appDropdown(value: boolean) {
    if (!value) {
      this.isCollapsed = false
    } else {
      this.isCollapsed = true
    }
  }
  ngOnInit() {}
}
