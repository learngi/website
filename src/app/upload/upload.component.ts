import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  showForm = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private _uploadService: UploadService) {}

  ngOnInit() {
    this.form = this.fb.group({
      course_id: ['', Validators.required],
      video: null
    });
  }

  addForm() {
    this.showForm = true;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('video').setValue(file);
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('course_id', this.form.get('course_id').value);
    input.append('video', this.form.get('video').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();

    this._uploadService.upload(formModel).subscribe(data => {
      if (data.success) {
        this.showForm = false;
      }
    });
  }
}
