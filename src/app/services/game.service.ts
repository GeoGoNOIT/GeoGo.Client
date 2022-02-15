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

  getGames(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(this.gamePath);
  }

  getGame(id): Observable<Game> {
    return this.http.get<Game>(this.gamePath + '/' + id)
  }

  editGame(data) {
    return this.http.put(this.gamePath, data);
  }

  deleteGame(id) {
    return this.http.delete(this.gamePath + '/' + id);
  }
}
