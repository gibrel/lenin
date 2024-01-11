import { Component } from '@angular/core';
import { Order } from '../shared/models/order';
import { OrdersService } from '../orders/orders.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent {
  order?: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private ordersService: OrdersService) {
    this.bcService.set('@OrderDetailed', ' ');
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    id && this.ordersService.getOrderDetailed(+id).subscribe({
      next: order => {
        this.order = order;
        this.bcService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
      }
    });
  }

}
