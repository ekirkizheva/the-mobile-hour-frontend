import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  private _class = 'bg-slate-950';

  @Input() name = '';

  @Input() set class(cls: string) {
    this._class = `bg-${cls}`;
  }

  @Input() size = '2rem';

  get class() {
    return this._class;
  }

  get iconURL() {
    return `/assets/icons/${this.name}.svg`;
  }
}
