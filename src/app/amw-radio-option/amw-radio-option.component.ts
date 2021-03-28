import { ThrowStmt } from '@angular/compiler';
import { EventEmitter, Output, SkipSelf } from '@angular/core';
import { ChangeDetectionStrategy, Component,
  Input,
   ViewEncapsulation} from '@angular/core';
import { ControlContainer, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-amw-radio-option',
  templateUrl: './amw-radio-option.component.html',
  styleUrls: ['./amw-radio-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})
export class AmwRadioOptionComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() controlName: string;
  @Input() checked = false;
  form: FormGroup;

  @Output() open: EventEmitter<any> = new EventEmitter();

  onInputBlur() {
    console.log(blur);

    this.open.emit();
  }
}
