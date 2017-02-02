import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css'],
  providers: [PostService]
})
export class ApplyFormComponent implements OnInit {
  @Input() id: string;
  formData: any;
  applicant: FormGroup;
  btn_title: string = "Please attach your resume";

  constructor(
    private fb: FormBuilder,
    private service: PostService,
  ) { }

  ngOnInit() {
    this.applicant = this.fb.group({
      contactName: [''],
      contactEmail: [''],
      contactPhone: [''],
      id: [{ value: this.id, disabled: true }],
    });
    console.log('this.applicant = ', this.applicant.getRawValue());
  }

  setFile(event) {
    const data = new FormData();
    const target = event.srcElement || event.currentTarget || event.target;
    const file = target.files[0];
    data.append('file', file);
    this.formData = data;
    console.log('set file: ', file);
    this.btn_title = file.name;
  }

  submit() {
    let form = this.applicant.getRawValue();

    Object.keys(form)
      .forEach(key => this.formData.append(key, form[key]));

    this.service.post(this.formData)
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      );

    this.formData = new FormData();
  }
}
