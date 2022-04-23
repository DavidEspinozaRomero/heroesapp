import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ServiceNameService {
  constructor(private _http: HttpClient) {}

  getHeroes(): Observer<any> {
		const URL:number = `${environment.urlApp}/heroes`
		return this._http.get(URL);
	}
}
