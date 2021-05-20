import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { OverdueClearenceComponent } from './components/overdue-clearence/overdue-clearence.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { OverduesComponent } from './components/overdues/overdues.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { CreditorsDonutComponent } from './components/creditors-donut/creditors-donut.component';
import { OverdueClearenceDonutComponent } from './components/overdue-clearence-donut/overdue-clearence-donut.component';
import { RegionComponentComponent } from './components/region-component/region-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegionCardComponent } from './components/region-card/region-card.component';

import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { RegionChartComponent } from './components/region-chart/region-chart.component';
import { AvtarBoxComponent } from './components/avtar-box/avtar-box.component';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { FilterComponent } from './components/filter/filter.component';

import { DatePipe } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { InvoiceSubmissionComponent } from './components/invoice-submission/invoice-submission.component';
import { QueryTableComponent } from './components/query-table/query-table.component';
import { ComparisionComponent } from './components/comparision/comparision.component';
import { PaymentCompareComponent } from './components/payment-compare/payment-compare.component';
import { OverduesClearenceCompareComponent } from './components/overdues-clearence-compare/overdues-clearence-compare.component';
import { PaymentRejectionCompareComponent } from './components/payment-rejection-compare/payment-rejection-compare.component';
import { InvoiceSubmissionCompareComponent } from './components/invoice-submission-compare/invoice-submission-compare.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppMenuComponent,
    HomePageComponent,
    HighchartsChartComponent,
    OverdueClearenceComponent,
    PaymentsComponent,
    OverduesComponent,
    CreditorsComponent,
    CreditorsDonutComponent,
    OverdueClearenceDonutComponent,
    RegionComponentComponent,
    LoginComponent,
    RegionCardComponent,
    RegionChartComponent,
    AvtarBoxComponent,
    SupplierTableComponent,
    FilterComponent,
    AdminComponent,
    InvoiceSubmissionComponent,
    QueryTableComponent,
    ComparisionComponent,
    PaymentCompareComponent,
    OverduesClearenceCompareComponent,
    PaymentRejectionCompareComponent,
    InvoiceSubmissionCompareComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    ChartModule,
    SidebarModule,
    ButtonModule,
    NgxSpinnerModule,
    SplitButtonModule,
    DialogModule,
    TableModule,
    CheckboxModule,
    HttpClientModule,
    MatSidenavModule,
    ToastModule
  ],
  providers: [CommonService, DatePipe, NgxSpinnerService,  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
