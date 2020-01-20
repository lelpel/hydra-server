export class ConsentConfirmDto {
  challenge: string;
  submit: string;
  grant_scope: any; //string or string array
  remember: any;
}
