import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'create-product',
    loadChildren: () => import('./components/create-product/create-product.module').then( m => m.CreateProductPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'create-sales-agent',
    loadChildren: () => import('./components/create-sales-agent/create-sales-agent.module').then( m => m.CreateSalesAgentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-student',
    loadChildren: () => import('./components/create-student/create-student.module').then( m => m.CreateStudentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-subject',
    loadChildren: () => import('./components/create-subject/create-subject.module').then( m => m.CreateSubjectPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-videos',
    loadChildren: () => import('./components/create-videos/create-videos.module').then( m => m.CreateVideosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-sales-agent',
    loadChildren: () => import('./components/credit-sales-agent/credit-sales-agent.module').then( m => m.CreditSalesAgentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'manage-sales-agent',
    loadChildren: () => import('./components/manage-sales-agent/manage-sales-agent.module').then( m => m.ManageSalesAgentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-students',
    loadChildren: () => import('./components/manage-students/manage-students.module').then( m => m.ManageStudentsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-subjects',
    loadChildren: () => import('./components/manage-subjects/manage-subjects.module').then( m => m.ManageSubjectsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-videos',
    loadChildren: () => import('./components/manage-videos/manage-videos.module').then( m => m.ManageVideosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modify-products',
    loadChildren: () => import('./components/modify-products/modify-products.module').then( m => m.ModifyProductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modify-sales-agent',
    loadChildren: () => import('./components/modify-sales-agent/modify-sales-agent.module').then( m => m.ModifySalesAgentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modify-student',
    loadChildren: () => import('./components/modify-student/modify-student.module').then( m => m.ModifyStudentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modify-subjects',
    loadChildren: () => import('./components/modify-subjects/modify-subjects.module').then( m => m.ModifySubjectsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modify-videos',
    loadChildren: () => import('./components/modify-videos/modify-videos.module').then( m => m.ModifyVideosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'navbar',
    loadChildren: () => import('./components/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./components/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'happenings',
    loadChildren: () => import('./components/happenings/happenings.module').then( m => m.HappeningsPageModule)
  },
  {
    path: 'live-tv',
    loadChildren: () => import('./components/live-tv/live-tv.module').then( m => m.LiveTvPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
