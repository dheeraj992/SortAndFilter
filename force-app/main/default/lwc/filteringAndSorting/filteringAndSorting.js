import { LightningElement, wire } from 'lwc';
import ContactController from '@salesforce/apex/ContactController.ContactController'
export default class FilteringAndSorting extends LightningElement {

    fulldata=[];
    filteredData=[];
    timer;
    filterBy="Name";
    SortedBy="asc";
    
    headings=["Id","Name","Title","Email"];
    @wire(ContactController)
    AllContacts({data,error}){
    if(data){
        this.fulldata=data;
        this.filteredData=data;
    }
    else{
        console.log(error);
    }

        
    }
    handleSorting(event){
        this.SortedBy=event.target.value;
        this.filteredData=this.SortBy(this.filteredData)
    }

    SortBy(data){

        const clonedata=[...data];
        clonedata.sort((a,b)=>{
           if(a[this.SortedBy]===b[this.SortedBy]){
               return 0;
           }
           else if(a[this.SortedBy]<b[this.SortedBy]){
               return -1;
           }
           else{
               return 1;
           } 
        })
        return clonedata;

    }

    handlechange(event){
        this.filterBy=event.target.value;
        console.log(this.filterBy)
    }
    get options(){
        return [
          {label:'Id',value:'Id'},{label:'Name',value:'Name'},{label:'Title',value:'Title'},{label:'Email',value:'email'}  
        ]
    }

    filterdata(event){
        const value=event.target.value;
        window.clearTimeout(this.timer);
       this.timer=window.setTimeout(()=>{
           console.log(value)
            this.filteredData=this.fulldata.filter(eachobj=>{
                const val=eachobj[this.filterBy]? eachobj[this.filterBy]:''
                return val.includes(value)
                /*return Object.keys(eachobj).some(key=>{
                   return eachobj[key].includes(value) 
                })*/
            })
        },1000)
        
        
    }
    
}