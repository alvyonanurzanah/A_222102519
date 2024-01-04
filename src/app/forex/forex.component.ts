import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit,Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient){ }

  ngAfterViewInit(): void{
    this.renderer.removeClass(document.body,"sidebar-open");
    this.renderer.addClass(document.body,"sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );
    this.getData();
  }

  ngOnInit():void{
  }
  getData(): void{
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=d62ecc3490cc452db8904635d7f0b610";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [ 1, "USD", idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR/ rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [ 2, "SGD", sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR/ rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [ 3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR/ rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "SGD");
      console.log("HKD : " + hkd2);
      var row = [ 4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR/ rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [ 5, "BTC", btc2];
      this._table1.row.add(row);

      var azn = rates.IDR/ rates.AZN;
      var azn2 = formatCurrency(azn, "en-US", "", "AZN");
      console.log("AZN : " + azn2);
      var row = [ 6, "AZN", azn2];
      this._table1.row.add(row);

      var cdf = rates.IDR/ rates.CDF;
      var cdf2 = formatCurrency(btc, "en-US", "", "CDF");
      console.log("CDF : " + cdf2);
      var row = [ 7, "CDF", cdf2];
      this._table1.row.add(row);

      var aud = rates.IDR/ rates.AUD;
      var aud2 = formatCurrency(aud, "en-US", "", "AUD");
      console.log("AUD : " + aud2);
      var row = [ 8, "AUD", aud2];
      this._table1.row.add(row);

      var inr = rates.IDR/ rates.INR;
      var inr2 = formatCurrency(inr, "en-US", "", "INR");
      console.log("INR : " + inr2);
      var row = [ 9, "INR", inr2];
      this._table1.row.add(row);

      var jep = rates.IDR/ rates.JEP;
      var jep2 = formatCurrency(jep, "en-US", "", "JEP");
      console.log("JEP : " + jep2);
      var row = [ 10, "JEP", jep2];
      this._table1.row.add(row);

      this._table1.draw(false)
    });
  }
}
