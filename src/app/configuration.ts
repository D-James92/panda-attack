import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  public static APP_NAME: string = "PANDA ATTACK";
  public static score: number;
  public static gameStart: boolean;
  
  // APP INIT CODE
  public AppInit() {
    return new Promise((resolve, reject) => {
      // INIT VARIABLES
      Configuration.score = 0;
      Configuration.gameStart = false;
      resolve(true);
    });
  }

}
