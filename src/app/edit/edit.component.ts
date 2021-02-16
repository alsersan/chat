import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  public userForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
  });

  ngOnInit(): void {
    const defaultData = {
      name: this.usersService.activeUser.name.first,
      location: this.usersService.activeUser.location.city,
    };
    this.userForm.setValue(defaultData);
  }
}
