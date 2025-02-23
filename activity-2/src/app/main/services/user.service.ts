import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      email: 'sevilla@gmail.com',
      password: 'sevilla',
      profilePic: 'sevilla.png',
      name: 'John Carlo Sevilla',
      age: 21,
      birthday: '2004-01-20',
      gender: 'Male',
      address: 'Julita, Leyte'
    },
    {
      email: 'rovembe@gmail.com',
      password: 'rovembe',
      profilePic: 'rovembe.png',
      name: 'Kristoeffer Rey Rovembe',
      age: 20,
      birthday: '2005-02-15',
      gender: 'Male',
      address: 'Dulag, Leyte'
    },
    {
      email: 'deveyra@gmail.com',
      password: 'deveyra',
      profilePic: 'deveyra.jpg',
      name: 'Nicko De Veyra',
      age: 20,
      birthday: '2004-06-04',
      gender: 'Male',
      address: 'Dulag, Leyte'
    },
    {
      email: 'terado@gmail.com',
      password: 'terado',
      profilePic: 'terado.jpg',
      name: 'Braily Terado',
      age: 20,
      birthday: '2005-03-08',
      gender: 'Male',
      address: 'Mayorga, Leyte'
    },
    {
      email: 'nierves@gmail.com',
      password: 'nierves',
      profilePic: 'nierves.jpg',
      name: 'Weldon Nierves',
      age: 20,
      birthday: '2004-12-07',
      gender: 'Male',
      address: 'Mayorga, Leyte'
    }
  ];

  private loggedInUser: any = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getUser() {
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/main/login']);
  }
}
