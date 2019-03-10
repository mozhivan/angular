import {Component } from '@angular/core';

class Item{
    purchase: string;
    price: number;
    done: boolean;

    constructor(purchase: string, price: number){
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }

}

@Component({
    selector: 'purchase-app',
    template:`<div class="page-header">
    <h1>  Shopping list </h1>
</div>
<div class="panel">
    <div class="form-inline">
        <div class="form-group">
            <div class="col-md-8">
                <input class="form-control" [(ngModel)]="text" placeholder = "Item" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6">
                <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-offset-2 col-md-8">
                <button class="btn btn-default" (click)="addItem(text, price)">Add</button>
            </div>
        </div>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Added</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.purchase}}</td>
                <td>{{item.price}}</td>
                <td><input type="checkbox" [(ngModel)]="item.done" /></td>
            </tr>
        </tbody>
    </table>
</div>`
})

export class AppComponent{
    items: Item[] = 
    [
        { purchase: "Bread", done: false, price: 32.9 },
        { purchase: "Milk", done: false, price: 70 },
        { purchase: "Apples", done: true, price: 110.6 },
        { purchase: "Meat", done: false, price: 640 }
    ];

    addItem(itemName: string, price: number){
        if (!itemName || !price)
            throw console.error("Invalid item value");
            return;
        this.items.push(new Item(itemName, price));
    }

}