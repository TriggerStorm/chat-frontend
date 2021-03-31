import { Component, OnInit } from '@angular/core';
import {StockService} from './shared/stock.service';
import {StockDto} from './shared/stock.dto';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks: StockDto[];
  test = 'awqeqqeqe';
  stockId = null;
  stockSelect: StockDto;
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

  selectestock($event: any): void {
    this.stockSelect = $event;
    this.stocks.forEach(stock => {
      stock.selected = stock.id === $event.stocks.id;
    });
    console.log(this.stockSelect);
  }

  onClick(id: string): void {
    this.stockId = id;
    this.stocks.forEach(stock => {
      stock.selected = stock.id === id;
    });
    this.stocks.forEach(stock => {
      if (stock.id === id){
        this.stockSelect = stock;
      }
    });
    console.log(this.stockSelect);
  }

  updateStock(stockSelect: StockDto): void {

  }

  newVal(event: Event): void {
    // @ts-ignore
    const inpval = event.target.value;
    this.stockSelect.value = inpval;
    console.log(this.stockSelect.value);
    // @ts-ignore
    console.log(event.target.value);

  }
}
