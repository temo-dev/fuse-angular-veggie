/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'product',
        title: 'Product',
        type : 'collapsable',
        icon : 'heroicons_outline:cube',
        link : '/product',
        children:[
            {
                id   : 'product.dashboard',
                title: 'Product Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/product/dashboard',
            },
            {
                id   : 'product.create',
                title: 'Create Product',
                type : 'basic',
                icon : 'heroicons_outline:plus',
                link : '/product/create',
            },
        ]
    }
];
///==============
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
