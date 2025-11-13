import { Injectable, signal } from '@angular/core';
import { LoginRequest, AuthResponse } from '../../../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, throwError, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiUrl = 'http://localhost:8000/api/users';
private tokenKey = 'token';
private roleKey = 'user_role';
private tokenSubject = new BehaviorSubject<string | null>(null);

// _____________Signaux réactifs____________________
  // declaration d'un signal pour permettre de transmettre l'information en temps réel
isLoggedSignalService = signal<boolean>(false);
// declaration d'un signal pour verifier le role de l'utilisateur
isAdminSignalService = signal<boolean>(false);



constructor(
  private http: HttpClient,
  private router: Router,
  
) {
  // Charger le token au démarrage  
this.initAuthFromStorage();

}

// Initialisation au démarrage : on définit les fonctions en dehors et on l'appelle dnas le constructeur
  private initAuthFromStorage() {
    const token = localStorage.getItem(this.tokenKey);
      if (token) {
      this.tokenSubject.next(token);
    }
    const role = localStorage.getItem(this.roleKey) as 'admin' | 'user' | null;
    

    if (token && role) {
      this.isLoggedSignalService.set(true);
      this.isAdminSignalService.set(role === 'admin');
    }
  }

  // Connexion to back end
  login(email: string, password: string) : Observable<any> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login/`, { email, password }).pipe( // on retourne un Observable avec un type AuthResponse en postant sur l'adresse `${this.apiUrl}/login` où on prend la "valeur absolue" de la variable stockant l'url de l'api + le body de la requete {user, password} == JSON
      // pipe() permet d’enchaîner des opérateurs sur le flux de données.
      tap(response => { // tap est l'équivalent de try ; Ne modifie pas la réponse, Idéal pour :Stocker des données, Mettre à jour des signaux, Rediriger


        // Stockage sécurisé
        localStorage.setItem(this.tokenKey, response.access); // Est-ce bien tjs nécessaire ?
        // localStorage.setItem(this.roleKey, response.role);
        this.tokenSubject.next(response.access)

        // Mise à jour des signaux
        this.isLoggedSignalService.set(true);
        // this.isAdminSignalService.set(response.role === 'admin');

        // Redirection
        //  this.router.navigate([response.role === 'admin' ? '/admin' : '/app-player-component']);
         this.router.navigate(['/app-player-component']); // => a voir plus tard comment on gère les roles
      }),
      catchError(error => { // équivalent de except
        console.error('Login failed', error);
        return throwError(() => new Error('Identifiants incorrects'));
      })
    );
  }

  // Registration
  register(email: string, password: string, username?: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, {
      email,
      password,
      username
    }).pipe(
      tap(() => this.router.navigate(['/login'])),
      catchError(err => throwError(() => err))
    );
  }

  // Log out
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);

    this.isLoggedSignalService.set(false);
    this.isAdminSignalService.set(false);

    this.router.navigate(['/login']);
  }

  // Utilitaires
  // getToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);}
  
  getToken(): string | null {
  return this.tokenSubject.value;
  };

  getRole(): 'admin' | 'user' | null {
    return localStorage.getItem(this.roleKey) as 'admin' | 'user' | null;
  }
}
 // verification en fonction des données dans le service
// login(email : string, password : string){
  // recuperation de l'utilisateur dans la liste des utilisateurs
// const user = this.users.find(u => u.email === email);

 // si j'ai un utilisateur et que le mot de passe est correct
// if(user && user.password === password){
   // ajout d'information dans le localstorage quand l'utilisateur se connecte

   // mettre à jour le signal quand l'utilisateur se connecte
//   this.isLoggedSignalService.set(true);
  
//   if(user.isAdmin){
   // si l'utilisateur est admin je stocke son role 'admin' dans le localstorage
//   this.isAdminSignalService.set(true);
// localStorage.setItem('role','admin');
// localStorage.setItem('token', 'token')


// }else{
//   // si l'utilisateur n'est pas admin je stocke son role 'user' dans le localstorage
// localStorage.setItem('role','user');
// }
// }


// }

// register(){

// }

// logout(){
//   // suppression des informations dans le localstorage quand l'utilisateur se deconnecte
// localStorage.removeItem('role');


// // remettre les signaux à false quand l'utilisateur se deconnecte
// this.isLoggedSignalService.set(false);
// this.isAdminSignalService.set(false);
// }

// }