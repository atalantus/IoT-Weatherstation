import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TemperatureData } from './temp_data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class TempDataService {

  private dataUrl = 'api/data';

  constructor(private http: HttpClient) { }

  /**
   * Get all the @see TemperatureData objects from the server.
   */
  getData (): Observable<TemperatureData[]> {
    return this.http.get<TemperatureData[]>(this.dataUrl)
      .pipe(
        catchError(this.handleError('getData', []))
      );
  }

  /**
   * Adds a new @see TemperatureData object to the server.
   * @param data - data to add
   */
  addData (data: TemperatureData): Observable<TemperatureData> {
    return this.http.post<TemperatureData>(this.dataUrl, data, httpOptions).pipe(
      catchError(this.handleError<TemperatureData>('addData'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
