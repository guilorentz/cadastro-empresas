import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompanyById(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${companyId}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}/companies`, company);
  }

  updateCompany(
    companyId: number,
    companyUpdated: Company
  ): Observable<Company> {
    return this.http.put<Company>(
      `${this.apiUrl}/companies/${companyId}`,
      companyUpdated
    );
  }

  deleteCompany(companyId: number): Observable<Company> {
    return this.http.delete<Company>(`${this.apiUrl}/companies/${companyId}`);
  }
}
