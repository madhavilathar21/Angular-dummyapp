import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataFetchService {
  creditors3MonthsURL: string = 'http://localhost:4200/assets/data/creditors3Months.json';
  creditorsDonutURL: string = 'http://localhost:4200/assets/data/creditorsDoughnut.json';
  overdueClearance3MonthsURL: string = 'http://localhost:4200/assets/data/overdueClearance3Months.json';
  overdueClearanceDonutURL: string = 'http://localhost:4200/assets/data/overdueClearanceDonut.json';
  paymentsRejected3MonthsURL: string = 'http://localhost:4200/assets/data/paymentRejected3Months.json';
  payments3MonthsURL: string = 'http://localhost:4200/assets/data/payments3Months.json';
  payments6MonthsURL: string = 'http://localhost:4200/assets/data/payments6Months.json';
  invoiceSubmission6MonthsUrl: string = 'http://localhost:4200/assets/data/invoiceSubmission6Months.json';
  salesURL: string = 'http://localhost:4200/assets/data/supplierSales.json';
  paymentComapre: string = 'http://localhost:4200/assets/data/payment-comparision.json';

  constructor(public http: HttpClient) { }

  getCreditors3Months(): Observable<any> {
    return this.http.get(this.creditors3MonthsURL);
  }

  getCreditorsDoughnut(): Observable<any> {
    return this.http.get(this.creditorsDonutURL);
  }

  getinvoiceSubmission(): Observable<any> {
    return this.http.get(this.invoiceSubmission6MonthsUrl);
  }

  getOverdueClearance3Months(): Observable<any> {
    return this.http.get(this.overdueClearance3MonthsURL);
  }

  getOverdueClearanceDonut(): Observable<any> {
    return this.http.get(this.overdueClearanceDonutURL);
  }

  getPaymentsRejected3Months(): Observable<any> {
    return this.http.get(this.paymentsRejected3MonthsURL);
  }

  getPayments3Months(): Observable<any> {
    return this.http.get(this.payments3MonthsURL);
  }
  getPayments6Months(): Observable<any> {
    return this.http.get(this.payments6MonthsURL);
  }

  getSales(): Observable<any> {
    return this.http.get(this.salesURL);
  }

  getPaymentComapre(): Observable<any> {
    return this.http.get(this.paymentComapre);
  }

}

