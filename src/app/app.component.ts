import { Component } from "@angular/core";
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  schoolForm: FormGroup;
  openedClass:number=-1;
  submited:boolean=false;
  constructor(private _formBuilder: FormBuilder) {
    this.schoolForm = this._formBuilder.group({
      classes: this._formBuilder.array([])
    });
  }

  classes(): FormArray {
    return this.schoolForm.get("classes") as FormArray;
  }

  newClass(): FormGroup {
    return this._formBuilder.group({
      name: "",
      subjects: this._formBuilder.array([])
    });
  }

  addClass() {
    console.log("Adding a Class");
    this.classes().push(this.newClass());
  }

  // removeEmployee(classIndex: number) {
  //   this.classes().removeAt(classIndex);
  // }

  classSubjects(classIndex: number): FormArray {
    return this.classes()
      .at(classIndex)
      .get("subjects") as FormArray;
  }

  newSubject(): FormGroup {
    return this._formBuilder.group({
      name: "",
    });
  }

  addClassSubject(classIndex: number) {
    this.classSubjects(classIndex).push(this.newSubject());
  }

  // subjectBatch(subjectIndex:number, classIndex: number): FormArray {
  //   console.log('subjectIndex'+subjectIndex, 'classIndex'+classIndex)
  //   return this.classSubjects(classIndex)
  //     .at(subjectIndex)
  //     .get("batches") as FormArray;
  // }

  // newBatch(): FormGroup {
  //   return this._formBuilder.group({
  //     name: "",
  //   });
  // }

  // addSubjectBatch(subjectIndex:number, classIndex: number) {
  //   this.subjectBatch(subjectIndex, classIndex).push(this.newBatch());
  // }

  // removeEmployeeSkill(classIndex: number, skillIndex: number) {
  //   this.classSubjects(classIndex).removeAt(skillIndex);
  // }
  openClass(index:number){
    this.openedClass = index;
  }
  closeClass(index:number){
    this.openedClass = -1;
  }
  onSubmit() {
    this.submited = true;
    console.log(this.schoolForm.value);
  }
}
