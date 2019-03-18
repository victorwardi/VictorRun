import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {Repo} from '../models/repo.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {


    // Connect the module to work with http
    constructor(private http: HttpClient) {
    }

// Method for requesting the user
    getUser(name: string): Observable<User> {
        const url = 'https://api.github.com/users/' + name;
        return this.http.get <User>(url);
    }

// Method for requesting the user
    getUserRepos(name: string): Observable<Repo[]> {
        const url = 'https://api.github.com/users/' + name + '/repos';
        return this.http.get <Repo[]>(url);
    }

}
