import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account_Object from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';



export default class LightningRecordForm extends LightningElement {

ObjectApiName=Account_Object;

fields=[NAME_FIELD,REVENUE_FIELD,INDUSTRY_FIELD];

handleSuccess(event){
    const toastEvent = new ShowToastEvent({
        title: "Account created",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });
    this.dispatchEvent(toastEvent);
}

}