import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  private defaultClass = 'bg-slate-950';

  @Input() name = '';

  @Input() set class(cls: string) {
    this.defaultClass = `bg-${cls}`;
  }

  @Input() size = '2rem';

  get class() {
    return this.defaultClass;
  }

  get iconURL() {
    return `/assets/icons/${this.name}.svg`;
  }
}
