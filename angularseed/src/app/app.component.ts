import {Component} from '@angular/core';

@Component({
    selector: 'hello-app',
    template: `<label>Enter your name:</label>
    <input [(ngModel)]="name" placeholder="Ivan Ivanov">
    <h1>Your are welcome, {{name}}!</h1>`
})
export class AppComponent{
    name = 'User';
}
