import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { Usuario } from '../../models/Usuario';
import { LoginService } from '../../services/auth/login.service';
import { TableComponent } from '../../components/table/table.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavComponent, TableComponent, FormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
  userLoginOn:boolean=false;
  userData?:Usuario;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });
  }
}
