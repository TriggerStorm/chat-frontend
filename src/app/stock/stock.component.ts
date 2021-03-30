import { Component, OnInit } from '@angular/core';
import {StockService} from './shared/stock.service';
import {StockDto} from './shared/stock.dto';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks: StockDto[];
  test = 'awqeqqeqe';
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.allStocks();
  }

  allStocks(): void{
    this.stockService.listenForAllStocksSuccess()
      .subscribe(allStocks => {
        this.stocks = allStocks;
        console.log(this.stocks.length);
      });
  }
}
