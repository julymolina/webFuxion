// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  paypal: {
    client_id:
      'ARgGNZRDN6Lm9AdXb0ZlOWR0ULt6HRUAqY5mA_3lcVmKOWs9Pt40vIoMwC8JSpEVYfmKrVkdXXITZVwf',
    payee: 'sb-qq92l1578270@business.example.com',
  },
  firebase: {
    apiKey: 'AIzaSyDmLDZOIb8XeDwtLNjlnqz6oKBrM7_u49s',
    authDomain: 'epigenetica-9ec6a.firebaseapp.com',
    projectId: 'epigenetica-9ec6a',
    storageBucket: 'epigenetica-9ec6a.appspot.com',
    messagingSenderId: '306561424695',
    appId: '1:306561424695:web:f5df141e75783d808d4eb2',
    measurementId: 'G-N5XRVPCPR2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
