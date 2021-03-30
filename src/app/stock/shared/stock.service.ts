import { Injectable } from '@angular/core';
import {SocketStock} from '../../app.module';
import {CreateStockDto} from './create-stock.dto';
import {StockDto} from './stock.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private socketStocks: SocketStock) { }
  create(stock: CreateStockDto): void {
    this.socketStocks.emit('create-stock', stock);
  }

  allStock(stock: StockDto): void {
    this.socketStocks.emit('all-stock', stock);
  }

  listenForCreateSuccess(): Observable<StockDto> {
    return this.socketStocks.fromEvent<StockDto>('stock-created-success');
  }
  listenForCreateError(): Observable<string> {
    return this.socketStocks.fromEvent<string>('stock-created-error');
  }

  listenForAllStocksSuccess(): Observable<StockDto[]> {
    return this.socketStocks.fromEvent<StockDto[]>('all-Stock-success');
  }

  listenForAllStocksError(): Observable<string> {
    return this.socketStocks.fromEvent<string>('all-Stock-error');
  }
}
