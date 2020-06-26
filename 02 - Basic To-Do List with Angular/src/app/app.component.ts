import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo-List-with-Angular';
  // Few Examples already on the list
  list = [
    {description: "Go to the Grocery Store", completed: true},
    {description: "Study for the Control Theory exam", completed: false},
    {description: "Buy batteries", completed: true},
    {description: "Update Python libraries", completed: false},
    {description: "Add (lots of) CSS to this 'UI'", completed: false}
  ];
  // currentTask
  addTask(item) {
    if (item.value === "") {
      return;
    }
    this.list.push({
      description: item.value,
      completed: false
    });
    item.value = "";
  }
  remove(index) {
    // const index = this.list.findIndex(each.description => each.description === item);
    this.list.splice(index, 1);
  }
  toggle(item) {
    item.completed = !item.completed;
  }
}
