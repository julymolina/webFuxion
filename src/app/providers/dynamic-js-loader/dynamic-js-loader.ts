import { from, Observable } from 'rxjs';

export function loadDynamicScript(url: string, libraryName: string, callback?: () => any): Observable<boolean> {
  return from(
    new Promise((resolve, reject) => {
      const existingScript = document.getElementById(libraryName);

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = url; // URL for the third-party library being loaded.
        script.id = libraryName; // e.g., googleMaps or stripe
        document.body.appendChild(script);

        script.onload = () => {
          if (callback) {
            callback();
          }
          resolve(true);
        };
      }

      if (existingScript) {
        if (callback) {
          callback();
        }
        resolve(true);
      }
    })
  ) as Observable<boolean>;
}
