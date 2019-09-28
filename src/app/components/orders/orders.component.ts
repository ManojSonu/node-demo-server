import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = []
  constructor(private http : HttpClient) { }

  ngOnInit() {
    const orderAPIUrl = 'http://localhost:3000/orders';

    this.http.get(orderAPIUrl).subscribe((data: any[]) =>{
      this.orders=data;
    });
  }    
}
