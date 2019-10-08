import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'pengguna', loadChildren: './pengguna/pengguna.module#PenggunaPageModule' },
  { path: 'daftar', loadChildren: './daftar/daftar.module#DaftarPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'keranjang', loadChildren: './keranjang/keranjang.module#KeranjangPageModule' },
  { path: 'tambahproduk', loadChildren: './tambahproduk/tambahproduk.module#TambahprodukPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
