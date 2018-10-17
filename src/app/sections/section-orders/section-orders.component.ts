import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';

/** mock data */
const orders : Order[]= [
  { id:1, 
    customer:
    { id:1 , 
      name:'ABD FSG', 
      state: 'CS', 
      email: 'asb@mail.com'
    }, 
    total:210, 
    placed: new Date(2018, 10, 1), 
    fulfilled: new Date(2018, 10, 15) , 
    status: 'Completed'
  },
  { id:2, 
    customer:
    { id:1 , 
      name:'JHH FSG', 
      state: 'CS', 
      email: 'jhs@mail.com'
    }, 
    total:240, 
    placed: new Date(2018, 10, 1), 
    fulfilled: new Date(2018, 10, 15) , 
    status: 'Completed'
  },
  { id:3, 
    customer:
    { id:1 , 
      name:'LKK FSG', 
      state: 'CS', 
      email: 'jhs@mail.com'
    }, 
    total:110, 
    placed: new Date(2018, 10, 1), 
    fulfilled: new Date(2018, 10, 15) , 
    status: 'Completed'
  }
]

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  orders: Order[] = orders;
  
  constructor() { }

  ngOnInit() {
  }

}
