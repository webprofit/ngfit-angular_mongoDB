import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import 'rxjs/add/operator/toPromise';


class User {
  firstName: string;
  lastName: string;
  _id: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})



export class HomeComponent implements OnInit {
  users: User[];
  user: User;

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.userService.getUsers()
      .then(res => this.users = res['data'])
      .catch(err => console.log('errror app component')
      );
  }

  addUser(user) {
    this.userService.addUser(user)
      .then(res => {
        this.users.push(res['data']);
        this.user.firstName = '';
        this.user.lastName = '';
      })
      .catch(
        err => console.log(err)
      );
  }

  onDelete(id: any) {
    this.userService.deleteItem(id)
      .then(res => {
        const a = this.users.findIndex(x => x._id === res['data']);
        this.users.splice(a, 1);
      })
      .catch(
        err => console.log(err)
      );

  }

}
