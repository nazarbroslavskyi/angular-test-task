import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sort-control',
  templateUrl: './sort-control.component.html',
  styleUrls: ['./sort-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SortControlComponent),
    multi: true
   }]
})
export class SortControlComponent implements ControlValueAccessor {
  @Input() header: string;
  @Input() filters: Array<{value: string, label: string}>;
  form: FormGroup;
  selectedFilter: string = null;
  touched = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      filters: ['']
    });

    this.form.valueChanges.subscribe((formValue: { filters: string }) => {
      this.onChange(formValue.filters);
      this.markAsTouched();
    });
  }

  onTouched = () => {};

  onChange = _ => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(onTouched: any): void {
    if(!this.touched) {
      this.onTouched();
      this.touched = true;
    }
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(selectedValue: string): void {
    this.form.patchValue({ filters: selectedValue });
  }
}
