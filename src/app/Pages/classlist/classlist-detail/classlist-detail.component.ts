import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassListStudentDTO } from 'src/app/DTOs/ClassList/ClassListDTO';
import { UserSex, SEXS } from 'src/app/DTOs/User/UserSex';

@Component({
  selector: 'app-classlist-detail',
  templateUrl: './classlist-detail.component.html',
  styleUrls: ['./classlist-detail.component.scss']
})
export class ClasslistDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  getData() {
    return this.data.person as any as ClassListStudentDTO;
  }

  sexCaption(sex: UserSex) {
    return SEXS.find(s => s.value === sex)?.key ?? '';
  }
}
