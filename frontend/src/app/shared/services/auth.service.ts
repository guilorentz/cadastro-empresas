import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSignal = signal<boolean>(false);
  isAuthenticated = computed(() => this.isAuthenticatedSignal());

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isAuthenticatedSignal.set(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticatedSignal.set(false);
    localStorage.removeItem('isAuthenticated');
  }

  checkAuthStatus(): void {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticatedSignal.set(isAuth);
  }
}