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
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
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