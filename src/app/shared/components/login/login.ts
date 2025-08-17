import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent{
  isLogin = true;
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }
  onSubmit() {
    if (this.isLogin) {
      if (this.email === 'linh@gmail.com' && this.password === '123456') {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/list']);
      } else {
        alert('Sai email hoặc mật khẩu!');
      }
    } else {
      if (this.password !== this.confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }
      localStorage.setItem('user', JSON.stringify({ email: this.email, password: this.password }));
      alert('Đăng ký thành công! Hãy đăng nhập.');
      this.isLogin = true;
    }
  }
}
