import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'vrailogin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'vrailogin',
    loadChildren: () => import('./vrailogin/vrailogin.module').then( m => m.VrailoginPageModule)
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./utilisateur/utilisateur.module').then( m => m.UtilisateurPageModule)
  },
  {
    path: 'region/:id',
    loadChildren: () => import('./region/region.module').then( m => m.RegionPageModule)
  },
  {
    path: 'ajoutregion',
    loadChildren: () => import('./ajoutregion/ajoutregion.module').then( m => m.AjoutregionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
