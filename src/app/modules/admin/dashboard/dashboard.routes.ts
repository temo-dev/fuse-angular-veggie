import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/modules/admin/dashboard/dashboard.component';
import { ProductComponent } from '../product/product.component';

export default [
    {
        path     : '',
        component: DashboardComponent,
    },
] as Routes;
