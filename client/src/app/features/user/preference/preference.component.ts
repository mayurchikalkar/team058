import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { TextInputComponent } from '../../../shared/components/text-input/text-input.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

interface AgeGroup {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-preference',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    JsonPipe,
    MatError,
    TextInputComponent
  ],
  templateUrl: './preference.component.html',
  styleUrl: './preference.component.scss'
})
export class PreferenceComponent {
  private fb = inject(FormBuilder);
  ageGroup: AgeGroup[] = [
    {value: 'age-0-10', viewValue: '0 to 10'},
    {value: 'age-11-25', viewValue: '11 to 25'},
    {value: 'age-26-50', viewValue: '26 to 50'},
    {value: 'age-51-75', viewValue: '51 to 75'},
    {value: 'age-76', viewValue: '76+'},
  ];
  
  preferenceForm = this.fb.group({
    ageGroup: [''],
    gender: [''],
    areaCode: [''],
    userStyle: [''],
    userInterest: ['']
  });

  onSubmit() {
    
  }
}
