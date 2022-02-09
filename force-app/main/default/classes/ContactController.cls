public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public  static List<Contact> ContactController() {
        return[select Id,Name,Title,Email From Contact Limit 20];
    }
}
