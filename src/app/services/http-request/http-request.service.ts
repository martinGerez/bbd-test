import { Injectable } from '@angular/core';
import { cordova } from '@ionic-native/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor() { }

  perform() {
    let request = cordova('GDHttpRequestPlugin', 'createRequest', {}, []);
    let request2 = cordova('GDHttpRequest', 'createRequest', {}, []);
    let windowPlugin1 = window.plugins.GDHttpRequest;
    let windowPlugin2 = window.plugins.GDHttpRequestPlugin;
    
    console.log('request:', request);
    console.log('request2:', request2);
    console.log('windowPlugin1:', windowPlugin1);
    console.log('windowPlugin2:', windowPlugin2);
  }
}
