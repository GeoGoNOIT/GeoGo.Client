import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Game} from "../models/Game";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamePath = environment.apiUrl + 'games'
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data): Observable<Game> {
    return this.http.post<Game>(this.gamePath, data);
  }
}
