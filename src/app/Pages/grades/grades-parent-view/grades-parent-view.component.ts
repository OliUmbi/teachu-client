import {Component, Input} from '@angular/core';
import { ChildDataDTO } from 'src/app/DTOs/xx_old/ChildDataDTO';
import {GradeSemesterDTO} from "../../../DTOs/Grade/GradeDTOs";

@Component({
    selector: 'app-grades-parent-view',
    templateUrl: './grades-parent-view.component.html',
    styleUrls: ['./grades-parent-view.component.scss']
})
export class GradesParentViewComponent {

    childrenMarks: ChildDataDTO[] = [];
    loaded: boolean = false;

    constructor() { }

    @Input() set childrenData(childrenData: ChildDataDTO[]) {
        this.childrenMarks = childrenData;
        // noinspection SuspiciousTypeOfGuard (this is a hack to make the component work ):)
        this.loaded = this.childrenMarks instanceof Array;
    }

    getChildSemesters(child: ChildDataDTO): GradeSemesterDTO[] {
        return child.marks;
    }

}
