import { Component } from '@angular/core';
import { ScoreService } from './score.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'GitHub Score';

  user: User = new User();

  constructor(private _scoreService: ScoreService){}

  findUser(login:string){
    this._scoreService.retrieveUser(login)
      .then( (data) => {this.user.data = data;
                       this.user.score = data.followers + data.public_repos;
                        }
      )
      .catch( err => console.log(err));
  }

  onSubmit(){
    this.findUser(this.user.login);
  }
}
